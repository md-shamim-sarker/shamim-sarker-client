import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BsArrowDownCircle} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const AddNotesGist = () => {
    const {user, loading, setLoading, allCategories} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState(false);
    const navigate = useNavigate();

    // Get all tech categories
    useEffect(() => {
        allCategories('tech')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [allCategories]);

    // New Note Handler
    const newNoteHandler = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const categoryType = 'tech';
        const heading = form.heading.value;
        const intro = form.intro.value;
        const code = form.code.value;
        const type = 'gist';
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const userEmail = user.email;
        const postDate = Date().slice(4, 21);
        const ratings = 0;
        const likes = 0;
        const isRemoved = false;

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
            intro,
            code,
            type,
            isRemoved
        };

        if(category !== 'Select a category' && category !== "") {
            fetch(`https://shamim-sarker-server.vercel.app/categories/${category}`)
                .then(res => res.json())
                .then((data) => {
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
                            navigate("/notes");
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
            <h3 className='text-3xl font-bold text-center my-10'>Add New Note with Gist</h3>
            <div className='flex w-full flex-col gap-y-3'>
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
                                        className="input input-bordered w-full rounded-none focus:outline-none text-lg" />
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
                        className="btn btn-primary rounded-none focus:outline-none">
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
                <div className="form-control w-full">
                    <textarea
                        tabIndex={3}
                        name='intro'
                        className="textarea textarea-bordered w-full rounded-none focus:outline-none text-lg"
                        placeholder="Write something about this note....."></textarea>
                </div>
                <div className="form-control w-full">
                    <input
                        tabIndex={4}
                        name="code"
                        placeholder="Enter Gist ID"
                        className="input input-bordered w-full rounded-none focus:outline-none text-lg" />
                </div>
                <button tabIndex={5} type='submit' className='btn btn-primary rounded-none'>Submit</button>
            </div>
        </form>
    );
};

export default AddNotesGist;