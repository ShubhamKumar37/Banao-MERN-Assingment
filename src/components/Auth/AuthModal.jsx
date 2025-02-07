import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import imageUrl from "../../assets/Auth_Banner.png"

const AuthModal = ({ isOpen, onClose }) => {
    const [isSignup, setIsSignup] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
            <div className="bg-white rounded-lg w-full max-w-4xl shadow-lg flex flex-row-reverse relative">
                {/* Image Section */}
                <div className="w-full hidden md:block md:w-1/2">
                    <img
                        src={imageUrl}
                        alt="Auth Modal"
                        className="w-full h-full object-contain rounded-l-lg"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <button onClick={onClose} className="absolute top-2 right-2">
                        <FiX size={20} />
                    </button>

                    <h2 className="text-xl font-bold mb-4">{isSignup ? "Create Account" : "Sign In"}</h2>

                    {isSignup ? <SignupForm /> : <LoginForm />}

                    <div className="text-center mt-4">
                        {isSignup ? "Already have an account?" : "Don't have an account?"}
                        <span
                            className="text-blue-500 cursor-pointer ml-1"
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup ? "Sign In" : "Create Account"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
