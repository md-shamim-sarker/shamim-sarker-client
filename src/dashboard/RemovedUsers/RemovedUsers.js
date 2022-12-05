import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../contexts/UserContext';
import RemovedUser from './RemovedUser';

const RemovedUsers = () => {
    const [userDb, setUserDb] = useState([]);
    const {loading, setLoading} = useContext(AuthContext);

    // Fetching all users from db
    useEffect(() => {
        fetch('http://localhost:5000/removed-users')
            .then(res => res.json())
            .then(data => {
                setUserDb(data);
            })
            .catch(console.dir);
    }, [loading]);

    // Restore User
    const restoreUserHandler = user => {
        fetch(`http://localhost:5000/users/restore-user/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Restore User Success!', {position: 'bottom-center'});
            setLoading(!loading);
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5'>All Removed Users</h2>
            <div className="overflow-x-auto w-full pl-1 pr-2 my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name & Email</th>
                            <th>Role</th>
                            <th>Complain From</th>
                            <th>User Restore</th>
                            <th>Delete Permanent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userDb.map((user, index) => <RemovedUser
                                key={user._id}
                                user={user}
                                index={index}
                                restoreUserHandler={restoreUserHandler}
                            ></RemovedUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RemovedUsers;