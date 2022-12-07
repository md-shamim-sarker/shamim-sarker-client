import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../contexts/UserContext';
import Category from './Category';

const AllCategories = () => {
    const {render, setRender} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [category2, setCategory2] = useState(null);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [render]);

    const updateHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const categoryType = form.categoryType.value;
        const categoryObj = {category, categoryType};

        fetch(`https://shamim-sarker-server.vercel.app/categories/${category2?._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(categoryObj)
        }).then(() => {
            toast.success('Update Success!', {position: 'bottom-center'});
            form.reset();
            setCategory2(null);
            setRender(!render);
        }).catch(err => console.log(err));
    };

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
                                setCategory2={setCategory2}
                            ></Category>)
                        }
                    </tbody>
                </table>
            </div>

            {/* Put this part before </body> tag */}
            {
                category2 &&
                <>
                    <input type="checkbox" id="category-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-2xl font-bold text-center mb-6">Update Category</h3>

                            <form onSubmit={updateHandler} className='flex flex-col gap-y-3'>
                                <input type="text" name='category' defaultValue={category2.category} className="input input-bordered w-ful" />
                                <input type="text" name='categoryType' defaultValue={category2.categoryType} className="input input-bordered w-ful" />
                                <button type='submit' className='w-full btn btn-primary btn-sm'>Update</button>
                            </form>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default AllCategories;