import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

const InterviewCategory = ({category}) => {
    const [subCategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/notes/${category.category}`)
            .then(res => res.json())
            .then(data => setSubcategories(data))
            .catch(console.dir);
    }, [category.category]);

    return (
        <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-800">{category.category}</h2>
            <div className="flex flex-col space-y-1 mb-3">
                {
                    subCategories.map((subCategory) => <NavLink
                        key={subCategory._id}
                        to={`/showQuestions/${subCategory._id}`}
                        className={({isActive}) => isActive ? 'border-r-2 border-blue-700 text-blue-600 px-2 py-0' : 'text-gray-900 px-2 py-0'}
                    >{subCategory.heading}</NavLink>)
                }
            </div>
        </div>
    );
};

export default InterviewCategory;