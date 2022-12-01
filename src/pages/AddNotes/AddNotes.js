import React, {useState} from 'react';
import {AiFillDelete, AiOutlinePlusCircle} from 'react-icons/ai';
import {BsArrowDownCircle} from 'react-icons/bs';

const AddNotes = () => {
    const [newCategory, setNewCategory] = useState(false);
    const [inputs, setInputs] = useState([
        {text: "", code: ""}
    ]);

    // New Note Handler
    const newNoteHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const heading = form.heading.value;
        const notes = {category, heading, inputs};
        console.log(notes);
    };

    // handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputs];
        list[index][name] = value;
        setInputs(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputs];
        list.splice(index, 1);
        setInputs(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputs([...inputs, {text: "", code: ""}]);
    };

    return (
        <form onSubmit={newNoteHandler} className='w-11/12 lg:w-4/5 mx-auto mb-10'>
            <h3 className='text-3xl font-bold text-center my-10'>Add New Note</h3>
            <div className='flex w-full gap-3 flex-col lg:flex-row'>
                <div className="w-full flex gap-x-3">
                    <div className='w-full'>
                        {
                            newCategory
                                ? <div className="w-full">
                                    <input
                                        type="text"
                                        name="category"
                                        placeholder="Enter a new category"
                                        className="input input-bordered w-full" />
                                </div>
                                :
                                <select name='category' className="select select-bordered w-full">
                                    <option>Select a category</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                        }
                    </div>
                    <button
                        onClick={() => setNewCategory(!newCategory)}
                        className="btn btn-primary">
                        {
                            newCategory
                                ? <BsArrowDownCircle className='text-3xl'></BsArrowDownCircle>
                                : <AiOutlinePlusCircle className='text-3xl'></AiOutlinePlusCircle>
                        }

                    </button>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        name="heading"
                        placeholder="Enter Heading"
                        className="input input-bordered w-full" />
                </div>
            </div>

            {
                inputs.map((x, i) => {
                    return (
                        <div key={i}>
                            <div className='flex flex-col lg:flex-row gap-x-3 relative'>
                                <div className="form-control w-full">
                                    <input
                                        name="text"
                                        placeholder="Enter Some Text"
                                        value={x.text}
                                        onChange={e => handleInputChange(e, i)}
                                        className="input input-bordered w-full mt-3" />
                                </div>

                                <div className="form-control w-full">
                                    <input
                                        name="code"
                                        placeholder="Enter Gist ID"
                                        value={x.code}
                                        onChange={e => handleInputChange(e, i)}
                                        className="input input-bordered w-full mt-3" />
                                </div>
                                <div className='absolute right-0 bottom-0'>
                                    <div className='flex mt-3'>
                                        {
                                            inputs.length !== 1 &&
                                            <button
                                                onClick={() => handleRemoveClick(i)}
                                                className="btn btn-ghost">
                                                <AiFillDelete className='text-2xl'></AiFillDelete>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>

                            {
                                inputs.length - 1 === i &&
                                <div className="divider mt-6">
                                    <button onClick={handleAddClick} className="btn btn-primary btn-circle">
                                        <AiOutlinePlusCircle className='text-3xl'></AiOutlinePlusCircle>
                                    </button>
                                </div>
                            }
                            {
                                inputs.length - 1 === i &&
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            }
                        </div>
                    );
                })}
            {/* <div>{JSON.stringify(inputs)}</div> */}
        </form>
    );
};

export default AddNotes;