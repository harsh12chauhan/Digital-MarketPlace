import React from 'react'

const CartCard = (props) => {
    const cartData = props.data;

  return (
    <div className='border-2 border-gray-100  rounded-lg m-2 p-2 w-full flex justify-center items-center'>
        <div className='flex justify-start items-center'>      
            <img src={cartData.pimage} alt="" className='w-[100px]'/>                                                               
        </div>
        <div>
            <div className='flex flex-col justify-start'>
                <h2 className='text-lg font-semibold'>{cartData.pname}</h2>
                <h2 className='my-1'>₹{cartData.pprice}</h2>                
            </div>                                             
            <div className='flex justify-center items-center'>
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-gray-200 px-2 mr-2">
                    <button className="m-1 text-lg transition-all duration-300 hover:scale-105">-</button>
                    <p className="m-1 text-md">1</p>
                    <button className="m-1 text-lg transition-all duration-300 hover:scale-105">+</button>
                </div>  
                <div className='my-1'>
                    <button className='bg-red-600 text-sm text-white rounded-full px-2 py-1 hover:scale-105 duration-500'>Remove</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard;

{/* <table>
<thead>
<tr>
<h2 className='w-full text-nowrap '>Product ID</h2>
</tr>
<tr>
<h2 className='w-full text-nowrap '>Image</h2>
    </tr>
    <tr>
        <h2 className='w-full text-nowrap '>Product</h2>
    </tr>
    <tr>
        <h2 className='w-full text-nowrap '>Price</h2>
    </tr>
    <tr>
    <h2 className='w-full text-nowrap '>Quantity</h2>
    </tr>
</thead>
</table>
</div>
<div className='mx-2'>
<table>
<tbody>
        <tr>
        <td className='text-nowrap'>{cartData.productid}</td>
        </tr>
        <tr>
        <td className='text-nowrap'>{cartData.pimg}</td>
        </tr>
        <tr>
            <td className='text-nowrap'>₹{cartData.pname}</td>
        </tr>
        <tr>
        <td className='text-nowrap'>{cartData.pprice}</td>
        </tr>
        <tr>
        <td className='text-nowrap'>{cartData.pquantity}</td>
        </tr>
        </tbody>
    </table> */}