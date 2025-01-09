import React, { useRef } from 'react'
import * as images from '../assets/images'
import { useState, useEffect } from 'react'
import iconPrevious from '../assets/images/icon-previous.svg'
import iconNext from '../assets/images/icon-next.svg'
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import iconCart from '../assets/images/icon-cart.svg'

function MainSection({number, setNumber}) {

  const [currentShownImage, setCurrentShownImage] = useState(images.product1)
  const activeThumbnailRef = useRef(null)

  useEffect(() => {
    const defaultThumbnail = document.querySelector(`img[src="${images.product1Thumbnail}"]`);
    if (defaultThumbnail) {
      defaultThumbnail.classList.add('opacity-50');
      activeThumbnailRef.current = defaultThumbnail;
    }
  }, []);

  const handleThumbnailClick = (key, value) => {
    const mainImageKey = key.replace('Thumbnail', '');
    setCurrentShownImage(images[mainImageKey]);

    if (activeThumbnailRef.current) {
      activeThumbnailRef.current.classList.remove('opacity-50');
    }

    activeThumbnailRef.current = value;
    activeThumbnailRef.current.classList.add('opacity-50');
  };

  return (
    <div className=' w-9/12 flex gap-2 justify-center items-center'>
      <div className=' w-full h-full flex flex-col justify-center items-center gap-6 p-5'>
        <div>
          <img src={currentShownImage} alt="" className='h-full w-auto rounded-lg'/>
        </div>
        <div className='w-full'>
            <ul className='flex justify-between'>
            {Object.entries(images).map(([key, value]) => (
              key.includes('Thumbnail')&&<li key={key}>
                <img 
                    src={value} 
                    className='h-20 rounded-md cursor-pointer border-2 border-transparent hover:border-yellow-300 transition-all duration-500' 
                    onClick={(e) => handleThumbnailClick(key, e.target)}
                    alt={key} 
                  />
              </li>
            ))}
            </ul>
        </div>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xs font-inconsolata font-black tracking-widest text-gray-500 mb-2'>SNEAKER COMPANY</h3>
        <h1 className='text-6xl font-sans tracking-tighter font-bold mb-4'>Fall Limited
          <br /> 
        Sneakers</h1>
        <p className='font-sans text-xs text-wrap text-gray-400 leading-5'>These low-profile sneakers are your perfect casual wear companion. Featurring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <h2 className='mt-6 text-lg font-bold'>$125.00</h2>
        <h3 className='line-through opacity-50 font-bold text-xs'>$250.00</h3>
        <div className='flex mt-6'>
          <div className='flex bg-gray-200 w-28 h-10 justify-between px-2 rounded-lg items-center'>
            <button onClick={() => setNumber(number => number - 1)}><img src={iconMinus} alt="" className='opacity-60'/></button>
            <p className='text-sm font-bold font-inconsolata'>{number}</p>
            <button onClick={() => setNumber(number => number + 1)}><img src={iconPlus} alt="" className='opacity-60'/></button>
          </div>
          <button className='flex items-center justify-center bg-orange-400 bg-opacity-70 text-black w-44 h-10 rounded-lg ml-4 font-bold text-[0.75rem] font-inconsolata tracking-tighter'>
            <img src={iconCart} alt="" className='w-5 mr-4'/>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainSection