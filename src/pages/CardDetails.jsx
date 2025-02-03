import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";

const CardDetails = () => {
    const [disable, setDisable] = useState(false)
    const data = useLoaderData();
    const { addToCart, addToWishlist, wishlist,refresh, setRefresh } = useContext(NavContext)

    const { id } = useParams();

    const item = data.find((item) => item.product_id == id);
    console.log(item);
    useEffect(() => {
        const findItem = wishlist.find((product) => item.product_id === product.product_id)
        findItem && setDisable(true)
        if(refresh){
            setDisable(false)
            setRefresh(false)
        }
    }, [item, wishlist,refresh])
    return (
        <div >
            <Helmet>
                <title>{item.product_title} | Gadget Heaven</title>
            </Helmet>
            <div className="">
                <div className="bg-[#9538E2] pt-10 pb-50 ">
                    <h1 className="font-bold text-3xl text-center text-white">Product Details</h1>
                    <p className="font-normal text-base text-center text-white mt-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>

                <div className="max-w-[1250px]  relative -top-40 mx-auto  ">
                    <div className="rounded-2xl bg-base-100 shadow-sm flex flex-row gap-5 pb-10 max-w-11/12 mx-auto ">

                        {/* Left Side - Image */}
                        <div className="w-[35%] flex ">
                            <figure className="pl-10 pt-10 h-[450px] flex items-center w-full">
                                <img
                                    src={item.product_image}
                                    alt="Product"
                                    className="rounded-xl w-full h-full object-center"
                                />
                            </figure>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="pr-10 pt-10 flex flex-col gap-3 flex-1">
                            <h2 className="font-semibold text-2xl">{item.product_title}</h2>
                            <p className="font-semibold text-lg text-[#09080fa1]">Price: {item.price}</p>
                            <div>
                                <button className="px-3 py-1 text-[#309C08] border rounded-3xl bg-[#2f9c082c]">
                                    {item.availability ? "In Stock" : "Out of Stock"}
                                </button>
                            </div>
                            <p className="font-normal text-base text-[#09080fa1]">{item.description}</p>


                            <p className="font-bold text-lg">Specification:</p>
                            <ul className="font-normal text-lg text-[#09080fa1] -mt-1">
                                {item.Specification.map((spec, idx) => (
                                    <li key={idx}>{idx + 1}. {spec}</li>
                                ))}
                            </ul>


                            <p className="font-bold text-lg">Rating</p>
                            <div className="flex gap-1 -mt-1">
                                {[...Array(parseInt(item.rating) || 0)].map((_, i) => (
                                    <FaStar key={i} size={20} color="yellow" />
                                ))}
                                {[...Array(5 - (parseInt(item.rating) || 0))].map((_, i) => (
                                    <FaStar key={i} size={20} color="gray" />
                                ))}
                                <p className="px-2 font-medium ml-2 bg-[#09080F0D] rounded-full">{item.rating}</p>
                            </div>


                            <div className=" flex gap-3 items-center">
                                <button onClick={() => addToCart(item)} className=" cursor-pointer px-3 py-2 text-white border rounded-3xl bg-[#9538E2] font-medium flex items-center gap-1 hover:bg-[#e238d9]">
                                    Add To Cart <FaCartShopping />
                                </button>
                                <div onClick={() => { addToWishlist(item) }} className={` cursor-pointer h-8 w-8 bg-base-300 rounded-2xl flex justify-center items-center  ${disable ? "pointer-events-none opacity-50" : ""}`}>
                                    <CiHeart size={20} color="black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CardDetails;