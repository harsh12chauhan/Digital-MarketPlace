import React, { useContext, useEffect } from 'react'
import Context from '../../Context/Context'
import Card from '../../Components/User/Card';
import Hero from '../../Components/User/Hero';
import {Outlet} from 'react-router-dom';

const Home = () => {

  const{productData,getAllProducts} = useContext(Context);

  useEffect(()=>{
    getAllProducts();
  },[]);

  return (
    <div>
        <div>
          <Hero/>
          <div className=' flex flex-wrap w-full justify-center items-center '>
            {
              productData.map((item)=>(
                <Card key={item.productid} product = {item} productId={item.productid} img={item.pimage} title={item.pname} price={item.pprice} description={item.pdescription} />
                ))
              }
          </div>
          {/* <Footer/> */}
        </div>
      <Outlet/>
    </div>
  )
}

export default Home