import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Categories from '../pages/Categories/Categories';

const NotesLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="notes-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-20 ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="notes-drawer" className="drawer-overlay"></label>
                    <aside className="w-full p-6 sm:w-60 bg-gray-100 text-gray-900 mt-16">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                <Categories></Categories>
                            </div>
                        </nav>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NotesLayout;