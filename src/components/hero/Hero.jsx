import React from 'react';
import bannerBookImg from '../../assets/pngwing 1.png';

const Hero = () => {
    return (
  <div className="hero bg-base-200 min-h-screen rounded-2xl mt-10  py-10">
    <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
    <img src={bannerBookImg} />
    <div  className='space-y-6 md:space-y-12'>
      <h1 className="text-4xl leading-12 md:text-6xl font-semibold fire-font md:leading-20">Books to freshen up <br /> your bookshelf</h1>
     
      <button className="btn bg-[#23BE0A] text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Hero;