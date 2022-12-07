import React, {useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BsArrowDownCircle} from 'react-icons/bs';
import {useLoaderData, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const UpdateNotesGist = () => {
    const {allCategories, path} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState(false);
    const navigate = useNavigate();
    const note2 = useLoaderData();

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
        const heading = form.heading.value;
        const intro = form.intro.value;
        const code = form.code.value;
        const noteObj = {category, heading, intro, code};

        fetch(`http://localhost:5000/notes/${note2._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(noteObj)
        }).then(() => {
            toast.success("Update Note Successful!", {
                position: 'bottom-center'
            });
            navigate(path);
        }).catch(err => console.log(err));
    };

    return (
        <form onSubmit={newNoteHandler} className='w-11/12 mx-auto mb-10'>
            <h3 className='text-3xl font-bold text-center my-10'>Update Gist Note</h3>
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
                                >
                                    <option>{note2.category}</option>
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
                        defaultValue={note2.heading}
                        className="input input-bordered w-full rounded-none focus:outline-none text-lg" />
                </div>
                <div className="form-control w-full">
                    <textarea
                        tabIndex={3}
                        name='intro'
                        className="textarea textarea-bordered w-full rounded-none focus:outline-none text-lg"
                        defaultValue={note2.intro}></textarea>
                </div>
                <div className="form-control w-full">
                    <input
                        tabIndex={4}
                        name="code"
                        defaultValue={note2.code}
                        className="input input-bordered w-full rounded-none focus:outline-none text-lg" />
                </div>
                <button tabIndex={5} type='submit' className='btn btn-primary rounded-none'>Update</button>
            </div>
        </form>
    );
};

export default UpdateNotesGist;