import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Note from './Note';

const Notes = () => {
    const note = useLoaderData();
    const notesData = note.inputs;
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-6'>{note.heading}</h2>
            {
                notesData.map((note, index) => <Note
                    key={index}
                    note={note}
                ></Note>)
            }
        </div>
    );
};

export default Notes;