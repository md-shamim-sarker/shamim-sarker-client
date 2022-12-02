import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Note = ({note}) => {
    return (
        <div className='w-full pl-2 pr-5'>
            <div className='flex items-center gap-2 font-bold'>
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