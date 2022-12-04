import React, {useEffect, useState} from 'react';
import User from './User';

const Users = () => {
    const [userDb, setUserDb] = useState([]);

    // Fetching all users from db
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUserDb(data);
            })
            .catch(console.dir);
    }, []);

    return (
        <div>
            <h2>All Users</h2>
            {
                userDb.map((user, index) => <User
                    key={user._id}
                    user={user}
                    index={index}
                ></User>)
            }
        </div>
    );
};

export default Users;