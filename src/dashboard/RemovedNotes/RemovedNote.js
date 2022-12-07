import React from 'react';

const RemovedNote = ({note, index, restoreNoteHandler}) => {
    return (
        <tr>
            <th>
                <label>
                    <p>{index + 1}</p>
                </label>
            </th>
            <td>
                {note.category}
            </td>
            <td>
                {note.heading}
            </td>
            <td>
                <div className='badge badge-primary'>{note.categoryType}</div>
            </td>
            <td>
                <div className='flex items-center gap-x-2'>
                    <span className='font-bold'>{note.complainerName}</span>
                </div>
                <span>{note.complainerEmail}</span><br />
            </td>
            <td>
                <button onClick={() => restoreNoteHandler(note)} className='btn btn-primary btn-sm'>Note Restore</button>
            </td>
            <td>
                <button onClick={() => restoreNoteHandler(note)} className='btn btn-primary btn-sm'>Delete Permanently</button>
            </td>
        </tr>
    );
};

export default RemovedNote;