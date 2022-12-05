import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import Note from './Note';

const AllNotes = () => {
    const {loading} = useContext(AuthContext);
    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then(res => res.json())
            .then(data => setAllNotes(data))
            .catch(err => console.log(err));
    }, [loading]);

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5'>All Notes</h2>
            <div className="overflow-x-auto w-full">
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
                            ></Note>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllNotes;