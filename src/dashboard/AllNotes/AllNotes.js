import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../contexts/UserContext';
import Note from './Note';

const AllNotes = () => {
    const {user, render, setRender, setPath} = useContext(AuthContext);
    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/notes')
            .then(res => res.json())
            .then(data => {
                setAllNotes(data);
                setPath("/dashboard/all-notes");
            })
            .catch(err => console.log(err));
    }, [render, setPath]);

    // Remove Note
    const removeNoteHandler = note => {
        const complainerName = user.displayName;
        const complainerEmail = user.email;
        const complainer = {complainerName, complainerEmail};
        fetch(`https://shamim-sarker-server.vercel.app/notes/remove-note/${note._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(complainer)
        }).then(() => {
            toast.success('Remove User Success!', {position: 'bottom-center'});
            setRender(!render);
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5'>All Notes</h2>
            <div className="overflow-x-auto w-full my-10 pr-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Note Heading</th>
                            <th>Category</th>
                            <th>Writer</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allNotes.map((note, index) => <Note
                                key={note._id}
                                index={index}
                                note={note}
                                removeNoteHandler={removeNoteHandler}
                            ></Note>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllNotes;