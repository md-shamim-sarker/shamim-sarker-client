import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const menuItem = <>
    <li>
        <NavLink
            to={"/"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Portfolio
        </NavLink>
    </li>
    <li>
        <NavLink
            to={"/about"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            About
        </NavLink>
    </li>
    <li>
        <NavLink
            to={"/projects"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Projects
        </NavLink>
    </li>
    <li>
        <NavLink
            to={"/add-notes"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Add Notes
        </NavLink>
    </li>
    <li>
        <NavLink to={"/notes"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Notes
        </NavLink>
    </li>
    <li>
        <NavLink to={"/contact"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Contact
        </NavLink>
    </li>
</>;

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => {}).then(err => console.log(err));
    };

    return (
        <div className="navbar bg-gray-200 fixed top-0 z-50 mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    {
                        window.location.pathname === '/notes' ||
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    }
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52 bg-gray-100">
                        {menuItem}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-primary text-xl">SHAMIM</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user?.photoURL && <img src={user?.photoURL} alt="user" className='w-10 h-10 rounded-full mr-3' title={user?.displayName} />
                }

                {
                    user?.uid
                        ? <button onClick={logOutHandler} className='btn btn-primary'>Logout</button>
                        : <Link to={"/login"} className="btn btn-primary">Login</Link>
                }

                {
                    window.location.pathname === '/notes' &&
                    <label htmlFor="notes-drawer" className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                }
            </div>
        </div>
    );
};

export default Navbar;