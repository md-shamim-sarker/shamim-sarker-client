import React from 'react';
import {useLoaderData} from 'react-router-dom';
import MyFavorite from './MyFavorite';

const MyFavorites = () => {
    const favorites = useLoaderData();

    return (
        <>
            <h2>My Favorite List</h2>
            {
                favorites.map((fav, index) => <MyFavorite
                    key={fav._id}
                    fav={fav}
                    index={index}
                ></MyFavorite>)
            }
        </>
    );
};

export default MyFavorites;