import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ImCross } from "react-icons/im";
import Context from '../../Context/Context';

const ProductList = () => {

  const InitialProductDetails = {
    "productid": "",
    "pname": "",
    "pdescription": "",
    "pprice": "",
    "pquantity": "",
    "pimage": ""
  };

  const{productData,getAllProducts} = useContext(Context);

  const [createProduct,setCreateProduct] = useState(InitialProductDetails);
  const [handleRender,setHandleRender] = useState("empty");
 
  //fetching all the data or products from context api.

  const {productid,pname,pdescription,pprice,pquantity,pimage} = createProduct;
  const createproductRequest=async()=>{
    await axios.post("http://localhost:3000/createProduct",createProduct)
    .then(res=>res)
    .catch(err=>console.log(err))
    setHandleRender("create");
  }
  
  const editproductRequest=async()=>{
    await axios.put(`http://localhost:3000/updateproduct/${productid}`,createProduct)
    .then(res=>res)
    .catch(err=>console.log(err))
    setHandleRender("edit");
  }
  
  const handleDeleteProduct = async(productid) => {
    await axios.delete(`http://localhost:3000/deleteporduct/${productid}`)
    .then(res=>res)
    .catch(err=>console.log(err))
    setHandleRender("Delete");
  }

  useEffect(()=>{
    getAllProducts()
  },[handleRender]);

  const handleChange = (e) =>{
    setCreateProduct({...createProduct,[e.target.name]:e.target.value})
  }

  const handleSave = (value = "create") => {
    if(value === "edit"){
      editproductRequest()
    }else{
      createproductRequest();
    }
    handleClose()
  }
  
  const handleCreateProduct = () => {
    const Card = document.querySelector(".Card");
    Card.classList.remove("hidden")
  }

  const handleEditProduct = ({productid,pname,pdescription,pprice,pquantity,pimage}) => {
    setCreateProduct({
      "productid":productid,
      "pname":pname ,
      "pdescription":pdescription ,
      "pprice": pprice,
      "pquantity":pquantity ,
      "pimage":pimage
    })
    const Card = document.querySelector(".Card");
    Card.classList.remove("hidden")
  }

  const handleClose = () => {
    setCreateProduct(InitialProductDetails)
    const Card = document.querySelector(".Card");
    Card.classList.add("hidden")
  }

  
  return (
    <div>
      <div className='flex justify-between items-center mx-4 mt-2'>
        <div>
          <h1 className='text-xl font-bold underline underline-offset-2 mx-4' >Product's List</h1>
        </div>
        <div> 
          <button className='bg-green-950 text-white font-semibold px-3 py-1 rounded-full' onClick={handleCreateProduct}>Create Product</button>
        </div>
      </div>
      <div className='mb-6 mt-2 ml-4  w-[1100px] h-[490px] overflow-scroll no-scrollbar shadow-[0px_0px_20px_1px] shadow-gray-200 rounded-xl'>
        <table className='table-auto'>
          <thead className='sticky top-0 bg-white shadow-md shadow-green-50'>
            <tr>
              <th className='text-sm font-bold px-5 py-4'>Product ID</th>
              <th className='text-sm font-bold px-5 py-4'>Image</th>
              <th className='text-sm font-bold px-5 py-4'>Name</th>
              <th className='text-sm font-bold px-5 py-4'>Description</th>
              <th className='text-sm font-bold px-5 py-4'>Price</th>
              <th className='text-sm font-bold px-5 py-4'>Quantity</th>
              <th className='text-sm font-bold px-5 py-4'>Date</th>
              <th className='text-sm font-bold px-5 py-4'>Edit</th>
              <th className='text-sm font-bold px-5 py-4'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              productData.map((item) => (
                <tr className='border-b' key={item.productid}>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.productid}</td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'><img className='w-[50px]' src={item.pimage} alt="img"/></td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.pname}</td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.pdescription}</td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.pprice}</td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.pquantity}</td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center text-nowrap'>{item.date}</td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'>
                    <button className='bg-blue-600 text-white font-semibold px-3 py-1 rounded-full' onClick={()=>{handleEditProduct(item)}}>Edit</button>
                  </td>
                  <td className='text-[15px] font-medium px-2 py-2 text-center'>
                    <button className='bg-red-600 text-white font-semibold px-3 py-1 rounded-full' onClick={()=>{handleDeleteProduct(item.productid)}}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
       {/* Create and edit section  */}
      <div className='Card hidden absolute top-14 left-72 bg-gray-400 p-4 rounded-lg transition'>
        <button onClick={handleClose}>
          <ImCross className='absolute top-8 right-10' />
        </button>
        <div className='my-8'>
          <div className='flex flex-col m-4'>
            <label htmlFor="pname" className='mx-2 mb-1 text-sm'>Product Name</label>
            <input type="text" name='pname' placeholder='Product Name' className='bg-gray-100 outline-none p-3 rounded-xl w-[650px]' value={pname} onChange={e=>{handleChange(e)}} maxLength={20} />
          </div>
          <div className='flex flex-col m-4'>
            <label htmlFor="pdescription" className='mx-2 mb-1 text-sm'>Description</label>
            <input type="text" name='pdescription' placeholder='Description' className='bg-gray-100 outline-none p-3 rounded-xl  w-[650px]' value={pdescription} onChange={e=>{handleChange(e)}} maxLength={80} />
          </div>
          <div className='flex '>
            <div className='flex flex-col m-4'>
              <label htmlFor="pprice" className='mx-2 mb-1 text-sm'>Price</label>
              <input type="number" name='pprice' placeholder='Price' className='bg-gray-100 outline-none p-3 rounded-xl  w-[307px]' value={pprice} onChange={e=>{handleChange(e)}} />
            </div>
            <div className='flex flex-col m-4'>
              <label htmlFor="pquantity" className='mx-2 mb-1 text-sm'>Quantity</label>
              <input type="number" name='pquantity' placeholder='Quantity' className='bg-gray-100 outline-none p-3 rounded-xl  w-[307px]' value={pquantity} onChange={e=>{handleChange(e)}} />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col m-4'>
              <label htmlFor="pimage" className='mx-2 mb-1 text-sm'>Product Image</label>
              <input type="text" name='pimage' placeholder='Product Image' className='bg-gray-100 outline-none p-3 rounded-xl  w-[280px]' value={pimage} onChange={e=>{handleChange(e)}} />
            </div>
            <div className='mt-10 mr-8'>
              {
                productid !== ""?
                <button className='bg-green-800 py-2 px-8 m-1 rounded-full text-lg font-semibold text-white hover:scale-105 transition outline-none' onClick={()=>{handleSave("edit")}}>Update</button>
                :<button className='bg-green-800 py-2 px-8 m-1 rounded-full text-lg font-semibold text-white hover:scale-105 transition outline-none' onClick={handleSave}>Create</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
// const productData=[
//   {
//     productid:1,
//     pimage:"hello image ",
//     pname:"Dimond Ring",
//     pprice:6000.00,
//     pdescription:"24k platinum with k2r5 Dimond.",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:2,
//     pimage:"hello image ",
//     pname:"dslr camera",
//     pprice:500.00,
//     pdescription:"Wiht telephoto lens.",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:3,
//     pimage:"hello image ",
//     pname:"Rolex 124",
//     pprice:10990.20,
//     pdescription:"Gold plated with 650 dimonds.",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:4,
//     pimage:"hello image ",
//     pname:"Macbook pro 13",
//     pprice:1099.00,
//     pdescription:"8 core CPU , 256GB ,8GB",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:5,
//     pimage:"hello image ",
//     pname:"JBL 159",
//     pprice:492.00,
//     pdescription:"4mm drivers and noice cancelation",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:6,
//     pimage:"hello image ",
//     pname:"AIR jorder-1",
//     pprice:90.00,
//     pdescription:"Signed by Michal Jordern",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:7,
//     pimage:"hello image ",
//     pname:"Dimond Ring",
//     pprice:6000.00,
//     pdescription:"24k platinum with k2r5 Dimond.",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:8,
//     pimage:"hello image ",
//     pname:"JBL 159",
//     pprice:6000.00,
//     pdescription:"24k platinum with k2r5 Dimond.",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:9,
//     pimage:"hello image ",
//     pname:"DSLR camera",
//     pprice:6000.00,
//     pdescription:"Wiht telephoto lens.",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:10,
//     pimage:"hello image ",
//     pname:"Dimond Ring",
//     pprice:6000.00,
//     pdescription:"24k platinum with k2r5 Dimond.",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:11,
//     pimage:"hello image ",
//     pname:"Macbook pro 13",
//     pprice:1099.00,
//     pdescription:"8 core CPU , 256GB ,8GB",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
//   {
//     productid:12,
//     pimage:"hello image ",
//     pname:"JBL 159",
//     pprice:492.00,
//     pdescription:"4mm drivers and noice cancelation",
//     pquantity:234,
//     date:"20-04-8492 04:23:29 pm"
//   },
// ];