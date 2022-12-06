import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/UserContext';

const NotesHome = () => {
    const {categoryByType, allCategories} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [categoriesAll, setCategoriesAll] = useState([]);

    // Get All notes
    useEffect(() => {
        categoryByType('tech')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [categoryByType]);

    // get all categories
    useEffect(() => {
        allCategories('tech')
            .then(res => res.json())
            .then(data => setCategoriesAll(data))
            .catch(err => console.log(err));
    }, [allCategories]);



    return (
        <div className='w-full flex justify-center'>
            <div className="stats shadow w-11/12 lg:w-4/5 my-40 flex flex-col lg:flex-row bg-gray-100 mr-5">
                <div className="stat text-center">
                    <div className="stat-title text-2xl font-bold">Notes Type</div>
                    <div className="stat-value">Tech Notes</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-2xl font-bold">Total Tech Categories</div>
                    <div className="stat-value">{categoriesAll.length}</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-2xl font-bold">Total Tech Notes</div>
                    <div className="stat-value">{categories.length}</div>
                </div>
            </div>
        </div>
    );
};

export default NotesHome;