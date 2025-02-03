
import { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavContext } from '../layouts/MainLayout';
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import congrats from '../assets/Group.png'
import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    const { cart, setCart, wishlist, setWishlist, removeFromCart, removeFromWishlist, totalCost, setTotalCost, addToCart } = useContext(NavContext);
    const [text, setText] = useState('cart')
    const navigate = useNavigate()
    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal()

    }

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <Tabs>
                <div className="bg-[#9538E2] pt-10 pb-13">
                    <div>
                        <h1 className="font-bold text-3xl text-center text-white">Dashboard</h1>
                        <p className="font-normal text-base text-center text-white mt-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                        <TabList>
                            <div className='flex justify-center gap-4 mt-3'>

                                <Tab><button className={`btn rounded-full px-6 py-3 font-bold text-base text-[#9538E2]  ${text === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'} `} onClick={() => {
                                    setText('cart')

                                }}>Cart</button></Tab>


                                <Tab><button className={`btn rounded-full px-6 py-3 font-bold text-base   ${text === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`} onClick={() => {
                                    setText('wishlist')

                                }}>Wishlist</button></Tab>
                            </div>
                        </TabList>
                    </div>
                </div>
                <div className='max-w-[1250px] mx-auto'>
                    <div className='max-w-11/12 mx-auto '>
                        <div className='flex justify-between mt-3 items-center'>
                            <h3 className='font-bold text-lg'>{text === 'cart' && 'Cart'}{text === 'wishlist' && 'Wishlist'}</h3>
                            <div className={`${text ? 'flex items-center gap-4' : 'hidden'}`}>
                                {
                                    text === 'cart' && <h3 className='font-bold'>Total Cost:{text === 'cart' && totalCost}</h3>
                                }

                                <div className='flex justify-between'>
                                    <button className='btn rounded-full px-6 py-3 font-bold text-base text-[#9538E2]' onClick={() => {
                                        text === 'cart' && setCart([...cart].sort((a, b) => b.price - a.price))
                                        text === 'wishlist' && setWishlist([...wishlist].sort((a, b) => b.price - a.price))
                                    }}>Sort by Price</button>
                                </div>
                                {
                                    text === 'cart' && <div className={`${cart.length === 0 && "pointer-events-none opacity-50"}`}>
                                        <button className={`btn rounded-full px-6 py-3 font-bold text-base text-[white] bg-[#9538E2]`} onClick={handlePurchase}>Purchase</button>
                                    </div>
                                }

                            </div>
                        </div>
                        <div>

                            <TabPanel>

                                <div>
                                    {

                                        cart.map((item, idx) => (
                                            <div key={idx} className=' mt-4 bg-white p-4 rounded shadow flex justify-between '>
                                                <div className='flex gap-4'>
                                                    <div>
                                                        <img src={item.product_image} alt="" className='w-[80px] h-[80px] object-cover rounded' />
                                                    </div>
                                                    <div className='flex flex-col gap-1'>
                                                        <div className='flex justify-between items-center'>
                                                            <h3 className='font-semibold text-lg'>{item.product_title}</h3>
                                                        </div>

                                                        <p className='font-normal text-base text-[#09080F99]'>{item.description}</p>
                                                        <p className='font-semibold text-lg'>Price: {item.price}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                                <div className='cursor-pointer w-4 h-4 border rounded-full p-3 flex items-center justify-center'>
                                                    <div onClick={() => removeFromCart(item.product_id)}>
                                                        <RxCross2 />
                                                    </div>

                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {

                                    wishlist.map((item, idx) => (
                                        <div key={idx} className=' mt-4 bg-white p-4 rounded shadow flex justify-between '>
                                            <div className='flex gap-4'>
                                                <div>
                                                    <img src={item.product_image} alt="" className='w-[130px] h-[130px] object-cover rounded' />
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                    <div className='flex justify-between items-center'>
                                                        <h3 className='font-semibold text-lg'>{item.product_title}</h3>
                                                    </div>

                                                    <p className='font-normal text-base text-[#09080F99]'>{item.description}</p>
                                                    <p className='font-semibold text-lg'>Price: {item.price}</p>
                                                    <div>
                                                        <button className='btn rounded-full px-6 py-3 font-bold text-base text-[white] bg-[#9538E2]' onClick={() => addToCart(item)}>Add To Cart</button>
                                                    </div>
                                                </div>


                                            </div>
                                            <div>
                                            </div>
                                            <div className='cursor-pointer w-4 h-4 border rounded-full p-3 flex items-center justify-center'>
                                                <div onClick={() => removeFromWishlist(item.product_id)}>
                                                    <RxCross2 />
                                                </div>

                                            </div>

                                        </div>
                                    ))
                                }
                            </TabPanel>
                        </div>

                    </div>
                </div>

            </Tabs>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="">
                        <div className='flex justify-center items-center mb-2'>
                            <img src={congrats} alt="" />
                        </div>
                        <h3 className="font-bold text-lg text-center">Payment Successful</h3>
                        <div className='border-b-2 py-2'></div>
                        <p className="py-4 text-center">Thanks for Purchasing</p>
                        <p className='text-center'>Total:{totalCost}</p>
                    </div>

                    <div className="modal-action justify-center min-w-full">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={() => {
                                setTotalCost(0),
                                    setCart([]),
                                    navigate('/')
                            }}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;