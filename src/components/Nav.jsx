import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { NavContext } from "../layouts/MainLayout";

const Nav = () => {

    const { cart, wishlist } = useContext(NavContext);
    return (
        <div>
            <div className='flex justify-between items-center py-4 '>
                <div>
                    <h3 className='font-bold text-xl'>Gadget Heaven</h3>
                </div>
                <div>
                    <ul className='font-medium text-base flex gap-4 items-center'>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? "bg-amber-400 rounded p-1" : ""}>Home</NavLink>
                        <NavLink to='statistics' className={({ isActive }) =>
                            isActive ? "bg-amber-400 rounded p-1" : ""}>Statistics</NavLink>
                        <NavLink to='dashboard' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-amber-400 rounded p-1" : ""}>Dashboard</NavLink>
                        <NavLink to='signin' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-amber-400 rounded p-1" : ""}>Sign in</NavLink>
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <div className="h-8 w-8 bg-base-200 rounded-2xl flex justify-center items-center relative">
                        <p className="absolute -top-2 left-5 font-medium text-lg text-amber-400">{cart.length}</p>
                        <FaShoppingCart size={20} color="black" />
                    </div>
                    <div className="h-8 w-8 relative rounded-2xl flex justify-center items-center bg-base-200">
                        <p className="absolute -top-2 left-5 font-medium text-lg text-amber-400">{wishlist.length}</p>
                        <CiHeart size={20} color="black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;