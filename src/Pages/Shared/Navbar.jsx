import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import userDefaultPic from '../../assets/user.png';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loggingOut, setLoggingOut] = useState(false);
  const userName = user ? user.displayName : "";
  const userProfilePic = user ? user.photoURL : userDefaultPic;

  const handleSignOut = () => {
    setLoggingOut(true);
    logOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out: ", error.message);
      })
      .finally(() => {
        setLoggingOut(false);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" exact activeClassName="font-bold" className='font-semibold'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allServices" activeClassName="font-bold" className='font-semibold'>
          Services
        </NavLink>
      </li>
      {user && (
        <li className="relative group">
          <Link className='font-semibold'>
            Dashboard
          </Link>
          <ul className=" bg-slate-300 absolute hidden group-hover:block mt-7 space-y-4 p-4 left-2 menu menu-sm dropdown-content z-[1] shadow rounded-md w-52">
            <li>
              <NavLink to="/my-services" activeClassName="font-bold" className='font-semibold'>My Services</NavLink>
            </li>
            <li>
              <NavLink to="/add-services" activeClassName="font-bold" className='font-semibold'>Add Services</NavLink>
            </li>
            <li>
              <NavLink to="/my-schedules" activeClassName="font-bold" className='font-semibold'>My Schedules</NavLink>
            </li>
          </ul>
        </li>
      )}
      {!user && (
        <li>
          <NavLink to="/login" activeClassName="font-bold" className='font-semibold' disabled={loggingOut}>
            Login
          </NavLink>
        </li>
      )}
    </>
  );


  
  <br />;
 
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" 
          >
            {navLinks}
          </ul>
        </div>
        <Link to='/'>
        <div className='flex items-center'>
          <img className='w-[80px]' src={logo} alt="" />
          <a className='font-extrabold text-xl'>TravelTandem</a>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userProfilePic} alt={`${userName}'s profile`} />
          </div>
        </label>
        <span className="hidden md:inline-block text-sm font-semibold ml-1 mr-2">
          {userName}
        </span>
        {user ? (
          <button
            onClick={handleSignOut}
            className={`btn btn-ghost ${loggingOut ? "loading" : ""}`}
            disabled={loggingOut}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;