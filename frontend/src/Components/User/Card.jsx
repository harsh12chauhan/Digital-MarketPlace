import React, { useContext, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import { BsCartFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";

const Card = (props) => {
    const {product,productId,img,title,price,description} = props; 
    const [b,setB] = useState(false);
    const navigate = useNavigate();

    const {cart,setCart} = useContext(Context);

    const toggle=()=>{
        if(b){
            setB(false);
        }else{
            setB(true);
        }
    }

    const handleclick =()=>{
        // navigate(`/product/${productId}`);
        console.log("navigate please ");
    }
    
    const handleAddtocart = ()=>{
        alert("item added to cart");
        setCart(prev =>[...prev,{...product,quantity:1}])
    }
    
  return (
    <div className="w-[160px] h-[310px] lg:m-2 lg:w-[225px] lg:h-[350px] rounded-xl p-1 lg:pb-3 hover:shadow-2xl shadow-gray-900 hover:scale-105 transition-all duration-500 relative cursor-pointer">
        <div className='flex flex-col justify-center items-center'>
            <img className=" flex justify-center  items-center rounded-lg bg-[#fafafa] w-auto h-[150px] lg:h-[220px]" src={img!==''?img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large_2x.jpg"} alt="Img Here" onClick={handleclick}/>         
            <button onClick={toggle}>{b?<FaHeart className='w-[30px] size-5 m-3 absolute z-10 top-0 right-0 rounded-full hover:scale-105 transition-all duration-300'/>:<CiHeart className='w-[30px] size-5 m-3 absolute z-10 top-0 right-0 rounded-full hover:scale-105 transition-all duration-300'/>}</button>
        </div>
        <div onClick={handleclick} className='flex flex-col justify-between mt-2 mx-1'>
            <p className=" text-[12px] lg:text-[17px]  font-semibold text-wrap">{title}</p>
            <p className="text-[11px] my-1 min-h-8">{description.length > 80?description.slice(0,80) + "..." : description}</p>
            {/* <p className="text-[10px] my-1 flex">
                <FaRegStar className='m-1'/>
                <FaRegStar className='m-1'/>
                <FaRegStar className='m-1'/>
                <FaRegStar className='m-1'/>
                <FaRegStar className='m-1'/>
                (121)
            </p> */}
        </div>
        <div className='flex justify-between items-center mx-1'>
            <p className=" text-sm lg:text-lg  font-semibold">${price}</p>
            <button  onClick={handleAddtocart} className="text-[12px] font-semibold  mt-2 px-2 py-2 border-2 border-blue-950 lg:text-sm rounded-full hover:scale-110  hover:bg-blue-950  hover:text-white transition-all duration-500">
                <BsCartFill/>
                {/* <BsCartCheckFill/> */}
            </button>
        </div>
    </div>
  )
}

export default Card