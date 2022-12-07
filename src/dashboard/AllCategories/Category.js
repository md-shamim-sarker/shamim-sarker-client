import React from 'react';

const Category = ({category, index}) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{category.category}</td>
            <td>
                <div className='badge badge-primary w-20'>{category.categoryType}</div>
            </td>
            <td>
                <label htmlFor="category-modal" className='btn btn-primary btn-sm'>Update</label>
            </td>
            <td>
                <button className='btn btn-primary btn-sm'>Delete</button>
            </td>
        </tr>
    );
};

export default Category;