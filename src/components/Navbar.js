import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';
import {FcReading} from 'react-icons/fc';
import {AiOutlineClose, AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';

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
        <NavLink to={"/notes"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Notes
        </NavLink>
    </li>
    <li>
        <NavLink to={"/showQuestions"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Interviews
        </NavLink>
    </li>
    <li>
        <NavLink to={"/contact"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Contact
        </NavLink>
    </li>
    <li>
        <NavLink to={"/dashboard"}
            className={({isActive}) => isActive ? 'border-b-2 border-blue-700' : undefined}>
            Dashboard
        </NavLink>
    </li>
</>;

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const {toggleMenu, setToggleMenu} = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => {}).then(err => console.log(err));
    };

    return (
        <div className="navbar bg-gray-200 fixed top-0 z-50 mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label onClick={() => setToggleMenu(!toggleMenu)} tabIndex={0} className="btn btn-primary lg:hidden">
                        {
                            toggleMenu
                                ? <AiOutlineClose className='text-3xl'></AiOutlineClose>
                                : <AiOutlineMenuUnfold className='text-3xl'></AiOutlineMenuUnfold>
                        }
                    </label>
                    {
                        toggleMenu &&
                        <ul onClick={() => setToggleMenu(false)} tabIndex={0} className="menu menu-compact mt-2 -ml-2 absolute shadow w-52 bg-gray-100 font-bold">
                            {menuItem}
                        </ul>
                    }

                </div>
                <Link to={"/"} className="flex items-center gap-x-1">
                    <FcReading className='text-5xl'></FcReading>
                    <h2 className='hidden lg:block text-3xl font-bold text-blue-600'>SHAMIM</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    {menuItem}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user?.photoURL && <img src={user?.photoURL} alt="user" className='w-10 h-10 rounded-full mr-3' title={user?.displayName} />
                }

                {
                    user?.uid
                        ? <button onClick={logOutHandler} className='btn btn-primary rounded-none'>Logout</button>
                        : <Link to={"/login"} className="btn btn-primary rounded-none">Login</Link>
                }

                {
                    window.location.pathname === '/notes' &&
                    <label htmlFor="notes-drawer" className="btn btn-primary ml-2 drawer-button lg:hidden">
                        <AiOutlineMenuFold className='text-3xl'></AiOutlineMenuFold>
                    </label>
                }
                {
                    window.location.pathname === '/dashboard' &&
                    < label htmlFor="dashboard-drawer" className="btn btn-primary ml-2 drawer-button lg:hidden">
                        <AiOutlineMenuFold className='text-3xl'></AiOutlineMenuFold>
                    </label>
                }
            </div>
        </div>
    );
};

export default Navbar;