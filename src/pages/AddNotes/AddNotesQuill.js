import React, {useContext, useState} from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BsArrowDownCircle} from 'react-icons/bs';
import ReactQuill from 'react-quill';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const AddNotesQuill = () => {
    const {user} = useContext(AuthContext);
    const [newCategory, setNewCategory] = useState(false);
    const {storedCategories, loading, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const [code, setCode] = useState('');

    // New Note Handler
    const newNoteHandler = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const heading = form.heading.value;
        const text = form.text.value;
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const userEmail = user.email;
        const postDate = Date().slice(0, 24);
        const ratings = 0;
        const likes = 0;
        const isGist = false;
        const inputs = [{text, code, isGist}];

        const categoryObj = {category};

        const noteObj = {
            category,
            heading,
            userName,
            userPhoto,
            userEmail,
            postDate,
            ratings,
            likes,
            inputs
        };

        if(category !== 'Select a category' && category !== "") {
            fetch(`http://localhost:5000/categories/${category}`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data);

                    // If category exists
                    if(data.category === category) {
                        fetch('http://localhost:5000/notes', {
                            method: 'POST',
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify(noteObj)
                        }).then(() => {
                            alert("Data added!!");
                            navigate("/notes");
                        }).catch(error => {
                            console.error(error.message);
                        });
                    }
                })
                .catch(() => {
                    // If category doesn't exist
                    fetch('http://localhost:5000/categories', {
                        method: 'POST',
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify(categoryObj)
                    }).then(() => {
                        fetch('http://localhost:5000/notes', {
                            method: 'POST',
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify(noteObj)
                        }).then(() => {
                            alert("Data added!!");
                            form.reset();
                            navigate("/notes");
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
            <h3 className='text-3xl font-bold text-center my-10'>Add New Note</h3>
            <div className='flex w-full gap-y-3 flex-col'>
                <div className="w-full flex">
                    <div className='w-full'>
                        {
                            newCategory
                                ? <div className="w-full">
                                    <input
                                        type="text"
                                        name="category"
                                        placeholder="Enter a new category"
                                        className="input input-bordered w-full rounded-none" />
                                </div>
                                :
                                <select name='category' className="select select-bordered w-full rounded-none focus:outline-none text-lg" defaultValue='Select a category'>
                                    <option>Select a category</option>
                                    {
                                        storedCategories.map(category =>
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
                        type="text"
                        name="heading"
                        placeholder="Enter Heading"
                        className="input input-bordered w-full rounded-none focus:outline-none text-lg" />
                </div>

                <textarea name='text' className="textarea textarea-bordered w-full rounded-none focus:outline-none text-lg" placeholder="Write something about this note....."></textarea>
                <ReactQuill theme="snow" value={code} onChange={setCode} />
                <button type='submit' className='btn btn-primary rounded-none'>Submit</button>
            </div>
        </form>
    );
};

export default AddNotesQuill;