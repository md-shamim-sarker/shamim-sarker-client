import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import parse from 'html-react-parser';

const Note = ({note}) => {
    console.log(note);
    return (
        <div className='w-full pl-2 pr-5'>
            <div className='flex items-center gap-2 font-bold'>
                <p>{note.text}</p>
            </div>
            <div className='my-5'>
                {
                    note.isGist
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
    );
};

export default Note;