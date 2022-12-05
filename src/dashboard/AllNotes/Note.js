import React from 'react';

const Note = ({note, index}) => {
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
                <button className="btn btn-primary btn-sm">Update</button>
            </td>
            <td>
                <button className="btn btn-primary btn-sm">Delete</button>
            </td>
        </tr>
    );
};

export default Note;