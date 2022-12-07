import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import {useLoaderData} from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import parse from 'html-react-parser';
import {useContext} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import {useEffect} from 'react';
import {useState} from 'react';
import toast from 'react-hot-toast';

const Notes = () => {
    const note = useLoaderData();
    const {user, render, setRender} = useContext(AuthContext);
    const [fav, setFav] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/favorites?email=${user?.email}&noteId=${note?._id}`)
            .then(res => res.json())
            .then(data => setFav(data))
            .catch(err => console.log(err));
    }, [user?.email, note?._id, setFav, render]);

    const favoriteHandler = () => {
        const email = user.email;
        const noteId = note._id;
        const isFavorite = true;
        const favorite = {email, noteId, isFavorite};
        fetch('http://localhost:5000/favorites', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(favorite)
        }).then(() => {
            toast.success("Add Successful!", {
                position: 'bottom-center'
            });
            setRender(!render);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-2'>{note.heading}</h2>
            <div className='text-center border-b-2 mr-3 pb-2 flex flex-col lg:flex-row justify-center gap-x-2'>
                <span><strong>Author: </strong> {note.userName}</span>
                <span><strong> Posting Date: </strong> {note.postDate}</span>
            </div>
            <div className='w-full pl-2 pr-5'>
                <div className='flex items-center gap-2 font-bold'>
                    <p className='mt-6'>{note.intro}</p>
                </div>
                <div className='my-5'>
                    {
                        note.type === 'gist'
                            ? <>
                                <ReactEmbedGist
                                    gist={note.code}
                                    loadingFallback={<LoadingSpinner></LoadingSpinner>}
                                ></ReactEmbedGist>
                            </>
                            : <>
                                <div className='border p-5 overflow-x-auto'>
                                    {parse(note.code)}
                                </div>
                            </>
                    }
                </div>
            </div>
            <div className='w-full flex justify-center my-5'>
                {
                    fav.length < 1
                        ? <button onClick={favoriteHandler} className='btn btn-primary'>Favorite</button>
                        : <button onClick={favoriteHandler} className='btn btn-primary' disabled>Favorite</button>
                }
            </div>
        </div>
    );
};

export default Notes;