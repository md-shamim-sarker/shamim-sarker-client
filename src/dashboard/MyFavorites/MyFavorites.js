import React from 'react';
import construction from '../../assets/construction.png';

const MyFavorites = () => {
    return (
        <>
            <h2 className='text-3xl font-bold text-center my-6 pt-10'>My Favorite Page Under Construction</h2>
            <div className='w-full flex justify-center'>
                <img src={construction} alt="..." className='w-96 pb-10' />
            </div>
        </>
    );
};

export default MyFavorites;