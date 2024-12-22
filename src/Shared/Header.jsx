import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaBars } from "react-icons/fa";
const Header = () => {

    const { user, logOut, loading } = useContext(AuthContext)
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allArt'>All Art & craft</NavLink></li>
        <li><NavLink to='/addCraft'>Add Art & Craft</NavLink></li>
        <li><NavLink to='/myArt'>My Art&Craft </NavLink></li>
    </>
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    if (loading) {
        return
    }
    return (
        <div className="navbar font-Firasans bg-white opacity-90 text-black font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className='btn btn-ghost text-xl'>Art&Craft</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex gap-3 items-center'>
                            <div className="w-10 group relative inline-block">
                                <p className='absolute hidden -ml-56  font-semibold p-2 rounded-lg bg-cyan-600 text-white group-hover:block'>{user.email}</p>
                                <button onClick={handleLogout} className='-ml-20 btn text-white bg-cyan-700  absolute hidden group-hover:block'>Logout</button>
                                <img
                                    className='rounded-full'
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        :
                        <div>
                            <Link to='/login'><button className='btn text-white bg-cyan-700 mr-2'>Login</button></Link>
                            <Link to='/register'><button className='btn text-white bg-cyan-700'>Register</button></Link>
                        </div>
                }

            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;