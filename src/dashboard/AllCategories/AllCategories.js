import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import Category from './Category';

const AllCategories = () => {
    const {render} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [render]);

    return (
        <div className='pl-2 pr-3'>
            <h2 className='text-3xl font-bold text-center my-6'>All Categories</h2>
            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Update</th>
                            <th>Dalete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category, index) => <Category
                                key={category._id}
                                index={index}
                                category={category}
                            ></Category>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCategories;