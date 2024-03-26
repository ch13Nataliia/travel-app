// import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import NatureVid2 from '../../assets/video/footer.mp4';
import FooterLogo from '../../assets/logo.png';

const FooterLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Best Places', link: '/best-places' },
  { title: 'Blogs', link: '/blogs' },
];
const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className=" 
        absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]
      "
      >
        <source src={NatureVid2} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center text-xl sm:text-3xl font-bold text-justifysm:text-left">
              <img src={FooterLogo} alt="" className="max-h-[60px]" />
            </h1>
            {/* TravelGo */}
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              libero tempore quae minima deserunt cum dolor dignissimos
              perferendis possimus! Tempore qui consequuntur odit quis numquam
              debitis? Obcaecati tenetur molestiae dolores!
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>USA, Uttar</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+123456789</p>
            </div>
            {/* social Handles */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="tex-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="tex-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="tex-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* Footer  Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* first col links */}

            <div className="">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>

                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <>
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => {
                            window.scroll(0, 0);
                          }}
                        >
                          {' '}
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            {/* second col links */}

            <div className="">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>

                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <>
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => {
                            window.scroll(0, 0);
                          }}
                        >
                          {' '}
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>

            {/* third col links */}

            <div className="">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>

                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <>
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => {
                            window.scroll(0, 0);
                          }}
                        >
                          {' '}
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer coyright section */}
        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            @Copyright 2024 all rights reserverd || Made with by ❤️ TCJ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
