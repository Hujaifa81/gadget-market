
import { Link } from 'react-router-dom';

const SingleCard = ({ item }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-lg">
                <figure className="px-6 pt-6 h-48">
                    <img
                        src={item.product_image}
                        alt="Shoes"
                        className="rounded-xl h-full w-full object-center" />
                </figure>
                <div className="p-6 flex flex-col min-h-[200px] flex-grow ">
                    <h2 className="font-medium text-lg">{item.product_title}</h2>
                    <p className='text-[#09080F99] text-medium text-lg my-2'>{item.price}k</p>
                    <div className="mt-auto">
                        <Link to={`details/${item.product_id}`}><button className="relative inline-block px-5 py-2 text-[#9538E2]  text-lg rounded-full border-2
          bg-clip-border cursor-pointer">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;