import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate()
    return (
        <div className='flex flex-col items-center py-52'>
            <h1 className='text-center font-bold text-3xl flex justify-center items-center'>No Page Available</h1>
            <div className='flex justify-center items-center '>
                <button onClick={()=>navigate('/')} className='btn bg-[#9538E2] mt-5 btn-ghost rounded'>Go To Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;