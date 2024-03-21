// import React from 'react';
import { Link } from 'react-router-dom';
// import { NavbarLinks } from './Navbar';
import { FaUserCircle } from 'react-icons/fa';

const navbarLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blogs',
    link: '/blogs',
  },
  {
    name: 'Best Places',
    link: '/places',
  },
];
const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu)
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-[100%]'
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar__card">
        {/* top section */}
        <div>
          <div className="flex items-centet justify-start gap-4">
            {' '}
            <FaUserCircle size={50} className="text-gray-500" />
            <div className="text-gray-500 ">
              <h1>Hello User</h1>
              <h2 className="text-sm text-slate-500">Premium user</h2>
            </div>
          </div>
        </div>
        {/* Navlinks secton */}

        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {navbarLinks.map(({ name, link }) => (
              <li>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
