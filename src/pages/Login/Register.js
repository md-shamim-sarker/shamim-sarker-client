import React, {useContext} from 'react';
import registration from '../../assets/registration.svg';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';
import toast from 'react-hot-toast';

const Register = () => {
    const {createUser, updateUser, logOut, addToDb} = useContext(AuthContext);
    const navigate = useNavigate();
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success) {
                    const image = imgData.data.url;
                    const user = {
                        displayName: fullName,
                        email,
                        photoURL: image,
                        registrationDate: Date().slice(0, 24),
                        role,
                        isVerified: false,
                        isRemoved: false
                    };
                    const url = 'http://localhost:5000/users';
                    addToDb(url, user)
                        .then(() => {
                            createUser(email, password)
                                .then(() => {
                                    const userObj = {
                                        displayName: fullName,
                                        photoURL: image
                                    };
                                    updateUser(userObj)
                                        .then(() => {
                                            logOut()
                                                .then(() => {
                                                    toast.success("Registration Successful!", {
                                                        position: 'bottom-center'
                                                    });
                                                    navigate("/login");
                                                })
                                                .catch(err => console.log(err));
                                        })
                                        .catch(err => console.log(err));
                                }).catch(err => console.log(err));
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    };


    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-4/5 mx-auto">
                <div className="text-center lg:text-left w-full lg:w-1/2">
                    <img src={registration} alt="..." className='w-full' />
                </div>
                <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={registerHandler} className="card-body">
                        <h2 className='text-3xl font-bold text-center text-blue-700'>Register Now</h2>
                        <div className="form-control">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" name='fullName' placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Image</span>
                            </label>
                            <input type="file" name='image' className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Type</span>
                            </label>
                            <div className='flex items-center gap-x-6'>
                                <div className='flex items-center gap-x-2'>
                                    <input type="radio" name="role" className="radio" id='reader' value='reader' />
                                    <label htmlFor='reader'>Reader</label>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <input type="radio" name="role" className="radio" id='writer' value='writer' />
                                    <label htmlFor='writer'>Writer</label>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <input type="radio" name="role" className="radio" id='admin' value='admin' />
                                    <label htmlFor='admin'>Admin</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <div className='flex text-sm gap-x-1'>
                            <span>You already have an account? Please</span>
                            <Link to={"/login"} className='text-blue-600'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;