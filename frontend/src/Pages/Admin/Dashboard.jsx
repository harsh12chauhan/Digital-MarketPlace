import React, { useContext } from 'react'
import Context from '../../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import {Outlet} from 'react-router-dom'


const Dashboard = () => {

  const{Logout} = useContext(Context);
  const navigate = useNavigate();

  const handleLogout =  () => {
      Logout();
      navigate('/');
  }
  
  return (
    <div className='h-screen flex'> 
      {/* left section */}
      <div className=' bg-blue-950 h-screen w-[150px] pt-16'>
        <ul>
          <li className='text-sm mb-6 mx-4 font-semibold text-white hover:opacity-60 cursor-pointer'><Link to={''}> Dashboard</Link> </li>
          <li className='text-sm my-6 mx-4 font-semibold text-white hover:opacity-60 cursor-pointer'><Link to={'userlist'}> User</Link> </li>
          <li className='text-sm my-6 mx-4 font-semibold text-white hover:opacity-60 cursor-pointer'><Link to={'productlist'}> Products</Link> </li>
          <li className='text-sm my-6 mx-4 font-semibold text-white hover:opacity-60 cursor-pointer'><Link to={'orderlist'}> Order's</Link> </li>
          <li className='text-sm my-6 mx-4 font-semibold text-white hover:opacity-60 cursor-pointer'><Link to={'banners'}> Banner's</Link> </li>
          <li className='text-sm my-6 mx-4 font-semibold text-white hover:opacity-60 cursor-pointer'><Link to={'userdetails'}> Account </Link> </li>
          <li className='text-sm my-6 mx-4 font-semibold text-white hover:opacity-60 cursor-pointer'><Link to={'changepassword'}> Change Password</Link> </li>
        </ul>
      </div>
      {/* right section */}
      <div className='w-full'>
        {/* top section */}
        <div className='flex justify-between items-center my-2 mx-3'>
            <h1 className='text-lg font-semibold text-blue-950'>Welcome, Admin</h1>
            <div>
              <button className='bg-blue-950 text-white text-sm font-semibold py-2 px-4 rounded-xl' onClick={handleLogout}>Logout</button>
            </div>
        </div>
        <hr/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard;