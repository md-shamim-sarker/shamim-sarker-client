import React, {useContext} from 'react';
import login from '../../assets/login.svg';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook, BsGithub} from 'react-icons/bs';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const Login = () => {
    const {signInWithEmailPassword, signInWithGoogle, signInWithGithub, signInWithFacebook, addToDb, user, isUserExist} = useContext(AuthContext);
    const navigate = useNavigate();

    console.log("User", user);

    const userInfoHandler = result => {
        const socialUser = result.user;
        const displayName = socialUser.displayName;
        const email = socialUser.email;
        const photoURL = socialUser.photoURL;
        const registrationDate = Date().slice(0, 24);
        const role = 'reader';
        const isVerified = false;
        const isSuperAdmin = false;
        const user = {displayName, email, photoURL, registrationDate, role, isVerified, isSuperAdmin};
        return user;
    };

    // Sign in with google
    const signInWithGoogleHandler = () => {
        signInWithGoogle()
            .then(result => {
                const user = userInfoHandler(result);
                const email = user.email;
                isUserExist(email)
                    .then(res => res.json())
                    .then(() => {
                        alert("Login successful!");
                    })
                    .catch(() => {
                        const url = 'http://localhost:5000/users';
                        addToDb(url, user)
                            .then(() => {
                                alert("Login successful!");
                            })
                            .catch(err => console.log(err));
                    });
            }).catch(err => console.log(err));
    };
    // Sign in with facebook
    const signInWithFacebookHandler = () => {
        signInWithFacebook()
            .then(result => {
                const user = userInfoHandler(result);
                const email = user.email;
                isUserExist(email)
                    .then(res => res.json())
                    .then(() => {
                        alert("Login successful!");
                    })
                    .catch(() => {
                        const url = 'http://localhost:5000/users';
                        addToDb(url, user)
                            .then(() => {
                                alert("Login successful!");
                            })
                            .catch(err => console.log(err));
                    });
            }).catch(err => console.log(err));
    };
    // Sign in with github
    const signInWithGithubHandler = () => {
        signInWithGithub()
            .then(result => {
                const user = userInfoHandler(result);
                const email = user.email;
                isUserExist(email)
                    .then(res => res.json())
                    .then(() => {
                        alert("Login successful!");
                    })
                    .catch(() => {
                        const url = 'http://localhost:5000/users';
                        addToDb(url, user)
                            .then(() => {
                                alert("Login successful!");
                            })
                            .catch(err => console.log(err));
                    });
            }).catch(err => console.log(err));
    };

    // Sign in with email and password
    const signInWithEmailPasswordHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailPassword(email, password)
            .then(result => {
                console.log(result);
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-4/5 mx-auto">
                <div className="text-center lg:text-left w-full lg:w-1/2">
                    <img src={login} alt="..." className='w-full' />
                </div>
                <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-3xl font-bold text-center text-blue-700'>Login Now</h2>

                        <form onSubmit={signInWithEmailPasswordHandler}>
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
                                <label className="label">
                                    <button className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='flex text-sm gap-x-1'>
                            <span>You don't have an account? Please</span>
                            <Link to={"/register"} className='text-blue-600'>Register</Link>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex gap-x-3 justify-center items-center'>
                            <button onClick={signInWithGoogleHandler}>
                                <FcGoogle className='text-[28px]'></FcGoogle>
                            </button>
                            <button onClick={signInWithFacebookHandler}>
                                <BsFacebook className='text-blue-600 text-2xl'></BsFacebook>
                            </button>
                            <button onClick={signInWithGithubHandler}>
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