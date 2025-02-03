import { useState, useEffect, createContext } from "react";

import Header from "../components/Header";

import Category from "../components/Category";

import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

// Create Context
export const DataContext = createContext();

const Home = () => {

    const [category, setCategory] = useState([]);




    useEffect(() => {
        fetch("/category.json")
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, []);
    return (
        <DataContext.Provider value={{ category }}>
            <div>
                <Helmet>
                    <title>Home | Gadget Heaven</title>
                </Helmet>
                <Header />
                <h2 className="font-bold text-3xl text-center pt-56 pb-8">
                    Explore Cutting-Edge Gadgets
                </h2>
                <div className="max-w-[1250px] mx-auto">
                    <div className="max-w-11/12 mx-auto flex gap-3">
                        <div className="w-[15%] shadow-lg px-3 pt-4  max-h-fit rounded-lg bg-white">
                            <Category />
                        </div>
                        <div className="w-[80%]">
                            <Outlet />
                        </div>
                    </div>


                </div>
            </div>
        </DataContext.Provider>
    );
};

export default Home;
