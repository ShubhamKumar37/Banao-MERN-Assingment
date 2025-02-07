import React from 'react'
import { IoPersonAdd } from "react-icons/io5";

const JoinButtons = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md text-black">
                Write a Post
                <span className="ml-1">▼</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
                <span className="mr-2"><IoPersonAdd /></span> Join Group
            </button>
        </div>
    )
}

export default JoinButtons