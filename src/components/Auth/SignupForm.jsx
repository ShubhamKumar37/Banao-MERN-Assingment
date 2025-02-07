import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false, // Add state for confirm password visibility
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    const toggleConfirmPassword = () => {
        setFormData({ ...formData, showConfirmPassword: !formData.showConfirmPassword });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created successfully!");
        setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", showPassword: false, showConfirmPassword: false });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">

            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 flex-1"
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 flex-1"
                required
            />
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
            <div className="relative">
                <input
                    type={formData.showConfirmPassword ? "text" : "password"} // Use showConfirmPassword for confirm field
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    required
                />
                <button type="button" className="absolute right-2 top-4" onClick={toggleConfirmPassword}>
                    {formData.showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Create Account</button>
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

export default SignupForm;
