import React from 'react';

const Footer = () => {
    return (
        <div className=' max-w-[1250px] mx-auto '>
            <div className='max-w-11/12 mx-auto'>
            <h2 className='font-bold text-2xl text-center pb-3'>Gadget Heaven</h2>
            <p className='text-[#09080F] font-medium text-base text-center pb-3'>Leading the way in cutting-edge technology and innovation.</p>
            <div className='border-b-2 pb-3'>

            </div>
            <div className='grid grid-cols-3 max-w-1/2  mx-auto py-4 font-light text-[#09080F]'>
                <div>
                    <ul className=''>
                        <li className='font-bold my-3'>Services</li>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold my-3'>Company</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold my-3'>Legal</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;