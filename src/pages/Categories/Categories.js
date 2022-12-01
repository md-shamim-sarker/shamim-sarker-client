import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import Category from './Category';

const Categories = () => {
    const {storedCategories} = useContext(AuthContext);
    return (
        <div>
            {
                storedCategories.map(category => <Category
                    key={category._id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;