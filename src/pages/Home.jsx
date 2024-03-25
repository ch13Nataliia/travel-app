// import React from 'react'
import  NatureVid  from '../assets/video/NatureVid.mp4'
import BannerImg from '../components/BannerImg/BannerImg';
import Hero from '../components/hero/Hero';
import Places from '../components/places/Places';
import BannerPic from '../assets/cover-women.jpg'
import Banner2 from "../assets/travel-cover2.jpg";
import Blogs from './Blogs';
import Banner from '../components/banner/Banner';
import Testimonial from '../components/testimonial/Testimonial';




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
        <Places />
        <BannerImg img={BannerPic}/>
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
