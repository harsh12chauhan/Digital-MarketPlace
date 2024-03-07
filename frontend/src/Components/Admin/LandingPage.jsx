import React, { useEffect, useState } from 'react';
import CardDashboard from '../../Components/Admin/CardDashboard';
import axios from 'axios';
import { FaRegUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";


const LandingPage = () => {

    const [pCnt,setPCnt] = useState(0);
    const [uCnt,setUCnt] = useState(0);
    const [oCnt,setOCnt] = useState(89);

    const productCount = async ()=>{
        await axios.get('http://localhost:3000/countproducts')
        .then(res=>setPCnt(res.data))
        .catch(err=>console.log(err))
    }

    const userCount = async ()=>{
        await axios.get('http://localhost:3000/countusers')
        .then(res=>setUCnt(res.data))
        .catch(err=>console.log(err))
    }

    // const orderCount = async ()=>{
    //     await axios.get('http://localhost:3000/countorder')
    //     .then(res=>setOCnt(res.data))
    //     .catch(err=>console.log(err))
    // }

    useEffect(()=>{
        productCount();
        userCount();
        // orderCount();
    },[]);

    const orderData = [
        {
            orderid:1,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:2,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:3,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:4,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:5,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:6,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:7,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:8,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:9,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        },
        {
            orderid:10,
            userid:3,
            totalproducts:6,
            totalprice:1000,
            status:"delivered",
            date:"24-04-2020 11:39:04"
        }
    ];


  return (
        <div className='dashboard' >
            <div className='mx-4 my-6 flex'>
                <CardDashboard heading="Profit" plcss="bg-red-100" pltext="text-red-500" nums="$75000.90" icon={<FaMoneyBillTrendUp/>} percent={"⬇ -30%"} fromwhen={"Since last month"}/>
                <CardDashboard heading="Orders" plcss="bg-green-100" pltext="text-green-500" nums={oCnt} icon={<FaListCheck/>} percent={"⬆ 13%"} fromwhen={"Since last Yesterday"}/>
                <CardDashboard heading="Total Products" plcss="bg-red-100" pltext="text-red-500" nums={pCnt} icon={<MdProductionQuantityLimits/>} percent={"⬇ 8%"} fromwhen={"Since last Week"}/>
                <CardDashboard heading="Total User's"plcss="bg-green-100" pltext="text-green-500"  nums={uCnt} icon={<FaRegUser/>} percent={"⬆ 15%"} fromwhen={"Since last month"}/>
            </div>
            {/* bottom section  */}
            <div>
                <div className=' mx-3 w-[1120px] h-[350px] overflow-scroll no-scrollbar shadow-[0px_0px_10px_5px] shadow-gray-200 rounded-xl'>
                    <table className='table-auto'>
                        <thead className='sticky top-0  bg-white border-b-2 border-gray-400'>
                            <tr>
                                <th className='text-sm font-bold text-gray-400 px-12 py-4'>Order ID</th>
                                <th className='text-sm font-bold text-gray-400 px-12 py-4'>User ID</th>
                                <th className='text-sm font-bold text-gray-400 px-12 py-4'>Total Products</th>
                                <th className='text-sm font-bold text-gray-400 px-12 py-4'>Total Price</th>
                                <th className='text-sm font-bold text-gray-400 px-12 py-4'>Status</th>
                                <th className='text-sm font-bold text-gray-400 px-22 py-4'>Date</th>
                                <th className='text-sm font-bold text-gray-400 px-12 py-4'>Print Bill</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            orderData.map((item,index)=>(
                                <tr className='border-b'key={index}>                    
                                    <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.orderid}</td>
                                    <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.userid}</td>
                                    <td className='text-[15px] font-medium px-4 py-2 text-center'>{item.totalproducts}</td>
                                    <td className='text-[15px] font-medium px-4 py-2 text-center'>₹{item.totalprice}</td>
                                    <td className='text-[15px] font-medium px-4 py-2 text-center'>{item.status}</td>
                                    <td className='text-[15px] font-medium px-4 py-2 text-center'>{item.date}</td>
                                    <td className='text-[15px] font-medium px-4 py-2 text-center'><button className='bg-green-900 text-white rounded-full px-6 py-2'>Bill</button></td>                        
                            </tr>                                       
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default LandingPage