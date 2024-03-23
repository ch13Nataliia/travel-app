// import React from 'react'
import  NatureVid  from '../assets/video/NatureVid.mp4'
import Hero from '../components/hero/Hero';


const Home = () => {
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        
      </div>
    </>
  );
};

export default Home;
