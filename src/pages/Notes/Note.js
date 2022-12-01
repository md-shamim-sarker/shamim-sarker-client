import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {FaHandPointRight} from 'react-icons/fa';

const Note = ({note}) => {
    return (
        <div className='w-full px-2'>
            <div className='flex items-center gap-2 font-bold'>
                <FaHandPointRight></FaHandPointRight>
                <p>{note.text}</p>
            </div>
            <div className='my-2'>
                <ReactEmbedGist
                    gist={note.code}
                    loadingFallback={<LoadingSpinner></LoadingSpinner>}
                ></ReactEmbedGist>
            </div>
        </div>
    );
};

export default Note;