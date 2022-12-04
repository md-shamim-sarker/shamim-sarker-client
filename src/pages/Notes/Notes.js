import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import {useLoaderData} from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import parse from 'html-react-parser';

const Notes = () => {
    const note = useLoaderData();
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
        </div>
    );
};

export default Notes;