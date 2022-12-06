import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BsArrowDownCircle} from 'react-icons/bs';
import ReactQuill from 'react-quill';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const AddNotesInterview = () => {
    const {user, loading, setLoading, allCategories} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState(false);
    const navigate = useNavigate();
    const [note, setNote] = useState('');

    useEffect(() => {
        allCategories('interview')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [allCategories]);

    // New Note Handler
    const newNoteHandler = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const categoryType = 'interview';
        const heading = form.heading.value;
        const type = 'interview';
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const userEmail = user.email;
        const postDate = Date().slice(4, 21);
        const ratings = 0;
        const likes = 0;

        const categoryObj = {category, categoryType};
        const noteObj = {
            category,
            categoryType,
            heading,
            userName,
            userPhoto,
            userEmail,
            postDate,
            ratings,
            likes,
            note,
            type
        };

        if(category !== 'Select a category' && category !== "") {
            fetch(`https://shamim-sarker-server.vercel.app/categories/${category}`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data);

                    // If category exists
                    if(data.category === category) {
                        fetch('https://shamim-sarker-server.vercel.app/notes', {
                            method: 'POST',
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify(noteObj)
                        }).then(() => {
                            toast.success("Add Note Successful!", {
                                position: 'bottom-center'
                            });
                            navigate("/showQuestions");
                        }).catch(error => {
                            console.error(error.message);
                        });
                    }
                })
                .catch(() => {
                    // If category doesn't exist
                    fetch('https://shamim-sarker-server.vercel.app/categories', {
                        method: 'POST',
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify(categoryObj)
                    }).then(() => {
                        fetch('https://shamim-sarker-server.vercel.app/notes', {
                            method: 'POST',
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify(noteObj)
                        }).then(() => {
                            toast.success("Add Note Successful!", {
                                position: 'bottom-center'
                            });
                            form.reset();
                            navigate("/showQuestions");
                            setLoading(!loading);
                        }).catch(error => {
                            console.error(error.message);
                        });
                    }).catch(error => {
                        console.error(error.message);
                    });
                });
        }
    };

    return (
        <form onSubmit={newNoteHandler} className='w-11/12 mx-auto mb-10'>
            <h3 className='text-3xl font-bold text-center my-10'>Add Interview Questions and Answers</h3>
            <div className='flex w-full gap-y-3 flex-col'>
                <div className="w-full flex">
                    <div className='w-full'>
                        {
                            newCategory
                                ? <div className="w-full">
                                    <input
                                        tabIndex={0}
                                        type="text"
                                        name="category"
                                        placeholder="Enter a new category"
                                        className="input input-bordered w-full rounded-none focus:outline-none" />
                                </div>
                                :
                                <select
                                    tabIndex={1}
                                    name='category'
                                    className="select select-bordered w-full rounded-none focus:outline-none text-lg"
                                    defaultValue='Select a category'>
                                    <option>Select a category</option>
                                    {
                                        categories.map(category =>
                                            <option key={category._id}>{category.category}</option>)
                                    }
                                </select>
                        }
                    </div>
                    <button
                        onClick={() => setNewCategory(!newCategory)}
                        className="btn btn-primary rounded-none">
                        {
                            newCategory
                                ? <BsArrowDownCircle title='Go back to select option' className='text-3xl'></BsArrowDownCircle>
                                : <AiOutlinePlusCircle title='Add a new category' className='text-3xl'></AiOutlinePlusCircle>
                        }
                    </button>
                </div>
                <div className="w-full">
                    <input
                        tabIndex={2}
                        type="text"
                        name="heading"
                        placeholder="Enter Heading"
                        className="input input-bordered w-full rounded-none focus:outline-none text-lg" />
                </div>
                <div className='text-lg'>
                    <ReactQuill tabIndex={3} theme="snow" value={note} onChange={setNote} />
                </div>
                <button type='submit' className='btn btn-primary rounded-none'>Submit</button>
            </div>
        </form>
    );
};

export default AddNotesInterview;