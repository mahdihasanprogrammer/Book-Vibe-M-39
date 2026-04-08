import React from 'react';
import { NavLink } from 'react-router';
import { RiMenu2Line } from "react-icons/ri";


const Navbar = () => {

const links = <>
               <li> <NavLink to='/' className={({isActive})=>
                `text-base ${ isActive && 'text-[#23BE0A] border-2 py-2 px-4 rounded-md border-[#23BE0A] font-medium'}`}>Home</NavLink></li>

               <li><NavLink to='/listedBook' className={({isActive})=> 
               `text-base ${ isActive && 'text-[#23BE0A] border-2 py-2 px-4 rounded-md border-[#23BE0A] font-medium'}`}>Listed Books</NavLink></li>


               <li><NavLink to='/pages' className={({isActive})=> 
               `text-base ${ isActive && 'text-[#23BE0A] border-2 py-2 px-4 rounded-md border-[#23BE0A] font-medium'}`}>Pages to Read</NavLink></li>
               </>



return (


 <nav className="navbar px-0 py-4">
    
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="pl-0 btn btn-ghost lg:hidden">
        <RiMenu2Line className='size-6 ' />
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
      </ul>

    </div>
    <h2 className="font-bold text-2xl">Book Vibe</h2>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-8 p-2 items-center text-lg">
       {links}
    </ul>
  </div>

  <div className="navbar-end space-x-2">
    <button className="btn bg-[#23BE0A] text-white">Sign in</button>
    <button className="btn bg-[#1c8591] text-white">Sign Up</button>
  </div>
</nav>

            
    );
};

export default Navbar;