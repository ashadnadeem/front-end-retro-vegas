import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AdminCustomersScreen from './screens/Admin/CustomersPage';
import AdminScreen from './screens/Admin/MainPage';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import HomePageScreen from './screens/homepage';
import AboutScreen from './screens/aboutpage';
import CollectionScreen from './screens/collectionpage';
import CustomerProfileScreen from './screens/Customer/ProfilePage';
import AuctionScreen from './screens/auctionpage';
import FavouriteScreen from './screens/favouritepage';
import IndividualCollectionScreen from './screens/individualcollectionpage';
import ProductScreen from './screens/productscreen';
import MyBidsScreen from './screens/mybidspage';
import CartScreen from './screens/CartScreen';
import CartProduct from './screens/CartProduct';

function App() {
  const user = true;
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageScreen/>}/>
          <Route path="/home" element={<HomePageScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="/about" element={<AboutScreen/>}/>
          <Route path="/collection" element={<CollectionScreen />}/>
          <Route path="/individualcollection" element={<IndividualCollectionScreen/>}/>
          {/* <Route path='/auction' element={<AuctionScreen/>}/>
          <Route path='/favourite' element={<FavouriteScreen/>}/>
          <Route path='/mybids' element={<MyBidsScreen/>}/> */}
          <Route path='/product' element={<ProductScreen />}/>
          <Route path='/cart' element={<CartScreen />}/>

          <Route path ="*" element={"404 NOT FOUND"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
