import  { useEffect, useState } from 'react';
import { DataContext } from '../pages/Home';
import { useContext } from 'react';
import SingleCard from './SingleCard';
import { useLoaderData, useParams } from 'react-router-dom';

const Cards = () => {
    const {category} = useContext(DataContext);
    const initialData=useLoaderData()
    const [data,setData]=useState([...initialData]);
    const {id}=useParams()
    useEffect(()=>{

        const findCategory=category.find((item)=>item.id==id)
        
        if(findCategory){
            
        const filteredData=initialData.filter((item)=>item.category==findCategory.category)
        setData(filteredData)
        
        }
        else{
            setData(initialData)
        }
        
    },[initialData,id,category])
    return (
        <div>
            {
                data.length===0 ? <div className='font-bold text-lg flex items-center justify-center py-10'>No Products Available</div>:<div className='grid grid-cols-3 gap-4'>
                {
                    data.map(item=><SingleCard key={item.product_id} item={item}></SingleCard>)
                }
            </div>
            }
        </div>
        
    );
};

export default Cards;