import { createContext } from "react";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from "react";
import { toast } from "react-toastify";

export const NavContext = createContext();
const MainLayout = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [totalCostWishlist, setTotalCostWishlist] = useState(0);
    const [refresh,setRefresh]=useState(false)
    const location = useLocation();
    console.log(location);
    const addToCart = (item) => {
        if(totalCost+item.price>1000){
            toast.error(`Amount is exceeded`);
            return
        }
        setCart([...cart, item]);
        
        setTotalCost(totalCost+item.price);
        
        setWishlist(wishlist.filter((itm)=>itm.product_id !== item.product_id))
         setRefresh(true)
        toast.success(`${item.product_title} added to cart`);
    }
    const addToWishlist = (item) => {
        setWishlist([...wishlist, item]);
        setTotalCostWishlist(totalCostWishlist+item.price);
        toast.success(`${item.product_title} added to wishlist`);
    }
    const removeFromCart = (id) => {
        setCart(() => {
            const index = cart.findIndex((item) => item.product_id === id);
            if (index !== -1) {
                const newCart = [...cart];
                newCart.splice(index, 1);
                return newCart;
            }
            return cart;
        });
        
        const product=cart.find((item)=>item.product_id==id)
        console.log(product);
        setTotalCost(totalCost-product.price);
        toast.success(`${product.product_title} removed from cart`);
    };
    
    const removeFromWishlist = (id) => {
        setWishlist(() => {
            const index = wishlist.findIndex((item) => item.product_id === id);
            if (index !== -1) {
                const newWishlist = [...wishlist];
                newWishlist.splice(index, 1);
                return newWishlist;
            }
            return wishlist;
        });
        const product=wishlist.find((item)=>item.product_id===id)
        setTotalCostWishlist(totalCostWishlist-product.price);
        toast.success(`${product.product_title} removed from wishlist`);

    }


    return (
        <NavContext.Provider value={{cart,addToCart,wishlist,addToWishlist,removeFromCart,removeFromWishlist,totalCost,setTotalCost,totalCostWishlist,setCart,setWishlist,refresh,setRefresh}}>
        <div>
            {
                location.pathname === "/" || location.pathname.includes('category')   ?'': <div className="max-w-[1250px] mx-auto"><div className="max-w-11/12 mx-auto"><Nav></Nav></div></div>
            }
            {
                 location.pathname.includes('category') && location.pathname.includes('details')   ?<div className="max-w-[1250px] mx-auto"><div className="max-w-11/12 mx-auto"><Nav></Nav></div></div>:''
            }
            <div className="font-sora bg-gray-100 pb-11 ">
            <Outlet></Outlet>
            </div>
            
            <div className=" py-11">
               <Footer></Footer> 
            </div>
        </div>
        </NavContext.Provider>
    );
};

export default MainLayout;