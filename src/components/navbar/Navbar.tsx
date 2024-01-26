import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo/Logo.png";
import Icon from "../../assets/svgs/DropDown.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [sideNav, setSideNav] = useState<boolean>(false);

  return (
    <nav className="mx-auto container lg:mx-auto flex justify-between items-center p-4">
      <div className="flex items-center justify-start">
        <div className="cursor-pointer">
          <img src={Logo} alt="cofee-Icon" />
        </div>
      </div>

      <div className="hidden sm:flex  flex-end  px-2 rounded-full">
        <ul className="flex items-center text-[#183B56] gap-3">
          <li className="px-2 mb-2 mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 mb-2">
            <Link to="/">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 py-2 text-md "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Landings
              <img
                src={Icon}
                width={20}
                height={20}
                alt="svg"
                className="pt-1"
              />
            </button></Link>
          </li>
          <li className="px-2 mb-2"><Link to="/">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5  py-2 text-md "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              >
              Pages
              <img
                src={Icon}
                width={20}
                height={20}
                alt="svg"
                className="pt-1"
                />
            </button>
                </Link>
          </li>
          <li className="px-2 mb-2 ">
            <Link to="/">Doc</Link>
          </li>
          <li className="px-2 mb-2">
            <Link to="/">Help</Link>
          </li>
        </ul>
        <Link to='/search'>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 ms-8 overflow-hidden text-sm font-medium text-[#1565D8] rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
            Search
          </span>
        </button>
        </Link>
      </div>

      <div className="lg:hidden md:hidden ml-2 transition-transform transform duration-600">
        {sideNav ? (
          <AiOutlineClose
            size={25}
            onClick={() => {
              setSideNav(!sideNav);
            }}
            className={`transition-transform transform-3 duration-3000 ${
              sideNav ? "translate-x-0" : "translate-x-full"
            }`}
          />
        ) : (
          <FaBars
            size={25}
            onClick={() => {
              setSideNav(!sideNav);
            }}
            className={`transition-transform transform-3 duration-3000 ${
              sideNav ? "translate-x-full" : "translate-x-0"
            }`}
          />
        )}
      </div>

      {sideNav && (
        <div
          className={`fixed top-0 right-0 w-[300px] h-auto bg-white z-10 transform transition-transform duration-500 ${
            sideNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <RxCross2
            onClick={() => setSideNav(!sideNav)}
            size={25}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <nav>
            <ul className="flex flex-col p-4">
              <li className="text-xl py-2 ps-3">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl py-2 ps-3 mb-2">
           <Link to="/">
                <button
                  type="button"
                  className="inline-flex w-full  gap-x-1.5 py-2 text-md "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Landings
                  <img
                    src={Icon}
                    width={20}
                    height={20}
                    alt="svg"
                    className="pt-1"
                  />
                </button>
                </Link>   </li>
              <li className="text-xl py-2 ps-3 mb-2 ">
              <Link to="/">  <button
                  type="button"
                  className="inline-flex w-full  gap-x-1.5  text-md "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Pages
                  <img
                    src={Icon}
                    width={20}
                    height={20}
                    alt="svg"
                    className="pt-1"
                  />
                </button></Link>
              </li>
              <li className="text-xl py-2 ps-3 mb-2">
                <Link to="/">Doc</Link>
              </li>
              <li className="text-xl py-2 ps-3 mb-2">
                <Link to="/">Help</Link>
              </li>
              <li className="text-xl py-2 ps-3 mb-2">
               <Link to="/search">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#1565D8] rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Search
                  </span>
                </button>
               </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
