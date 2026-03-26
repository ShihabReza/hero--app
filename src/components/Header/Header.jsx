import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
const Header = () => {
  return (
    <div className=" shadow-sm">
      <div className="navbar max-w-screen-2xl mx-auto px-4">

        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>

           <ul className="menu menu-horizontal px-1 ">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/apps">Apps</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl">
          <img className="h-8 w-8 mr-2" src="/assets/logo.png" alt="logo" />
          <span className="text-blue-500">HERO.IO</span>
        </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/apps">Apps</Link></li>
                  <li><Link to="/about">About</Link></li>
        </ul>
        </div>

        <div className="navbar-end">
          <a href='https://github.com/ShihabReza' className="btn bg-blue-500 text-mist-50"><FaGithub className="mr-2 text-xl" />Contribute</a>
        </div>

      </div>
    </div>
    
  );
};

export default Header;