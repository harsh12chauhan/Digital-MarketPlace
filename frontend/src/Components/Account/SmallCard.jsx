import React from 'react';

const SmallCard = (props) => {
    let orderData = props.data;
  return (
    <div className=' border-2 border-gray-100 p-2 rounded-lg m-2'>
        <div className='flex justify-between items-center m-1 text-sm font-light'>
            <div>                                                          
                <table>
                   <thead>
                    <tr>
                        <th className='w-full text-nowrap '>Order ID</th>
                    </tr>
                    <tr>
                        <th className='w-full text-nowrap '>Total Products</th>
                    </tr>
                    <tr>
                        <th className='w-full text-nowrap '>Total Price</th>
                    </tr>
                    <tr>
                        <th className='w-full text-nowrap '>Status</th>
                    </tr>
                    <tr>
                        <th className='w-full text-nowrap '>Date</th>
                    </tr>
                   </thead>
                </table>
            </div>
            <div className='mx-2'>
                <table>
                    <tbody>
                        <tr>
                            <td className='text-nowrap'>{orderData.orderid}</td>
                        </tr>
                        <tr>
                            <td className='text-nowrap'>{orderData.totalproducts}</td>
                        </tr>
                        <tr>
                            <td className='text-nowrap'>₹{orderData.totalprice}</td>
                        </tr>
                        <tr>
                            <td className='text-nowrap'>{orderData.status}</td>
                        </tr>
                        <tr>
                            <td className='text-nowrap'>{orderData.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <button className='bg-green-900 font-semibold text-white px-4 py-2 rounded-full w-full'>Bill</button>
        </div>
    </div>
  )
}

export default SmallCard