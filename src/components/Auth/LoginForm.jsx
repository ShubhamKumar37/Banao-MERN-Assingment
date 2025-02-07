import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "", showPassword: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Logged in successfully!");
        setFormData({ email: "", password: "", showPassword: false });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2"
                required
            />
            <div className="relative">
                <input
                    type={formData.showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    required
                />
                <button type="button" className="absolute right-2 top-4" onClick={togglePassword}>
                    {formData.showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Sign In</button>
            <div className="text-center text-gray-500">Or</div>
            <button className="border p-2 flex items-center justify-center space-x-2">
                <FaFacebook className="text-blue-600" />
                <span>Sign up with Facebook</span>
            </button>
            <button className="border p-2 flex items-center justify-center space-x-2">
                <FaGoogle className="text-red-500" />
                <span>Sign up with Google</span>
            </button>
        </form>
    );
};

export default LoginForm;
