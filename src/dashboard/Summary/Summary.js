import React, {useEffect, useState} from 'react';

const Summary = () => {
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [notes, setNotes] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [writers, setWriters] = useState([]);
    const [readers, setReaders] = useState([]);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/users/admins')
            .then(res => res.json())
            .then(data => setAdmins(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/users/writers')
            .then(res => res.json())
            .then(data => setWriters(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://shamim-sarker-server.vercel.app/users/readers')
            .then(res => res.json())
            .then(data => setReaders(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>

            <div className='w-full flex justify-center'>
                <div className="stats shadow w-11/12 lg:w-4/5 mt-28 mb-6 flex flex-col lg:flex-row bg-gray-100 mr-5">
                    <div className="stat text-center">
                        <div className="stat-title text-2xl font-bold">Total Users</div>
                        <div className="stat-value">{users.length}</div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-title text-2xl font-bold">Total Categories</div>
                        <div className="stat-value">{categories.length}</div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-title text-2xl font-bold">Total Notes</div>
                        <div className="stat-value">{notes.length}</div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className="stats shadow w-11/12 lg:w-4/5 mb-28 flex flex-col lg:flex-row bg-gray-100 mr-5">
                    <div className="stat text-center">
                        <div className="stat-title text-2xl font-bold">Total Admins</div>
                        <div className="stat-value">{admins.length}</div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-title text-2xl font-bold">Total Writers Categories</div>
                        <div className="stat-value">{writers.length}</div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-title text-2xl font-bold">Total Readers</div>
                        <div className="stat-value">{readers.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;