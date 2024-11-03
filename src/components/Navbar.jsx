import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) => `mr-6 font- text-lg ${isActive && 'text-red-500'}`} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => `mr-6 font- text-lg ${isActive && 'text-red-500'}`} to='/coffees'>Coffees</NavLink>
        <NavLink className={({ isActive }) => `mr-6 font- text-lg ${isActive && 'text-red-500'}`} to='/dashboard'>Dashboard</NavLink>
    </>
    return (
        <div className='bg-base-200 fixed z-50 backdrop-blur-3xl w-full top-0 bg-white/80'>
            <div className="navbar max-w-[1400px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg uppercase">Coffee_store</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;