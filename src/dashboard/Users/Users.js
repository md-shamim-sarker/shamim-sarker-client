import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../contexts/UserContext';
import User from './User';

const Users = () => {
    const [userDb, setUserDb] = useState([]);
    const {user, loading, setLoading} = useContext(AuthContext);

    // Fetching all users from db
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUserDb(data);
            })
            .catch(console.dir);
    }, [loading]);

    // Make verify
    const verifyHandler = user => {
        fetch(`http://localhost:5000/users/verify/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Verify Success!', {position: 'bottom-center'});
            setLoading(!loading);
        }).catch(err => console.log(err));
    };

    // Make unverify
    const unverifyHandler = user => {
        fetch(`http://localhost:5000/users/unverify/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Unverify Success!', {position: 'bottom-center'});
            setLoading(!loading);
        }).catch(err => console.log(err));
    };

    // Make Admin
    const makeAdminHandler = user => {
        fetch(`http://localhost:5000/users/make-admin/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Make Admin Success!', {position: 'bottom-center'});
            setLoading(!loading);
        }).catch(err => console.log(err));
    };

    // Remove Admin
    const removeAdminHandler = user => {
        fetch(`http://localhost:5000/users/remove-admin/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Remove Admin Success!', {position: 'bottom-center'});
            setLoading(!loading);
        }).catch(err => console.log(err));
    };

    // Remove User
    const removeUserHandler = usr => {
        const complainerName = user.displayName;
        const complainerEmail = user.email;
        const complainer = {complainerName, complainerEmail};
        fetch(`http://localhost:5000/users/remove-user/${usr._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(complainer)
        }).then(() => {
            toast.success('Remove User Success!', {position: 'bottom-center'});
            setLoading(!loading);
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-5'>All Users</h2>
            <div className="overflow-x-auto w-full pl-1 pr-2 my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name & Email</th>
                            <th>Role</th>
                            <th>Verify</th>
                            <th>Make Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userDb.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                verifyHandler={verifyHandler}
                                unverifyHandler={unverifyHandler}
                                makeAdminHandler={makeAdminHandler}
                                removeAdminHandler={removeAdminHandler}
                                removeUserHandler={removeUserHandler}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;