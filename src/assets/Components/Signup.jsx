import React, { useState } from 'react';

function Signup() {
    const [showOTP, setShowOTP] = useState(false);
    const [otpValue, setOtpValue] = useState('');

    const handleSendOTP = (e) => {
        e.preventDefault(); // Prevent form submission
        setShowOTP(true);   // Show OTP input field
        // Simulate sending OTP here
        console.log("OTP sent!");
    };

    const handleSubmitOTP = (e) => {
        e.preventDefault();
        // Logic to verify OTP
        console.log("Submitted OTP:", otpValue);
    };

    const handleResendOTP = (e) => {
        e.preventDefault();
        // Logic to resend OTP
        console.log("OTP resent!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-slate-100 rounded-md shadow-md p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Your First Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
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

                    {!showOTP && (
                        <button
                            onClick={handleSendOTP}
                            className="w-full bg-slate-400  font-semibold py-2 rounded-md transition duration-200"
                        >
                            Send OTP
                        </button>
                    )}

                    {showOTP && (
                        <div className="space-y-2">
                            <input
                                type="number"
                                placeholder="Enter OTP"
                                value={otpValue}
                                onChange={(e) => setOtpValue(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <div className="flex justify-between space-x-2">
                                <button
                                    onClick={handleSubmitOTP}
                                    className="w-1/2 bg-slate-400  font-semibold py-2 rounded-md transition duration-200"
                                >
                                    Submit OTP
                                </button>
                                <button
                                    onClick={handleResendOTP}
                                    className="w-1/2 bg-slate-400  font-semibold py-2 rounded-md transition duration-200"
                                >
                                    Send Again
                                </button>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-slate-400   font-semibold py-2 rounded-md transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
