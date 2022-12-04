import React from 'react';
import {GoVerified} from 'react-icons/go';

const RemovedUser = ({user, index, restoreUserHandler}) => {
    return (
        <tr>
            <th>
                <label>
                    <p>{index + 1}</p>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user.photoURL} alt="Profile_Pic" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className='flex items-center gap-x-2'>
                    <span className='font-bold'>{user.displayName}</span>
                    {
                        user.isVerified &&
                        <GoVerified className='text-blue-700'></GoVerified>
                    }
                </div>
                <span>{user.email}</span>
            </td>
            <td>
                {
                    user.isAdmin && user.role !== 'super-admin'
                        ? <div className="badge badge-primary w-28">admin</div>
                        : <div className="badge badge-primary w-28">{user.role}</div>
                }
            </td>
            <td>
                <div className='flex items-center gap-x-2'>
                    <span className='font-bold'>{user.complainerName}</span>
                </div>
                <span>{user.complainerEmail}</span>
            </td>
            <td>
                <button onClick={() => restoreUserHandler(user)} className='btn btn-primary btn-sm'>User Restore</button>
            </td>
            <td>
                <button className='btn btn-primary btn-sm'>Delete Permanently</button>
            </td>
        </tr>
    );
};

export default RemovedUser;