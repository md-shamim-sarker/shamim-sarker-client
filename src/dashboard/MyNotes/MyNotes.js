import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import MyNote from './MyNote';

const MyNotes = () => {
    const {user} = useContext(AuthContext);
    const [myNotes, setMyNotes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/notes/email/${user.email}`)
            .then(res => res.json())
            .then(data => setMyNotes(data))
            .catch(err => console.log(err));
    }, [user.email]);

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5'>All Notes</h2>
            <div className="overflow-x-auto w-full my-10">
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
                            ></MyNote>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyNotes;