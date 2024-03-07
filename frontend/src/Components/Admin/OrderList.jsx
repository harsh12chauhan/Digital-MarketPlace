import React from 'react'

const OrderList = () => {

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
        status:"canceled",
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
        status:"canceled",
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
        status:"canceled",
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
    <div>
        <div className='flex justify-between items-center mx-4 mt-2'>
            <div>
                <h1 className='text-xl font-bold underline underline-offset-2 mx-4' >Order List</h1>
            </div>        
      </div>
        <div className=' mb-6 mt-2 ml-4  w-[1120px] h-[490px] overflow-scroll no-scrollbar'>
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
                          <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.orderid}</td>
                          <td className='text-[12px] font-medium px-2 py-2 text-center'>{item.userid}</td>
                          <td className='text-[12px] font-medium px-4 py-2 text-center'>{item.totalproducts}</td>
                          <td className='text-[12px] font-medium px-4 py-2 text-center'>₹{item.totalprice}</td>
                          <td className='text-[12px] font-medium px-4 py-2 text-center '>
                            <button className={`${item.status === "delivered"? "bg-green-500":"bg-red-500"} text-white rounded-xl px-6 py-2`} >{item.status}</button>
                          </td>
                          <td className='text-[12px] font-medium px-4 py-2 text-center'>{item.date}</td>
                          <td className='text-[12px] font-medium px-4 py-2 text-center'><button className='bg-green-900 text-white rounded-full px-6 py-2'>Bill</button></td>                        
                  </tr>                                       
                  ))  
              }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default OrderList