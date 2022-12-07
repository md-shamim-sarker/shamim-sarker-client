import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../contexts/UserContext';
import RemovedNote from './RemovedNote';

const RemovedNotes = () => {
    const [notes, setNotes] = useState([]);
    const {render, setRender} = useContext(AuthContext);

    // Fetching all removed notes
    useEffect(() => {
        fetch('http://localhost:5000/removed-notes')
            .then(res => res.json())
            .then(data => {
                setNotes(data);
            })
            .catch(console.dir);
    }, [render]);
    console.log(notes);

    // Restore User
    const restoreNoteHandler = note => {
        fetch(`http://localhost:5000/notes/restore-note/${note._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Restore Success!', {position: 'bottom-center'});
            setRender(!render);
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5'>All Removed Notes</h2>
            <div className="overflow-x-auto w-full pl-1 pr-2 my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Category</th>
                            <th>Heading</th>
                            <th>Type</th>
                            <th>Complain From</th>
                            <th>Note Restore</th>
                            <th>Delete Permanent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notes.map((note, index) => <RemovedNote
                                key={note._id}
                                note={note}
                                index={index}
                                restoreNoteHandler={restoreNoteHandler}
                            ></RemovedNote>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RemovedNotes;