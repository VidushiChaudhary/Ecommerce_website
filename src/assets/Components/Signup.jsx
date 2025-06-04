import React from 'react';


function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Your First Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Your Last Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-100 hover:bg-blue-400  font-semibold py-2 rounded-md transition duration-200">
                        Sign Up
                    </button>
                </form>
            </div>
            
        </div>
    );
}

export default Signup;
