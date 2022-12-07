import React from 'react';
import {Link} from 'react-router-dom';

const MyNote = ({note, index, removeNoteHandler, location}) => {
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
                {
                    note.type === 'gist'
                        ? <Link to={`/dashboard/gistUpdate/${note._id}`} className="btn btn-primary btn-sm">Update</Link>
                        : note.type === 'quill'
                            ? <Link to={`/dashboard/quillUpdate/${note._id}`} className="btn btn-primary btn-sm">Update</Link>
                            : <Link to={`/dashboard/interviewUpdate/${note._id}`} className="btn btn-primary btn-sm">Update</Link>
                }
            </td>
            <td>
                <button onClick={() => removeNoteHandler(note)} className="btn btn-primary btn-sm">Delete</button>
            </td>
        </tr>
    );
};

export default MyNote;

/*
const location = useLocation();
state = {{from: location;}} replace;
*/