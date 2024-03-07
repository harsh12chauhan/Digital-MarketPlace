import React, { useContext,useState } from 'react';
import Context from '../../Context/Context';


const ChangePassword = () => {

  const initialPassDetail = {
    "npassword":"",
    "cnpassword":""
  };

  const {user,updateUserDetails} = useContext(Context);
  const [ChangePassword,setChangePassword] = useState(initialPassDetail);

  const handleChange = (e)=> {
      setChangePassword({...ChangePassword,[e.target.name]:e.target.value});
  }   
  
  const {npassword,cnpassword} = ChangePassword;

  const  handleClick = async()=> {
    if(ChangePassword.npassword !== "" && ChangePassword.cnpassword !== ""){
      if(ChangePassword.npassword.length > 5 && ChangePassword.cnpassword.length > 5){
        if(ChangePassword.npassword === ChangePassword.cnpassword){           
          await updateUserDetails(user.userid,{"password":npassword});
          setChangePassword(initialPassDetail);
          console.log("Pass updated ");
        }else{
          console.log("Password dont match");
        }
      }else{
        console.log("short password");
      }
    }else{
      if(ChangePassword.npassword === ""){
        console.log("Fill password");
      }
      if(ChangePassword.cnpassword === ""){
        console.log("Fill cpassword");
      }
    }
  }


  return (
    <div className='mx-5'>
      <div className='my-4'>
          <h1 className='text-3xl lg:text-4xl text-blue-950 font-bold lg:ml-4'>Change Password</h1>
      </div>
      <div className='my-8'>
              <div className='flex flex-col m-4'>
                  <label htmlFor="opassword" className='mx-2 mb-1 text-sm'>Current Password</label>
                  <input type="text" name='opassword' placeholder='Current Password' value={user.password} readOnly  className='bg-gray-100 outline-none p-3 rounded-xl w-[220px] lg:w-[600px]'/>
              </div>
              <div className='flex flex-col m-4 mt-12'>
                  <label htmlFor="npassword" className='mx-2 mb-1 text-sm'>New Password</label>
                  <input type="text" name='npassword' placeholder='New Password' value={npassword} onChange={(e)=>{handleChange(e)}}  className='bg-gray-100 outline-none p-3 rounded-xl  w-[220px] lg:w-[600px]'/>
              </div>
              <div className='flex flex-col m-4'>
                  <label htmlFor="cnpassword" className='mx-2 mb-1 text-sm'>Confirm New Password</label>
                  <input type="text" name='cnpassword' placeholder='Confirm New Password' value={cnpassword} onChange={(e)=>{handleChange(e)}}  className='bg-gray-100 outline-none p-3 rounded-xl  w-[220px] lg:w-[600px]'/>
              </div>
      </div>
      <div className='ml-4'>
        <button className='text-white bg-blue-950 py-2 px-6 rounded-full' onClick={handleClick}>Save</button>
      </div>
    </div>
  )
}

export default ChangePassword