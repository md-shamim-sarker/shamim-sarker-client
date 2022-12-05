import React from 'react';
import {Link} from 'react-router-dom';

const MyNote = ({note, index}) => {
    console.log(note);
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{note.heading}</td>
            <td>
                <div className='badge badge-primary'>{note.category}</div>
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
                <button className="btn btn-primary btn-sm">Update</button>
            </td>
            <td>
                <button className="btn btn-primary btn-sm">Delete</button>
            </td>
        </tr>
    );
};

export default MyNote;