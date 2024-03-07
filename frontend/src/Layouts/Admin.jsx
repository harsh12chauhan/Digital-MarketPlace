import React, { useContext } from 'react';
import Context from '../Context/Context';
import NotFound from '../Pages/NotFound';
import Dashboard from '../Pages/Admin/Dashboard';

const Admin = () => {

  const {user} = useContext(Context); 
  

  return (
    <div>
    {
      user.typeofuser === "admin" ? <Dashboard/>:<NotFound/>
    }
    </div>
  )
}

export default Admin