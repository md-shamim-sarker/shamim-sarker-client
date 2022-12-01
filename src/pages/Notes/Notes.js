import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Notes = () => {
    const note = useLoaderData();
    return (
        <div>
            {JSON.stringify(note)}
        </div>
    );
};

export default Notes;