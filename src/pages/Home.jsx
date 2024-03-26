import React from "react";
import Hero from "../components/hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/blogs/BlogsComp";
import Places from "../components/places/Places";
import Testimonial from "../components/testimonial/Testimonial";
import Banner from "../components/banner/Banner";
import BannerImg from "../components/BannerImg/BannerImg";
import BannerImg1 from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/orderPopup/OrderPopup";



const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
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
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerImg img={BannerImg1} />
        <BlogsComp />
        <Banner />
        <BannerImg img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;