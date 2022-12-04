import React from 'react';
import {useLoaderData} from 'react-router-dom';
import parse from 'html-react-parser';

const ShowQuestions = () => {
    const note = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-2'>{note.heading}</h2>
            <div className='text-center border-b-2 mr-3 pb-2 flex flex-col lg:flex-row justify-center gap-x-2'>
                <span><strong>Author: </strong> {note.userName}</span>
                <span><strong> Posting Date: </strong> {note.postDate}</span>
            </div>
            <div className='w-full pl-2 pr-5'>
                <div className='my-5'>
                    <div className='border p-5 overflow-x-auto'>
                        {parse(note.note)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowQuestions;