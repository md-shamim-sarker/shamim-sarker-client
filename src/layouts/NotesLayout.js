import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Categories from '../pages/Categories/Categories';

const NotesLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="notes-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-20">
                    <div className='ml-5'>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="notes-drawer" className="drawer-overlay"></label>
                    <aside className="w-64 p-6 bg-gray-100 text-gray-900 mt-16">
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