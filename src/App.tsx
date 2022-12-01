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
import CustomerProfileScreen from './screens/ProfilePage';
import AuctionScreen from './screens/auctionpage';
import FavouriteScreen from './screens/favouritepage';
import IndividualCollectionScreen from './screens/individualcollectionpage';
import ProductScreen from './screens/productscreen';
import MyBidsScreen from './screens/mybidspage';
import CheckoutScreen from './screens/Checkoutpage';
import CartScreen from './screens/CartScreen';
import SearchScreen from './screens/searchScreen';
import PaymentScreen from './screens/Paymentpage';
import ProfileScreen from './screens/ProfilePage';

function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageScreen />} />
          <Route path="/home" element={<HomePageScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
          <Route path="/individualcollection" element={<IndividualCollectionScreen />} />
          <Route path='/auction' element={<AuctionScreen />} />
          <Route path='/favourite' element={<FavouriteScreen />} />
          <Route path='/mybids' element={<MyBidsScreen />} />
          <Route path='/product' element={<ProductScreen />} />
          <Route path='/checkout' element={<CheckoutScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/search' element={<SearchScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />

          <Route path="*" element={"404 NOT FOUND"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
