import React, { useState } from 'react';
import { FiX, FiSearch } from 'react-icons/fi';
import Logo from "../../assets/Logo.png";
import { AuthModal } from "../index.js";

const NavBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='w-full flex flex-row justify-between items-center mx-auto px-6 py-4 bg-white shadow-sm'>
            {/* Logo */}
            <div className='w-32 cursor-pointer'>
                <img src={Logo} alt="ATG logo" className='w-full h-auto' />
            </div>

            {/* Search Bar */}
            <div className='flex-1 max-w-[35%] mx-8 hidden sm:block relative'>
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

            <div className='relative group'>
                <button
                    onClick={openModal}
                    className='flex items-center text-gray-700 hover:text-black transition-colors text-lg '
                >
                        <span className='mr-2'>Create account.</span>
                        <span className='text-blue-500 cursor-pointer hidden sm:block font-bold'>It's Free</span>
                </button>
                
            </div>

            <AuthModal isOpen={showModal} onClose={closeModal} />
        </div>
    );
};

export default NavBar;
