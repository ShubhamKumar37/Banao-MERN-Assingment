import React, { useState } from "react";
import { FaEye, FaCalendarAlt, FaMapMarkerAlt, FaEllipsisH } from "react-icons/fa";

const BlogCard = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border p-4 w-full max-w-[45rem] relative">
            {item.image && <img src={item.image} alt="banner" className="w-full h-48 object-cover rounded-lg" />}

            <div className="p-4">
                {item.tag && <p className="text-sm font-semibold text-gray-600">{item.tag}</p>}

                {item.title && <h2 className="text-lg font-bold mt-1">{item.title}</h2>}

                {item.date && (
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <FaCalendarAlt /> {item.date}
                    </p>
                )}

                {item.companyName && (
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <FaMapMarkerAlt /> {item.companyName}
                    </p>
                )}

                {item.desc && <p className="text-gray-700 mt-2">{item.desc}</p>}

                <div className="flex flex-col sm:flex-row items-center justify-between mt-3">
                    <div className="flex items-center gap-2 mb-3 sm:mb-0">
                        {item.userImage && <img src={item.userImage} alt="User Avatar" className="w-8 h-8 rounded-full" />}
                        {item.userName && <p className="text-sm font-semibold">{item.userName}</p>}
                    </div>
                    <div className="sm:flex hidden items-center  gap-3">
                        <span className="flex items-center text-gray-500 gap-1 text-sm">
                            <FaEye /> 1.4k views
                        </span>
                        <button
                            className="relative text-gray-500 hover:bg-gray-200 p-2 rounded-full"
                            onMouseEnter={() => setIsModalOpen(true)}
                            onMouseLeave={() => setIsModalOpen(false)}
                        >
                            {isModalOpen && (
                                <div
                                    onMouseEnter={() => setIsModalOpen(true)}
                                    onMouseLeave={() => setIsModalOpen(false)}
                                    className="absolute right-0 bg-white p-2 rounded-lg shadow-lg w-48 flex flex-col gap-2 z-100">
                                    <button className="text-sm text-gray-700 hover:font-bold">Edit</button>
                                    <button className="text-sm text-gray-700 hover:font-bold">Report</button>
                                    <button className="text-sm text-gray-700 hover:font-bold">Option 3</button>
                                </div>
                            )}
                            <FaEllipsisH />
                        </button>
                    </div>
                </div>

                {item.buttonText && (
                    <button className="mt-3 border-2 p-2 w-full text-lg rounded-lg text-green-600 hover:font-bold">
                        {item.buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default BlogCard;
