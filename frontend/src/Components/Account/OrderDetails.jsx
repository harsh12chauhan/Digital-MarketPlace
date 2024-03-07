import React from 'react'
import SmallCard from './SmallCard';


const OrderDetails = () => {

  const orderData = [
    {
      orderid:1,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:2,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:3,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:4,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:5,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:6,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:7,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:8,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:9,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    },
    {
      orderid:10,
      totalproducts:6,
      totalprice:1000,
      status:"delivered",
      date:"24-04-2020 11:39:04"
    }
  ];
  
  return (
    <div className=''>
      <div className='my-4'>
          <h1 className='text-3xl lg:text-4xl text-blue-950 font-bold lg:ml-8'>Order Details</h1>
      </div>
      <div className='my-6 hidden lg:list-item w-full h-[435px] overflow-scroll no-scrollbar'>
        <table className='table-auto'>
          <thead className='sticky top-0 bg-white shadow-md shadow-green-50'>
            <tr>
              <th className='text-md font-bold px-16 py-4'>Order ID</th>
              <th className='text-md font-bold px-1 py-4'>Total Products</th>
              <th className='text-md font-bold px-16 py-4'>Total Price</th>
              <th className='text-md font-bold px-16 py-4'>Status</th>
              <th className='text-md font-bold px-32  py-4'>Date</th>
              <th className='text-md font-bold px-16 py-4'>Print Bill</th>
            </tr>
          </thead>
          <tbody>
          {
            orderData.map((item)=>(
              <tr className='border-b' key={item.orderid}>
                <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.orderid}</td>
                <td className='text-[15px] font-medium px-4 py-2 text-center'>{item.totalproducts}</td>
                <td className='text-[15px] font-medium px-4 py-2 text-center'>₹{item.totalprice}</td>
                <td className='text-[15px] font-medium px-4 py-2 text-center'>{item.status}</td>
                <td className='text-[15px] font-medium px-4 py-2 text-center'>{item.date}</td>
                <td className='text-[15px] font-medium px-4 py-2 text-center'><button className='bg-blue-900 text-white rounded-full px-6 py-2'>Bill</button></td>
              </tr>                                        
            ))
          }
          </tbody>
        </table>
      </div>
      <div className='flex flex-wrap w-full h-[502px] lg:h-[502px] overflow-scroll no-scrollbar lg:hidden'>
        {
          orderData.map((item)=>(
            <SmallCard key={item.orderid} data={item}/>
          ))
         } 
      </div>
    </div>
  );
};

export default OrderDetails;