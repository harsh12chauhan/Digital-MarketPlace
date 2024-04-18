import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCard  from '../../Components/User/Cart/CartCard';
import Context from '../../Context/Context';
const Cart = () => {
  const navigate = useNavigate();
  var totalAmount = 0;
  var gst = 10;


  const {cart,setCart} = useContext(Context);

  const handleAddProduct = ()=>{
    navigate('/home');
  }
  const handleContinuePayment =()=>{
    navigate('payment');
  }

  const handleQtyChange = (e,productid)=>{
      let quantity = parseInt(e.target.value);
      quantity = Math.max(1,quantity);
      setCart(prev =>prev.map(product=>{
        if(productid === product.productid){
          console.log(quantity);
          return {...product,quantity}
        }else{
          return product;
        }
      }));
  }

  const handleRemove =(productid)=>{
    setCart(prev =>prev.filter(product=>product.productid!== productid));
  }
  
  return (
      <div className='lg:flex justify-between items-center'>
        {/* left side */}
        <div>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-3xl lg:text-3xl text-blue-950 font-bold lg:ml-16'>Cart</h1>
            </div>
            <div>
              <button className='bg-blue-950 text-white rounded-full px-6 py-2 text-[11px] font-medium lg:mr-[20px] hover:scale-105 duration-500' onClick={handleAddProduct}>Add Product</button>
            </div>
          </div>

          <div className=' hidden lg:list-item ml-4 mt-2 w-[950px] h-[450px] overflow-scroll no-scrollbar'>
            <table className='table-auto'>
              <thead className='sticky top-0 bg-white shadow-md shadow-green-50'>
                <tr>
                  <th className='text-md font-bold px-1  py-4'>Image</th>
                  <th className='text-md font-bold px-12 py-4'>Product</th>
                  <th className='text-md font-bold px-12 py-4'>Description</th>
                  <th className='text-md font-bold px-12 py-4'>Price</th>
                  <th className='text-md font-bold px-12 py-4'>Quantity</th>
                  <th className='text-md font-bold px-12 py-4'>Remove</th>
                </tr>
              </thead>
              <tbody>
              {
                cart.map((item)=>(
                  <tr className='border-b' key={item.productid}>
                    <td className='px-4 py-2 '><img  className='w-[60px]' src={item.pimage} alt="" /></td>
                    <td className='text-[15px] font-medium px-4 py-2 text-center'>{item.pname}</td>
                    <td className='text-[15px] font-medium px-2 py-2 text-center'>{item.pdescription}</td>
                    <td className='text-[15px] font-medium px-4 py-2 text-center'>₹{item.pprice} <span className='hidden'>{totalAmount += Number(item.pprice)}</span></td>
                    <td className='text-[15px] font-medium px-4 py-2 text-center'><input onChange={(e)=>handleQtyChange(e,item.productid)} className='bg-gray-300 outline-none rounded-lg w-12 p-2' type="number"  name='quantity' value={item.quantity}/></td>
                    <td className='text-[12px] font-medium px-4 py-2 text-center'><button onClick={()=>handleRemove(item.productid)} className='bg-red-600 text-white rounded-full px-6 py-2 hover:scale-105 duration-500'>Remove</button></td>
                  </tr> 
                ))                
              }
              </tbody>
            </table>
          </div> 
        </div>

        <div className='flex flex-wrap h-[502px] lg:h-[502px] overflow-scroll no-scrollbar lg:hidden'>
        {
          cart.map((item)=>(
            <CartCard key={item.productid} data={item}/>
          ))
         } 
      </div>
        {/* right side */}
        <div className='bg-blue-950 h-[547px] w-[300px] p-2 flex flex-col justify-between '>
          <div className='lg:mb-0 mb-6'>
            <h1 className='text-2xl text-white text-center font-bold underline underline-offset-4 decoration-white'>Payment Details</h1>
          </div>
          <div className='border-2 border-white rounded-lg p-3'>
            <div className='mb-4'>
              <div className='flex justify-between py-1'>
                <h2 className='text-white text-lg font-semibold'>Total Products</h2>
                <h2 className='text-white text-md font-medium'>{cart.length}</h2>
              </div>
              <div className='flex justify-between py-1'>
                <h2 className='text-white text-lg font-semibold'>Amount</h2>
                <h2 className='text-white text-md font-medium'>{totalAmount}</h2>
              </div>
              <div className='flex justify-between py-1'>
                <h3 className='text-white text-lg font-semibold'>GST(10%)</h3>
               
                <h2 className='text-white text-md font-medium'> {gst = totalAmount + 10}</h2>
              </div>
            </div>
            <div className=' border-t-2 border-white py-3'>
              <div className='flex items-center justify-between'>
                <h2 className='text-white text-lg font-semibold'>Total Amount</h2>
                <h2 className='text-white text-md font-medium'>{totalAmount + gst}</h2>
              </div>
            </div>
          </div>
          <div className='mx-auto mb-4'>
            <button className='text-white border-2 border-white rounded-full px-6 py-2 text-lg font-medium hover:scale-105  duration-500' onClick={handleContinuePayment}>Continue to Payment</button>
          </div>
        </div>
      </div>
  )
}

export default Cart;



  // const cart = [
  //   {
  //     productid:1,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:2,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:3,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:4,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:5,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:6,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:7,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:8,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:9,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   },
  //   {
  //     productid:10,
  //     pimg:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg",
  //     pname:"headphone",
  //     pprice:230,
  //     pquantity:23
  //   }
  // ];