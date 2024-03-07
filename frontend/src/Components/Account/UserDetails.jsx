import React,{useContext, useState} from 'react';
import Context from '../../Context/Context';

const UserDetails = () => {
    
    const {user,updateUserDetails} = useContext(Context);

    const [updateUser,setUpdateUser] = useState(user);
    const handleChange = (e)=> {
        setUpdateUser({...updateUser,[e.target.name]:e.target.value});
    }   

    const  handleClick = async()=> {
        await updateUserDetails(user.userid,updateUser);
        console.log("User Updated");
    }

    const {username,email,phone,address} = updateUser;


  return (
    <div className='mx-5'>
        <div className='my-4'>
            <h1 className='text-3xl text-blue-950 font-bold lg:text-4xl lg:ml-4'>User Details</h1>
        </div>
        <div className='lg:flex justify-center items-center my-2'>
            <div>
                <div className='flex flex-col m-4'>
                    <label htmlFor="name" className='mx-2 mb-1 text-sm'>Name</label>
                    <input type="text" name='username' placeholder='Name'  value={username} onChange={(e)=>{handleChange(e)}} className='bg-gray-100 outline-none p-3 rounded-xl w-[220px] lg:w-[500px]'/>
                </div>
                <div className='flex flex-col m-4'>
                    <label htmlFor="email" className='mx-2 mb-1 text-sm'>Email</label>
                    <input type="text" name='email' placeholder='Email'  value={email} onChange={(e)=>{handleChange(e)}}  className='bg-gray-100 outline-none p-3 rounded-xl w-[220px] lg:w-[500px]'/>
                </div>
            </div>
            <div>
                <div className='flex flex-col m-4'>
                    <label htmlFor="phone" className='mx-2 mb-1 text-sm'>Phone</label>
                    <input type="text" name='phone' placeholder='Phone'  value={phone} onChange={(e)=>{handleChange(e)}} className='bg-gray-100 outline-none p-3 rounded-xl w-[220px] lg:w-[500px]'/>
                </div>
                <div className='flex flex-col m-4'>
                    <label htmlFor="address" className='mx-2 mb-1 text-sm'> Address</label>
                    <input type="text" name='address' placeholder='Address' value={address} onChange={(e)=>{handleChange(e)}} className='bg-gray-100 outline-none p-3 rounded-xl w-[220px] lg:w-[500px]'/>
                </div>
            </div>
        </div>
        <div className='flex justify-end mr-5'>
            <button className='text-white bg-blue-950 py-2 px-4 rounded-full hover:scale-105 transition' onClick={handleClick}>Save</button>
        </div>

    </div>
  )
}

export default UserDetails