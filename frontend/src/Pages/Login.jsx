import React,{useContext, useState} from 'react'
import Context from '../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialLoginDetails = {
  "email":"",
  "password":""
};

const Login = () => {

  const [loginDetails,setLoginDetails] = useState(initialLoginDetails)
  const{setUser} = useContext(Context);

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value});
  }

  const LoginRequest = async()=>{
    await axios.post('http://localhost:3000/login',loginDetails)
    .then(res=>{
        if(res.data){
            setUser(res.data); 
            // console.log((res.headers));
            localStorage.setItem("user",JSON.stringify(res.data));   
            if(res.data.userid === 15){
              navigate('/dashboard');
            }else{
              navigate('/home');
            }
        }
    })
    .catch(err=>console.log(err))
}

  const handleClick = ()=>{
    LoginRequest(loginDetails);
    setLoginDetails(initialLoginDetails);
  }


  return (
    <div className='grid place-content-center h-screen'>
      <div>
        <div className='text-center'>
          <h1 className='text-5xl mb-4 font-semibold'>Login Form</h1>
        </div>
        <div className='flex justify-center items-center shadow-[0px_0px_20px_0px] shadow-[#66FFFF] rounded-3xl'>
        {/* right section  */}
          <div className='flex flex-col p-8'>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold my-6'>Welcome Back!</h2>
            </div>
            <div>
              <div className='my-6'>
                <input type="text" placeholder='E-mail' name='email' value={loginDetails.email} onChange={(e)=>{handleChange(e)}} className='text-sm text-cyan-400 py-4 px-8 outline-none rounded-full shadow-[0px_0px_20px_0px] shadow-[#66FFFF] w-[350px] border-b border-opacity-70 border-blue-300 placeholder:text-cyan-400'/>
              </div>
              <div className='mt-6'>
                <input type="text" placeholder='Password' name='password' value={loginDetails.password} onChange={(e)=>{handleChange(e)}} className='text-sm text-cyan-400 py-4 px-8 outline-none rounded-full shadow-[0px_0px_20px_0px] shadow-[#66FFFF] w-[350px] border-b border-opacity-70 border-blue-300 placeholder:text-cyan-400'/>
              </div>
            </div>
            <div>
              <p className='text-[12px] text-cyan-300 font-semibold mt-5 mb-3 ml-4'><a href='#' >Forget Password ?</a></p>
            </div>
            <div>
              <button onClick={handleClick} className='bg-gradient-to-l from-blue-400 to-cyan-200 mt-4  py-1 rounded-xl font-medium shadow-[0px_0px_20px_0px] shadow-[#99ffff] text-white w-[340px]'>Login</button>
            </div>
            <div className='text-center'>
              <p className='mt-5 text-sm text-cyan-600'>Don't have an account? <Link to={'/register'} className='text-cyan-300 font-semibold'>Register</Link></p>
            </div>
          </div>
          {/* left Section */}
          <div className=' rounded-tr-3xl rounded-br-3xl h-[490px] w-[300px] flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-cyan-300 shadow-cyan-200'>
            <div>
              <h2 className='text-2xl text-white font-semibold'>Glad to see You Again!</h2>
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

export default Login;