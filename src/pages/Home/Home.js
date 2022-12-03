import React from 'react';
import {Link} from 'react-router-dom';
import banner from '../../assets/banner.jpg';

const Home = () => {
    return (
        <>
            {/* Banner part */}
            <div className='w-full'>
                <div className="hero" style={{backgroundImage: `url(${banner})`}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md my-20">
                            <h1 className="mb-3 text-4xl font-bold">MD. SHAMIM SARKER</h1>
                            <h2 className="mb-5 text-3xl font-bold">Web Developer</h2>
                            <p className="mb-5">There is no end to good in the developing sector. Improvement is possible even in the best work. I always try to do better than before. For me it's an ongoing process. I always try to keep myself updated with new technologies.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resume part */}
            <div className='w-5/6 mx-auto border my-10 p-16 flex flex-col gap-y-3'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold'>MD. SHAMIM SARKER</h1>
                        <h2 className='text-2xl font-bold'>Front-End Developer</h2>
                    </div>
                    <div className='flex flex-col items-end'>
                        <span><strong>Phone: </strong>+8801723795366</span>
                        <span>shamim.sarker.2023@gmail.com</span>
                        <span><strong>Address:</strong> Dhaka, Bangladesh</span>
                        <span className='text-blue-600 font-bold'>
                            <Link to={"/"}>Portfolio // </Link>
                            <Link to={"/"}>Github // </Link>
                            <Link to={"/"}>LinkedIn</Link>
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className='bg-gray-300 border-b-2 border-black text-lg font-bold pl-1'>CAREER OBJECTIVE</h2>
                    <p className='text-justify'>There is no end to good in the developing sector. Improvement is possible even in the best work. I always try to do better than before. For me it's an ongoing process. I always try to keep myself updated with new technologies. Upcoming few years, I want to be more comfortable and more skilled in the tech world.</p>
                </div>
                <div>
                    <h2 className='bg-gray-300 border-b-2 border-black text-lg font-bold pl-1'>MY SKILLS</h2>
                    <ul className='ml-12 list-disc'>
                        <li><strong>Expertise: </strong>HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, REST API</li>
                        <li><strong>Comfortable: </strong>Node.js, Express.js, MongoDB, Java, SQL</li>
                        <li><strong>Familiar: </strong>TypeScript</li>
                        <li><strong>Tools: </strong>Git, VS Code, Chrome Dev Tools, Firebase, Netlify, Vercel, Figma, Canva, Photoshop</li>
                        <li><strong>Typing Speed: </strong>Up to 50 wpm (In English)</li>
                    </ul>
                </div>
                <div>
                    <h2 className='bg-gray-300 border-b-2 border-black text-lg font-bold pl-1'>PROJECTS</h2>
                    <div className='border-b-2 border-black mb-2'>
                        <div className='flex justify-between'>
                            <span>
                                <strong><Link to={"/"}>Schooling.com</Link></strong> (Educational Web Application)
                            </span>
                            <span>
                                <Link to={"/"} className="font-bold text-blue-600">Live Site // </Link>
                                <Link to={"/"} className="font-bold text-blue-600">Client-Side Code // </Link>
                                <Link to={"/"} className="font-bold text-blue-600">Server-Side Code</Link>
                            </span>
                        </div>
                        <h2 className='font-bold'>Key Features</h2>
                        <ul className='ml-12 list-disc'>
                            <li>Users can register with an email-password or with a social account.</li>
                            <li>Users can see service details with downloadable links.</li>
                            <li>Users can select a service for checkout.</li>
                        </ul>
                        <p><strong>Technologies: </strong>React, Tailwind CSS, Rsuite, Node.js, Express.js, Firebase, Vercel etc.</p>
                    </div>
                    <div className='border-b-2 border-black mb-2'>
                        <div className='flex justify-between'>
                            <span>
                                <strong><Link to={"/"}>Schooling.com</Link></strong> (Educational Web Application)
                            </span>
                            <span>
                                <Link to={"/"} className="font-bold text-blue-600">Live Site // </Link>
                                <Link to={"/"} className="font-bold text-blue-600">Client-Side Code // </Link>
                                <Link to={"/"} className="font-bold text-blue-600">Server-Side Code</Link>
                            </span>
                        </div>
                        <h2 className='font-bold'>Key Features</h2>
                        <ul className='ml-12 list-disc'>
                            <li>Users can register with an email-password or with a social account.</li>
                            <li>User can add services and can submit feedback which is sorted by descending order by date.</li>
                            <li>Users can update and delete his/her feedback.</li>
                        </ul>
                        <p><strong>Technologies: </strong>React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, Vercel etc.</p>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <span>
                                <strong><Link to={"/"}>Dress Recycle</Link></strong> (Old Dress Selling Web Application)
                            </span>
                            <span>
                                <Link to={"/"} className="font-bold text-blue-600">Live Site // </Link>
                                <Link to={"/"} className="font-bold text-blue-600">Client-Side Code // </Link>
                                <Link to={"/"} className="font-bold text-blue-600">Server-Side Code</Link>
                            </span>
                        </div>
                        <h2 className='font-bold'>Key Features</h2>
                        <ul className='ml-12 list-disc'>
                            <li>Four types of user role (Super Admin, Admin, Seller and Buyer).</li>
                            <li>Dashboard and payment gateway.</li>
                            <li>Use JWT to ensure security.</li>
                        </ul>
                        <p><strong>Technologies: </strong>React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Stripe, Firebase, Vercel etc.</p>
                    </div>
                </div>
                <div>
                    <h2 className='bg-gray-300 border-b-2 border-black text-lg font-bold pl-1'>TRAININGS & COURSES</h2>
                    <ul className='ml-12 list-disc'>
                        <li>Six months professional Complete Web Development course from Programming Hero (Score - 99.58%)</li>
                        <li>One year professional diploma course in ESAD (J2EE) from IsDB-BISEW (Oracle Vendor Certified - Score - 90%)</li>
                    </ul>
                </div>
                <div>
                    <h2 className='bg-gray-300 border-b-2 border-black text-lg font-bold pl-1'>EDUCATION</h2>
                    <ul className='ml-12 list-disc'>
                        <li>Bachelor of Science in Statistics from Begum Rokeya University, Rangpur (2010-2014)</li>
                    </ul>
                </div>
                <div>
                    <h2 className='bg-gray-300 border-b-2 border-black text-lg font-bold pl-1'>LANGUAGE PROFICIENCY</h2>
                    <ul className='ml-12 list-disc'>
                        <li>Bengali (Native Language), English (Intermediate)</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;