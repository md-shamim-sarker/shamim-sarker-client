import React, {useState} from 'react';
import {AiFillDelete, AiOutlinePlusCircle} from 'react-icons/ai';

const AdBlogs = () => {
    const [inputList, setInputList] = useState([
        {text: "", code: ""}
    ]);

    // handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {text: "", code: ""}]);
    };
    return (
        <div className='w-4/5 mx-auto'>
            <h3 className='text-3xl font-bold text-center my-6'>Add New Note</h3>

            <div className='flex w-full gap-x-3'>
                <div className="form-control w-full">
                    <select value={''} className="select select-bordered w-full">
                        <option selected>Select a category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>

                <div className="form-control w-full">
                    <input
                        name="text"
                        placeholder="Enter Heading"
                        value={''}
                        className="input input-bordered w-full" />
                </div>
            </div>

            {
                inputList.map((x, i) => {
                    return (
                        <>
                            <form>
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
                                                inputList.length !== 1 &&
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
                                    inputList.length - 1 === i &&
                                    <div className="divider mt-6">
                                        <button onClick={handleAddClick} className="btn btn-ghost btn-circle">
                                            <AiOutlinePlusCircle className='text-3xl'></AiOutlinePlusCircle>
                                        </button>
                                    </div>
                                }
                                {
                                    inputList.length - 1 === i &&
                                    <button className='btn btn-primary'>Submit</button>
                                }

                            </form>
                        </>
                    );
                })}
            <div style={{marginTop: 20}}>{JSON.stringify(inputList)}</div>
        </div>
    );
};

export default AdBlogs;