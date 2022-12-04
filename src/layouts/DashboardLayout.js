import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-20">
                    <div className='ml-2'>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <aside className="w-64 p-6 bg-gray-100 text-gray-900 mt-16">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <div className="flex flex-col space-y-1 mb-3 gap-y-3 font-bold">

                                    <NavLink to={"/dashboard/users"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>All Users</NavLink>

                                    <NavLink to={"/dashboard/removed-users"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>Removed Users</NavLink>

                                    {/*<NavLink to={"/dashboard"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>All Writers</NavLink>

                                    <NavLink to={"/dashboard"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>All Admins</NavLink>

                                    <NavLink to={"/dashboard"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>Removed Users</NavLink> */}

                                    <NavLink to={"/"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>All Categories</NavLink>

                                    <NavLink to={"/dashboard/add-notes"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>Add Notes Github Gist</NavLink>

                                    <NavLink to={"/dashboard/add-notes-quill"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>Add Notes Copy Paste</NavLink>

                                    <NavLink to={"/dashboard/add-notes-interview"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>Add Interview Questions</NavLink>

                                    <NavLink to={"/"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>My Notes</NavLink>

                                    <NavLink to={"/"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>All Notes</NavLink>

                                    <NavLink to={"/"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>Writer Request</NavLink>

                                    <NavLink to={"/"} className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}>Summary</NavLink>
                                </div>
                            </div>
                        </nav>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;