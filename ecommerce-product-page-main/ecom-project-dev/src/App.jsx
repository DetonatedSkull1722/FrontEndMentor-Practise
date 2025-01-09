import React from 'react';
import Main from './Sections/MainSection';
import Navigation from './Sections/Navigation';
import { useState } from 'react';

export default function App() {
   const [number, setNumber] = useState(0)

   return (
    <main className='flex items-center flex-col'>
      
      <Navigation
        number={number}
        setNumber={setNumber}
      />
      <Main 
        number={number}
        setNumber={setNumber}
      />
    </main>
  ) 
}