import {useEffect, useRef, useState} from 'react'
import iconUpload from '../assets/images/icon-upload.svg'
import closeButton from '../assets/images/close-button.svg'

const Form = () => {

  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [fileType, setFileType] = useState('');
  const [file, setFile] = useState(null);

  const UploadContainer = useRef(null)
  
  const fileDisplayHandle = (event) => {
    // event.preventDefault();
    const file = event.target.files[0];
    if(file){
      changeDisplayUploadContainer(file)
    }
  }

  const handleClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    // Reset file-related states
    setFile(null);
    setFileName('');
    setFileSize('');
    setFileType('');
  
    // Clear and reset UploadContainer
    UploadContainer.current.style.borderStyle = "dotted";
    UploadContainer.current.innerHTML = `
      <label for="fileInput" class="w-full h-full cursor-pointer flex justify-center flex-col items-center text-[0.5rem] text-slate-100 hover:text-slate-500 gap-2">
        <img src=${iconUpload} alt="" class="bg-white bg-opacity-20 rounded-md"/>
        Drag files here or click to upload
      </label>
      <input type="file" id="fileInput" class="hidden"/>
    `;
  
    // Reset file input listener
    const fileInput = UploadContainer.current.querySelector("#fileInput");
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        changeDisplayUploadContainer(file);
      }
    });
  };

  useEffect(() => {
    if (fileName && file) {
      console.log(`updated File Name:${fileName}
        File Size:${fileSize}
        File Type:${fileType}`);
      const fileURL = URL.createObjectURL(file);
      UploadContainer.current.style.borderStyle = "solid";
  
      // Dynamically update the UploadContainer's innerHTML
      UploadContainer.current.innerHTML = `
        <div class="relative flex justify-center items-center gap-3">
          <img src="${fileURL}" alt="preview" class="w-16 h-16 object-cover rounded"/>
          <button class="absolute bg-white bg-opacity-15 top-0 right-0 close-button">
            <img src="${closeButton}" alt="close" class="w-2 h-2"/>
          </button>
          <div class="flex flex-col relative">
            <p class="text-xs">${fileName}</p>
            <p class="text-[0.5rem] text-gray-400">${(fileSize / (1024 * 1024)).toFixed(2) + " MB"}</p>
          </div>
        </div>
      `;
  
      // Add event listener for close button dynamically
      const closeButtonElement = UploadContainer.current.querySelector('.close-button');
      closeButtonElement.addEventListener('click', handleClose);
  
      // Cleanup: Remove event listener on component unmount
      return () => {
        if (closeButtonElement) {
          closeButtonElement.removeEventListener('click', handleClose);
        }
      };
    }
  }, [fileName, file]);

  const changeDisplayUploadContainer = (file)=>{
    if(!file.type.startsWith('image/')){
      alert('Please upload an image file');
      return;
    }
    setFile(file);
    setFileName(file.name);
    setFileSize(file.size);
    setFileType(file.type);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  }
  

  return (
    <form onSubmit={handleSubmit} className='flex w-56 items-center flex-col mt-10 text-white'>
      <div className="flex justify-center items-center border-2 border-dotted rounded-md border-gray-500 mb-8 w-full h-32" ref={UploadContainer}>
        <label htmlFor="fileInput" className="w-full h-full cursor-pointer flex justify-center flex-col items-center text-[0.5rem] text-slate-100 hover:text-slate-500 gap-2">
          <img src={iconUpload} alt="" className='bg-white bg-opacity-20 rounded-md'/>
          Drag files here or click to upload
        </label>
        <input type="file" id="fileInput" className="hidden" onChange={fileDisplayHandle}/>
      </div>

      <label htmlFor="FullName" className='FormLabel'>
        Full Name
        <input className='FormInput' id="FullName" type="text"/>
      </label>
      <label htmlFor="Email" className='FormLabel'>
        Email Address
        <input className='FormInput' type="email" id="UserEmail" 
        placeholder='example@mail.com'/>
      </label>
      <label htmlFor="github" className='FormLabel'>
        Github Username
        <input className='FormInput' type="text" id="github" placeholder='@yourusername'/>
      </label>
      <button type="submit" className='bg-[#dc6d60] text-black w-full h-6 rounded-md mt-5 text-[0.6rem] font-[sans serif] font-black'>Generate My Ticket

      </button>
    </form>
  )
}

export default Form