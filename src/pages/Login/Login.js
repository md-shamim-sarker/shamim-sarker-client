import React from 'react';
import login from '../../assets/login.svg';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook, BsGithub} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-4/5 mx-auto">
                <div className="text-center lg:text-left w-full lg:w-1/2">
                    <img src={login} alt="..." className='w-full' />
                </div>
                <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-3xl font-bold text-center text-blue-700'>Login Now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='flex text-sm gap-x-1'>
                            <span>You don't have an account? Please</span>
                            <Link to={"/register"} className='text-blue-600'>Register</Link>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex gap-x-3 justify-center items-center'>
                            <button>
                                <FcGoogle className='text-[28px]'></FcGoogle>
                            </button>
                            <button>
                                <BsFacebook className='text-blue-600 text-2xl'></BsFacebook>
                            </button>
                            <button>
                                <BsGithub className='text-2xl'></BsGithub>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;