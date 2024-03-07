import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImCross } from "react-icons/im";

const UserList = () => {

  const user = {
      "username":"",
      "email": "",
      "password":"",
      "cpassword":"",
      "phone": "",
      "address": "",
  };  

  const EditDetails = {
      "userid":"",
      "username":"",
      "email": "",
      "password":"",
      "cpassword":"",
      "phone": "",
      "address": "",
  };

  const [userData,setUserData] = useState([]);
  const [createUser,setCreateUser] = useState(user);
  const [editUser,setEditUser] = useState(EditDetails);
  const [handleRender,setHandleRender]= useState("empty");

  const getalluser = async () => {
    await axios.get('http://localhost:3000/allusers')
    .then(res=>{setUserData(res.data)})
    .catch(err=>{console.log(err)})
  }
    
  const {username,email,password,phone,address,cpassword} = createUser;
  const CreateUserRequest = async () => {
    await axios.post('http://localhost:3000/createuser',{username,email,password,phone,address})
    .then(res=>{res})
    .catch(err=>console.log(err))
    setHandleRender("create")
  }

  const handleDeleteUser = async (userid) => {
    await axios.delete(`http://localhost:3000/deleteuser/${userid}`)
    .then(res=>res)
    .catch(err=>console.log(err))
    setHandleRender("delete")
  }

  const updateUser = async() =>{
    await axios.put(`http://localhost:3000/updateuser/${editUser.userid}`,editUser)
    .then(res=>res)
    .catch(err=>console.log(err))
    const Card = document.querySelector(".EditCard");
    Card.classList.add("hidden")
    setHandleRender("update")
  }

  useEffect(()=>{
    getalluser();
  },[handleRender]);


  const handleChangeCreate = (e) => {
    setCreateUser({...createUser,[e.target.name]:e.target.value})
  }

  const handleChangeEdit = (e) => {
    setEditUser({...editUser,[e.target.name]:e.target.value})
  }
    
  const handleSave = () => {
    if(createUser.email !== "" && createUser.password !== "" && createUser.cpassword !== ""){
      if(createUser.password.length > 5 || createUser.cpassword.length > 5){
        if(createUser.password === createUser.cpassword){           
            CreateUserRequest(createUser);            
            handleClose();
            setCreateUser(user);
        }else{
          console.log("Password dont match");
        }
      }else{
        console.log("short password");
      }
    }else{
      if(createUser.email  === "" && createUser.password === "" && createUser.cpassword === ""){
        console.log("Fill required credientials");
      }else{
        if(createUser.password === ""){
          console.log("Fill password");
        }
        if(createUser.cpassword === ""){
          console.log("Fill cpassword");
        }
        if(createUser.email  === ""){
          console.log("Fill Email");
        }
      }
    }
  }

  const handleEditUser = ({userid ,username,email,password,phone,address})=>{
    setEditUser({
        "userid":userid,
        "username":username,
        "email": email,
        "password":password,
        "cpassword":password,
        "phone": phone,
        "address": address,
      })
      const Card = document.querySelector(".EditCard");
      Card.classList.remove("hidden")
  }

  const handleClose = (value = "create") => {
      setCreateUser(user);
      if(value === "edit"){
        const Card = document.querySelector(".EditCard");
        Card.classList.add("hidden")
      }else{
        const Card = document.querySelector(".Card");
        Card.classList.add("hidden")
      }
    } 

    const handleCreateUser = ()=>{
        const Card = document.querySelector(".Card");
        Card.classList.remove("hidden")
    }

    
    return (
      <div>
      <div className='flex justify-between items-center mx-4 mt-2'>
        <div>
          <h1 className='text-xl font-bold underline underline-offset-2 mx-4' >User's List</h1>
        </div>
        <div>
          <button className='bg-green-950 text-white font-semibold px-3 py-1 rounded-full' onClick={handleCreateUser} >Create User</button>
        </div>
      </div>
          <div className='mb-6 mt-2 ml-4  w-[1100px] h-[490px] overflow-scroll no-scrollbar shadow-[0px_0px_20px_1px] shadow-gray-200 rounded-xl'>
            <table className='table-auto'>
                <thead className='sticky top-0 bg-white shadow-md shadow-green-50'>
                <tr>
                    <th className='text-sm font-bold px-6 py-4'>ID</th>
                    <th className='text-sm font-bold px-6 py-4'>Name</th>
                    <th className='text-sm font-bold px-6 py-4'>Email</th>
                    <th className='text-sm font-bold px-6 py-4'>Phone</th>
                    <th className='text-sm font-bold px-6 py-4'>Password</th>
                    <th className='text-sm font-bold px-6 py-4'>Address</th>
                    <th className='text-sm font-bold px-6 py-4'>Type</th>
                    <th className='text-sm font-bold px-6 py-4'>Date</th>
                    <th className='text-sm font-bold px-6 py-4'>Edit</th>
                    <th className='text-sm font-bold px-6 py-4'>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                userData.filter(Admin=>{
                  if(Admin.typeofuser === "admin"){
                    return false;
                  }else{
                    return true
                  }
                }).map((item)=>(
                  <tr className='border-b' key={item.userid}>
                        <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.userid}</td>
                        <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.username}</td>
                        <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.email}</td>
                        <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.phone}</td>
                        <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.password}</td>
                        <td className='text-[12px] font-medium px-2 py-2 text-center text-wrap'>{item.address}</td>
                        <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.typeofuser}</td>
                        <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.date}</td>
                        <td className='text-[15px] font-medium px-2 py-2 text-center'>
                            <button className='bg-blue-600 text-white font-semibold px-3 py-1 rounded-full'onClick={()=>{handleEditUser(item)}}>Edit</button>
                        </td>
                        <td className='text-[15px] font-medium px-2 py-2 text-center'>
                            <button className='bg-red-600 text-white font-semibold px-3 py-1 rounded-full'onClick={()=>{handleDeleteUser(item.userid)}}>Delete</button>
                        </td>
                    </tr>                                        
                ))
              }
                </tbody>
            </table>
            </div> 

             {/* Create user section  */}
        <div className='Card hidden absolute top-14 left-72 bg-gray-400 p-4 rounded-lg transition'>
          <button onClick={handleClose}>
            <ImCross className='absolute top-8 right-10' />
          </button>
          <div className='my-1'>            
            <div className='flex flex-col m-2'>
              <label htmlFor="uname" className='mx-2 mb-1 text-sm'>User Name</label>
              <input type="text" name='username' placeholder='User Name' className='bg-gray-100 outline-none p-3 rounded-xl w-[650px]' value={username} onChange={(e)=>{handleChangeCreate(e)}}/>
            </div>
            <div className='flex flex-col m-2'>
              <label htmlFor="email" className='mx-2 mb-1 text-sm'>Email</label>
              <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]'value={email} required  onChange={(e)=>{handleChangeCreate(e)}}/>
            </div>
            <div className='flex flex-col m-2'>
              <label htmlFor="phone" className='mx-2 mb-1 text-sm'>Phone</label>
              <input type="text" name='phone' placeholder='Phone' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]' value={phone} onChange={(e)=>{handleChangeCreate(e)}}/>
            </div>
            <div className='flex'>
              <div className='flex flex-col m-2'>
                  <label htmlFor="password" className='mx-2 mb-1 text-sm'>Password</label>
                  <input type="text" name='password' placeholder='Password' className='bg-gray-100 outline-none p-3 rounded-xl  w-[315px]' value={password}  required onChange={(e)=>{handleChangeCreate(e)}}/>
              </div>
              <div className='flex flex-col m-2'>
                  <label htmlFor="cpassword" className='mx-2 mb-1 text-sm'>Confirm Password</label>
                  <input type="text" name='cpassword' placeholder='Confirm Password' className='bg-gray-100 outline-none p-3 rounded-xl  w-[315px]' value={cpassword}  required onChange={(e)=>{handleChangeCreate(e)}}/>
              </div>
            </div>
            <div className='flex flex-col m-2'>
                <label htmlFor="address" className='mx-2 mb-1 text-sm'>Address</label>
                <textarea name="address" cols="30" rows="2" placeholder='Address' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]' value={address} onChange={(e)=>{handleChangeCreate(e)}}></textarea>
            </div>
            <div className='flex justify-end mr-5'>
                <button className='bg-green-800 py-2 px-8 m-1 rounded-full text-lg font-semibold text-white hover:scale-105 transition outline-none' onClick={handleSave}>Create</button>                
            </div>
          </div>
        </div>

        {/* edit user section */}
        <div className='EditCard hidden absolute top-14 left-72 bg-gray-400 p-4 rounded-lg transition'>
          <button onClick={()=>{handleClose("edit")}}>
            <ImCross className='absolute top-8 right-10' />
          </button>
          <div className='my-1'>            
            <div className='flex flex-col m-2'>
              <label htmlFor="uname" className='mx-2 mb-1 text-sm'>User Name</label>
              <input type="text" name='username' placeholder='User Name' className='bg-gray-100 outline-none p-3 rounded-xl w-[650px]' value={editUser.username} onChange={(e)=>{handleChangeEdit(e)}}/>
            </div>
            <div className='flex flex-col m-2'>
              <label htmlFor="email" className='mx-2 mb-1 text-sm'>Email</label>
              <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]'value={editUser.email} required  onChange={(e)=>{handleChangeEdit(e)}}/>
            </div>
            <div className='flex flex-col m-2'>
              <label htmlFor="phone" className='mx-2 mb-1 text-sm'>Phone</label>
              <input type="text" name='phone' placeholder='Phone' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]' value={editUser.phone} onChange={(e)=>{handleChangeEdit(e)}}/>
            </div>
            <div className='flex flex-col m-2'>
                <label htmlFor="password" className='mx-2 mb-1 text-sm'>Password</label>
                <input type="text" name='password' placeholder='Password' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]' value={editUser.password}  required onChange={(e)=>{handleChangeEdit(e)}}/>
            </div>
            <div className='flex flex-col m-2'>
                <label htmlFor="address" className='mx-2 mb-1 text-sm'>Address</label>
                <textarea name="address" cols="30" rows="2" placeholder='Address' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]' value={editUser.address} onChange={(e)=>{handleChangeEdit(e)}}></textarea>
            </div>
            <div className='flex justify-end mr-5'>
                <button className='bg-green-800 py-2 px-8 m-1 rounded-full text-lg font-semibold text-white hover:scale-105 transition outline-none' onClick={updateUser}>Update</button>             
            </div>
          </div>
        </div>

    </div>
  )
}

export default UserList;


// const userData = [
//     {
//     userid:1,
//     username:"user 1",
//     email:"user@gmail.com",
//     phone:2307483920,
//     password:"user1",
//     block:"false",
//     address:"delhi sector 5.",
//     date:"32-3-23 10:17:09 am",
//     typeofuser:"user"
//     }
// ];