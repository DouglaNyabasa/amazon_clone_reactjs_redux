import React from 'react';
import Carousel from '../Carousel/Carousel';

const HomePage = () => {
  return (
    <div className='bg-amazonClone-background'>
      <div className="min-w-[1000px] max-w-[1500px] bg-slate-500 m-auto">
        <Carousel/>
      </div>
    </div>
  );
}

export default HomePage;
