import React, { useState } from 'react';
import { FiX, FiSearch } from 'react-icons/fi';
import Logo from "../../assets/Logo.png";

const NavBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    return (
        <div className='w-full flex flex-row justify-between items-center mx-auto px-6 py-4 bg-white shadow-sm'>
            {/* Logo */}
            <div className='w-32 cursor-pointer'>
                <img src={Logo} alt="ATG logo" className='w-full h-auto' />
            </div>

            {/* Search Bar */}
            <div className='flex-1 max-w-[35%] mx-8 relative'>
                <div className='flex items-center border rounded-full px-4 py-2 bg-gray-100 hover:border-gray-400 transition-colors'>
                    <input
                        type="text"
                        placeholder="Search for your favorite groups in ATG"
                        className='flex-1 outline-none bg-transparent text-sm'
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    {searchValue ? (
                        <div className='text-gray-500 cursor-pointer ml-2'>
                            <FiX
                                onClick={clearSearch}
                            />
                        </div>
                    ) : (
                        <FiSearch className='text-gray-500 ml-2' />
                    )}
                </div>
            </div>

            {/* eate Account Button */}
            <div className='relative group'>
                <button
                    onClick={() => setShowModal(true)}
                    className='flex items-center text-gray-700 hover:text-black transition-colors'
                >
                    <span className='mr-2'>Create account.</span>
                    <span className='text-blue-500 cursor-pointer font-bold'>It's Free</span>
                </button>
                <span className='absolute top-full right-0 mt-1 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity'>
                    It's free!
                </span>
            </div>

            {/* Modal placeholder - To be implemented later */}
        </div>
    );
};

export default NavBar;