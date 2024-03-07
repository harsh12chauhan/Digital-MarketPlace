import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Context from '../../Context/Context';

import { BiSolidUserDetail } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { TbPasswordUser } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";

const Account = () => {

  const navigate = useNavigate();
  const {Logout} = useContext(Context);

  const handleLogout = ()=>{
    Logout()
    navigate('/');
  }

  return (
      <div className='flex'>
        <div className="flex justify-start items-center">
          {/* left section */}
          <div className='bg-blue-900 h-[547px] w-[60px] rounded-tr-2xl '>
            <ul className='mt-16'>
              <li className='w-[50px] my-2 p-3 flex border-2  border-blue-800 rounded-full group relative '> 
                <Link to={""} className='text-2xl text-white font-bold  hover:scale-105 duration-300'><BiSolidUserDetail /></Link>
                <p className="text-white text-sm text-nowrap z-10 font-semiold absolute top-1 left-14 bg-blue-950 w-auto rounded-xl p-2 ml-2 invisible lg:group-hover:visible opacity-0 lg:group-hover:opacity-100 transition">
                  User Details
                </p> 
              </li>
              <li className='w-[50px] my-2 p-3 flex border-2 border-blue-800 rounded-full group relative '> 
              <Link to={"orderdetails"} className='text-2xl text-white font-bold  hover:scale-105 duration-300'><TbListDetails /></Link>
                <p className="text-white text-sm text-nowrap z-10 font-semiold absolute top-1 left-14 bg-blue-950 w-auto rounded-xl p-2 ml-2 invisible lg:group-hover:visible opacity-0 lg:group-hover:opacity-100 transition">
                  Order Details
                </p> 
              </li>
              <li className='w-[50px] my-2 p-3 flex border-2  border-blue-800 rounded-full group relative '> 
              <Link to={"changepassword"} className='text-2xl text-white font-bold  hover:scale-105 duration-300'><TbPasswordUser /></Link>
                <p className="text-white text-sm text-nowrap z-10 font-semiold absolute top-1 left-14 bg-blue-950 w-auto rounded-xl p-2 ml-2 invisible lg:group-hover:visible opacity-0 lg:group-hover:opacity-100 transition">
                  Change Password
                </p> 
              </li>
              <li className='w-[50px] my-2 p-3 flex border-2  border-blue-800 rounded-full group relative '> 
                <button className='text-2xl text-white font-bold  hover:scale-105 duration-300' onClick={handleLogout}><CiLogout /></button>
                <p className="text-white text-sm text-nowrap z-10 font-semiold absolute top-1 left-14 bg-blue-950 w-auto rounded-xl p-2 ml-2 invisible lg:group-hover:visible opacity-0 lg:group-hover:opacity-100 transition">
                  Logout
                </p> 
              </li>
            </ul>
          </div>
        </div>
        
          {/* right section */}
          <div>
              <Outlet/>
          </div>
      </div>
  )
}

export default Account