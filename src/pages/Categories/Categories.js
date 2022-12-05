import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import Category from './Category';

const Categories = () => {
    const {allCategories} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    // Get all categories by category type
    useEffect(() => {
        allCategories('tech')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [allCategories]);

    return (
        <div>
            {
                categories.map(category => <Category
                    key={category._id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;