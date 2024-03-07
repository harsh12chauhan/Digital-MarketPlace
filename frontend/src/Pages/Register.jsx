import React,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context/Context';

const Register = () => {

  const user = {
    "username":"",
    "email": "",
    "password":"",
    "cpassword":"",
    "phone": "",
    "address": "",
};
  const {setUser} = useContext(Context);

  const [createUser,setCreateUser] = useState(user);
  const navigate = useNavigate();

  const {username,email,password,cpassword} = createUser;

  const CreateUserRequest = async () => {
    await axios.post('http://localhost:3000/register',{username,email,password})
    .then(res=>{
      console.log(res.status);
        setUser(res.data);
    })
    .catch(err=>console.log(err))
  }

  const handleSave = async  () => {
    if(createUser.email !== "" && createUser.password !== "" && createUser.cpassword !== ""){
      if(createUser.password.length > 5 || createUser.cpassword.length > 5){
        if(createUser.password === createUser.cpassword){           
            await CreateUserRequest();
            navigate('/home')
        }else{
          console.log("Password dont match");
          setCreateUser(user);
          setCreateUser(user);
        }
      }else{
        console.log("short password");
        setCreateUser(user);
        setCreateUser(user);
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


  const handleChangeCreate = (e) => {
    setCreateUser({...createUser,[e.target.name]:e.target.value})
  }

  return (
    <div className='grid place-content-center h-screen'>
      <div>
        <div className='text-center'>
          <h1 className='text-5xl mb-4 font-semibold'>Sign Up Form</h1>
        </div>
        <div className='flex justify-center items-center shadow-[0px_0px_20px_0px] shadow-[#66FFFF] rounded-3xl'>
        {/* right section  */}
          <div className='flex flex-col justify-center items-center p-8'>
            <div>
              <h2 className='text-2xl font-semibold my-6'>Hello, friend!</h2>
            </div>
            <div>
              <div className='mb-6'>
                <input type="text" placeholder='Name' name='username' value={username} onChange={(e)=>{handleChangeCreate(e)}} className='text-sm text-cyan-400 py-4 px-8 outline-none rounded-full shadow-[0px_0px_20px_0px] shadow-[#66FFFF] w-[350px] border-b border-opacity-70 border-blue-300 placeholder:text-cyan-400'/>
              </div>
              <div className='my-6'>
                <input type="text" placeholder='E-mail' name='email' value={email} onChange={(e)=>{handleChangeCreate(e)}} className='text-sm text-cyan-400 py-4 px-8 outline-none rounded-full shadow-[0px_0px_20px_0px] shadow-[#66FFFF] w-[350px] border-b border-opacity-70 border-blue-300 placeholder:text-cyan-400'/>
              </div>
              <div className='mt-6'>
                <input type="text" placeholder='Password' name='password' value={password} onChange={(e)=>{handleChangeCreate(e)}} className='text-sm text-cyan-400 py-4 px-8 outline-none rounded-full shadow-[0px_0px_20px_0px] shadow-[#66FFFF] w-[350px] border-b border-opacity-70 border-blue-300 placeholder:text-cyan-400'/>
              </div>
              <div className='mt-6'>
                <input type="text" placeholder='Confirm Password' name='cpassword' value={cpassword} onChange={(e)=>{handleChangeCreate(e)}} className='text-sm text-cyan-400 py-4 px-8 outline-none rounded-full shadow-[0px_0px_20px_0px] shadow-[#66FFFF] w-[350px] border-b border-opacity-70 border-blue-300 placeholder:text-cyan-400'/>
              </div>
            </div>
            <div>
              <p className='text-[12px] text-cyan-600 my-3'>I've read and aggre to <strong className=" text-cyan-300 font-semibold">Terms & Conditions</strong></p>
            </div>
            <div>
              <button className='bg-gradient-to-l from-blue-400 to-cyan-200 mt-4 px-6 py-1 rounded-xl font-medium shadow-[0px_0px_20px_0px] shadow-[#99ffff] text-white' onClick={handleSave}>Create Account</button>
            </div>
            <div>
              <p className='mt-5 text-sm text-cyan-600'>Already have an account? <Link to={'/'} className='text-cyan-300 font-semibold'>Login</Link></p>
            </div>
          </div>
          {/* left Section */}
          <div className=' rounded-tr-3xl rounded-br-3xl h-[490px] w-[300px] flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-cyan-300 shadow-cyan-200'>
            <div>
              <h2 className='text-2xl text-white font-semibold'>Glad to see You!</h2>
            </div>
            <div className='px-6 w-54 mt-6'>
              <p className='text-md font-medium text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register