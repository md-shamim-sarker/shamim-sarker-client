import React, {useEffect} from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../contexts/UserContext';
import MyFavorite from './MyFavorite';

const MyFavorites = () => {
    const {user, render, setRender} = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/favorites/${user?.email}`)
            .then(res => res.json())
            .then(data => setFavorites(data))
            .catch(err => console.log(err));
    }, [user?.email, setFavorites, render]);

    const removeHandler = fav => {
        fetch(`http://localhost:5000/favorites/${fav._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                toast.success('Remove Success!', {position: 'bottom-center'});
                setRender(!render);
            });
    };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5'>My Favorite List</h2>
            <div className="overflow-x-auto w-full my-10 pr-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Note Heading</th>
                            <th>Category</th>
                            <th>Writer</th>
                            <th>See Note</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favorites.map((fav, index) => <MyFavorite
                                key={fav._id}
                                index={index}
                                fav={fav}
                                removeHandler={removeHandler}
                                render={render}
                            ></MyFavorite>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFavorites;