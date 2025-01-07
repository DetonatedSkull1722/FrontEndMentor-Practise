import React from 'react';
import Main from './Sections/MainSection';
import Navigation from './Sections/Navigation';

export default function App() {
  return (
    <main className='flex items-center flex-col'>
      <Navigation/>
      <Main/>
    </main>
  ) 
}