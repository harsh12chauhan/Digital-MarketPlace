import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

  const handleMenu =()=>{
    const dropdownClass = document.querySelector(".dropdown");
    dropdownClass.classList.contains("hidden")?dropdownClass.classList.remove("hidden") & dropdownClass.classList.add("visible"):dropdownClass.classList.remove("visible") & dropdownClass.classList.add("hidden")
  } 

  return (
    <div className="flex justify-between shadow-md h-14  sticky top-0 z-[999] bg-white">
      <div className="m-2 flex items-center justify-center">
        <img className="w-10 lg:w-17  rounded-full" src="https://static.vecteezy.com/system/resources/previews/008/533/393/non_2x/ad-artistic-letter-logo-design-with-serif-font-in-black-and-white-colors-illustration-vector.jpg" alt="" />
        <h1 className="text-xl lg:text-2xl font-extrabold text-green-950"><Link to={"home"}>PAPI-Creative </Link></h1>
      </div>

      <div className='dropdown top-12 absolute hidden left-0 bg-green-50 w-full lg:visible lg:top-0 lg:bg-transparent lg:flex lg:justify-end '>
        <ul className="m-2 text-sm flex flex-col justify-center items-center lg:flex lg:flex-row lg:text-md ">
          <li className="m-2 font-semibold cursor-pointer hover:scale-105 transition">Category</li>
          <li className="m-2 font-semibold cursor-pointer hover:scale-105 transition">Deals</li>
          <li className="m-2 font-semibold cursor-pointer hover:scale-105 transition">What's New</li>
          <li className="m-2 font-semibold cursor-pointer hover:scale-105 transition"><Link to={"/home"}>Product's</Link></li>
          <li className="m-2 font-semibold relative cursor-pointer">
            <input className="rounded-full bg-gray-200 px-2 py-1 w-[150px] lg:w-[190px] outline-none" type="text" placeholder="Search Product" />
            <FaSearch className='absolute top-2 right-2'/>
          </li>
          <li className="my-2 font-semibold mx-2 hover:scale-105 transition">
            <Link  to={'account'} className='m-1 flex justify-center items-center'>
            <VscAccount/>
              <p className='ml-1'>Account</p>
            </Link>
          </li>
          <li className="my-2 font-semibold  mx-2 hover:scale-105 transition">
            <Link to={'cart'} className='m-1 flex justify-center items-center'> 
            <IoMdCart/>
              <p className='ml-1'>Cart</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex justify-center items-center lg:hidden'>
        <button className='burger-menu' onClick={handleMenu}><IoMenu className='text-2xl mx-4 cursor-pointer'/></button>
      </div>
    </div>
  )
}

export default Navbar;
