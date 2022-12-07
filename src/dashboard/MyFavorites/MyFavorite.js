import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const MyFavorite = ({fav, index, removeHandler}) => {
    const [note, setNote] = useState({});

    useEffect(() => {
        fetch(`https://shamim-sarker-server.vercel.app/notes/id/${fav?.noteId}`)
            .then(res => res.json())
            .then(data => setNote(data))
            .catch(err => console.log(err));
    }, [fav?.noteId, setNote]);

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{note.heading}</td>
            <td>
                <div className='badge badge-primary'>{note.category}</div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={note.userPhoto} alt="writer_photo" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{note.userName}</div>
                        <div className="text-sm opacity-50">{note.userEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                {
                    note.categoryType === 'interview'
                        ? <Link
                            to={`/showQuestions/${note._id}`}
                            className="btn btn-primary btn-sm"
                        >See Note</Link>
                        : <Link
                            to={`/notes/${note._id}`}
                            className="btn btn-primary btn-sm"
                        >See Note</Link>
                }
            </td>
            <td>
                <button onClick={() => removeHandler(fav)} className="btn btn-primary btn-sm">Remove</button>
            </td>
        </tr>
    );
};

export default MyFavorite;

/* {
    note.categoryType === 'interview'
        ? <Link
            to={`/showQuestions/${note._id}`}
            className="btn btn-primary btn-sm"
        >See Note</Link>
        : <Link
            to={`/notes/${note._id}`}
            className="btn btn-primary btn-sm"
        >See Note</Link>;
} */