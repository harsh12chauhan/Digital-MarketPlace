import React, { useContext } from 'react'
import {Outlet} from 'react-router-dom';
import Context from '../Context/Context';
import NotFound from '../Pages/NotFound';
import Navbar from '../Components/User/Navbar';

const User = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
        <Navbar/>
        {
          user.userid!==null?<Outlet/>:<NotFound/>
        }
        {/* <Outlet/> */}
    </div>
  )
}

export default User