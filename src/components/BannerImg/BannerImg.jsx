// import React from 'react'

const BannerImg = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgoundPosition: 'center',
    ehight: '400px',
  };
  return (
    <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}>
      BannerImg
    </div>
  );
};

export default BannerImg;
