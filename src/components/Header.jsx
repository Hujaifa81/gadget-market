import React from 'react';
import Nav from './Nav';
import banner from '../assets/banner.jpg';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location=useLocation()
    console.log(location);
    return (
        <div className='relative'>
            <div className='max-w-[1250px] mx-auto bg-[#9538E2]  border-white border-4 rounded-2xl mt-3'>
                <div className='max-w-11/12 mx-auto text-white'>
                    <Nav></Nav>
                </div>
                <div className='max-w-6xl mx-auto text-center space-y-4 pt-4 pb-60'>
                    <h1 className='font-bold text-5xl'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className='font-normal text-base'>Explore the latest gadgets that will take your experience to <br />the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='btn rounded-full px-6 py-3 font-bold text-lg text-[#9538E2]'>Shop Now</button>
                </div>

            </div>
            <div>
                
            </div>
            <div className='w-[70%] absolute left-[50%] transform -translate-x-1/2 top-[60%] h-[400px] '>
                <img src={banner} alt="" className='w-full h-full rounded-2xl border object-center' />
            </div>
        </div>

    );
};

export default Header;