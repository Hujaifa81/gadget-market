import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../pages/Home';
import { NavLink } from 'react-router-dom';


const Category = () => {
    const { category } = useContext(DataContext);

    return (
        <div className="pb-3 flex flex-col justify-between ">
            <div>
            <NavLink to='' className="">
                            {({ isActive }) => (
                                <button
                                    className={`mb-3 font-medium btn w-full text-lg rounded-2xl text-right ${isActive ? "bg-[#9538E2] text-white" : "bg-gray-200"
                                        }`}
                                >
                                    All Products
                                </button>
                            )}
                        </NavLink>
            </div>
            {
                category.map((item) =>

                    <div key={item.id}>
                        <NavLink to={`category/${item.id}`} className="">
                            {({ isActive }) => (
                                <button
                                    className={`mb-3 font-medium btn w-full text-lg rounded-2xl text-right ${isActive ? "bg-[#9538E2] text-white" : "bg-gray-200"
                                        }`}
                                >
                                    {item.category}
                                </button>
                            )}
                        </NavLink>
                    </div>

                )
            }
        </div>
    );
};

export default Category;