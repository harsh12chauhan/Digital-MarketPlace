import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/user/Home';
import Cart from './Pages/user/Cart';
import Account from './Pages/user/Account';
import User from './Layouts/User';
import Admin from './Layouts/Admin';
import NotFound from './Pages/NotFound';
import UserList from './Components/Admin/UserList';
import ProductList from './Components/Admin/ProductList';
import OrderList from './Components/Admin/OrderList';
import Banners from './Components/Admin/Banners';
import UserDetails from './Components/Account/UserDetails';
import ChangePassword from './Components/Account/ChangePassword';
import LandingPage from './Components/Admin/LandingPage';
import OrderDetails from './Components/Account/OrderDetails';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/home' element={<User/>}>
            <Route index  element={<Home/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='account' element={<Account/>}> 
              <Route index element={<UserDetails/>}/>
              <Route path='changepassword' element={<ChangePassword/>}/>
              <Route path='orderdetails' element={<OrderDetails/>}/>
            </Route>
          </Route>

          <Route path='/dashboard' element={<Admin/>}>
              <Route index element={<LandingPage/>}/>
              <Route path='userlist' element={<UserList/>}/>
              <Route path='productlist' element={<ProductList/>}/>
              <Route path='orderList' element={<OrderList/>}/>
              <Route path='banners' element={<Banners/>}/>
              <Route path='userdetails' element={<UserDetails/>}/>
              <Route path='changepassword' element={<ChangePassword/>}/>
          </Route>
          
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;