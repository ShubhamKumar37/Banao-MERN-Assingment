import React from 'react'
import { FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";

const SetLocation = () => {
    return (
        <div className="p-4 bg-white w-full sm:w-[90%] mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-gray-800">
                    <FaMapMarkerAlt />
                    <span>Noida, India</span>
                </div>
                <FaPencilAlt className="cursor-pointer text-gray-500 hover:text-gray-800" />
            </div>
            <hr className="my-2" />
            <p className="text-gray-600 text-sm flex items-center space-x-2">
                ℹ️ <span>Your location will help us serve better and extend a personalized experience.</span>
            </p>
        </div>
    )
}


export default SetLocation