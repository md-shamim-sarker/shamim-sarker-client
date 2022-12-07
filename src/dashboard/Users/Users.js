import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../contexts/UserContext';
import User from './User';

const Users = () => {
    const [userDb, setUserDb] = useState([]);
    const {user, render, setRender} = useContext(AuthContext);

    // Fetching all users from db
    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUserDb(data);
            })
            .catch(console.dir);
    }, [render]);

    // Make verify
    const verifyHandler = user => {
        fetch(`https://shamim-sarker-server.vercel.app/users/verify/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Verify Success!', {position: 'bottom-center'});
            setRender(!render);
        }).catch(err => console.log(err));
    };

    // Make unverify
    const unverifyHandler = user => {
        fetch(`https://shamim-sarker-server.vercel.app/users/unverify/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Unverify Success!', {position: 'bottom-center'});
            setRender(!render);
        }).catch(err => console.log(err));
    };

    // Make Admin
    const makeAdminHandler = user => {
        fetch(`https://shamim-sarker-server.vercel.app/users/make-admin/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Make Admin Success!', {position: 'bottom-center'});
            setRender(!render);
        }).catch(err => console.log(err));
    };

    // Remove Admin
    const removeAdminHandler = user => {
        fetch(`https://shamim-sarker-server.vercel.app/users/remove-admin/${user._id}`, {
            method: 'PUT'
        }).then(() => {
            toast.success('Remove Admin Success!', {position: 'bottom-center'});
            setRender(!render);
        }).catch(err => console.log(err));
    };

    // Remove User
    const removeUserHandler = usr => {
        const complainerName = user.displayName;
        const complainerEmail = user.email;
        const complainer = {complainerName, complainerEmail};
        fetch(`https://shamim-sarker-server.vercel.app/users/remove-user/${usr._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(complainer)
        }).then(() => {
            toast.success('Remove User Success!', {position: 'bottom-center'});
            setRender(!render);
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