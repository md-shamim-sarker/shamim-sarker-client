import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {useLocation} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';
import MyNote from './MyNote';

const MyNotes = () => {
    const {user, render, setRender, setPath} = useContext(AuthContext);
    const [myNotes, setMyNotes] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:5000/notes/email/${user.email}`, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(res => res.json())
            .then(data => {
                setMyNotes(data);
                setPath("/dashboard/my-notes");
            })
            .catch(err => console.log(err));
    }, [user.email, render, setPath]);

    // Remove Note
    const removeNoteHandler = note => {
        const complainerName = user.displayName;
        const complainerEmail = user.email;
        const complainer = {complainerName, complainerEmail};
        fetch(`http://localhost:5000/notes/remove-note/${note._id}`, {
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
            <h2 className='text-3xl text-center font-bold my-5'>My Notes</h2>
            <div className="overflow-x-auto w-full my-10 pr-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Note Heading</th>
                            <th>Category</th>
                            <th>Visit</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myNotes.map((note, index) => <MyNote
                                key={note._id}
                                index={index}
                                note={note}
                                removeNoteHandler={removeNoteHandler}
                                location={location}
                            ></MyNote>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyNotes;