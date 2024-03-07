import React, { useState } from 'react'
import Context from './Context';
import axios from 'axios';

const initialUserDetails = {
    "userid":"",
    "username":"",
    "email":"",
    "password":"",
    "phone":"",
    "address":""
};


const StatesContext = (props) => {
    const[user ,setUser] = useState(initialUserDetails);
    const[productData,setProductData] = useState([]);
    const[cart,setCart] = useState([]);

    // const cart = [];

    const getAllProducts = async() =>{
        await axios.get('http://localhost:3000/allproducts')
        .then(res=>{setProductData(res.data)})
        .catch(err=>console.log(err))
    }

    const updateUserDetails = async(uid,details) =>{
        await axios.put(`http://localhost:3000/updateuser/${uid}`,details)
        .then(res=>res)
        .catch(err=>console.log(err))
        setUser({
                "userid":user.userid,
                "username":details.username === undefined?user.username:details.username,
                "email":details.email === undefined?user.email:details.email,
                "password":details.password === undefined?user.password:details.password,
                "phone":details.phone === undefined?user.phone:details.phone,
                "address":details.address === undefined?user.address:details.address
            }
        );
    }

    const Logout = () => {
        setUser(initialUserDetails);
        localStorage.removeItem("user");
        setUser(initialUserDetails);
    }

  return (
        <Context.Provider value={
            { 
             user,setUser,productData,getAllProducts,Logout,updateUserDetails,setCart,cart
            }
        }>
            {props.children}
        </Context.Provider>
  )
}

export default StatesContext