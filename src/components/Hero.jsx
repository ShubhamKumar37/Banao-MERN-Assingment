import React from 'react';
import Banner from "../assets/Hero-Banner.png";

const Hero = () => {
    return (
        <div className='relative flex items-center'>
            {/* Image */}
            <img
                src={Banner}
                alt="Hero Banner"
                className="w-full h-[300px] object-cover sm:h-[500px] "
            />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-40'></div>

            {/* Content */}
            <div className='absolute z-10  text-white px-4 bottom-[20%] left-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                    Computer Engineering
                </h1>
                <p className='text-base md:text-lg lg:text-xl'>
                    142,765 Computer Engineers follow this
                </p>
            </div>
        </div>
    );
};

export default Hero;
