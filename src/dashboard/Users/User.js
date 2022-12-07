import React from 'react';
import {GoVerified} from 'react-icons/go';

const User = ({user, index, verifyHandler, unverifyHandler, makeAdminHandler, removeAdminHandler, removeUserHandler}) => {
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
                <span>{user.email}</span><br />
                <span>{user.phone}</span>
            </td>
            <td>
                {
                    user.isAdmin && user.role !== 'super-admin'
                        ? <div className="badge badge-primary w-28">admin</div>
                        : <div className="badge badge-primary w-28">{user.role}</div>
                }
            </td>
            <td>
                {
                    user.role === 'super-admin'
                        ? <button className='btn btn-primary btn-sm w-24' disabled>Verify</button>
                        : user.isVerified
                            ? <button onClick={() => unverifyHandler(user)} className='btn btn-primary btn-sm w-24'>Unverify</button>
                            : <button onClick={() => verifyHandler(user)} className='btn btn-primary btn-sm w-24'>Verify</button>
                }
            </td>
            <td>
                {
                    user.role === 'super-admin'
                        ? <button className='btn btn-primary btn-sm w-32' disabled>Make Admin</button>
                        : user.isAdmin
                            ? <button onClick={() => removeAdminHandler(user)} className='btn btn-primary btn-sm w-32'>Remove Admin</button>
                            : <button onClick={() => makeAdminHandler(user)} className='btn btn-primary btn-sm w-32'>Make Admin</button>
                }
            </td>
            <td>
                {
                    user.role === 'super-admin'
                        ? <button className='btn btn-primary btn-sm' disabled>Remove</button>
                        : user.isRemoved ||
                        <button onClick={() => removeUserHandler(user)} className='btn btn-primary btn-sm'>Remove</button>
                }
            </td>
        </tr>
    );
};

export default User;