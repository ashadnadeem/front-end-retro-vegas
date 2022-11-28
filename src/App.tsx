import React from 'react';
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
import ProductDesc from './components/ProductDescription';
import ProductSection from './components/ProductSection/productsection';

function App() {
  return (
    <div className="App">
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <AdminScreen/> */}
      {/* <AdminCustomersScreen/> */}
      {/* <CustomerProfileScreen/> */}
      {/* <HomePageScreen /> */}
      {/* <AboutScreen /> */}
      {/* <CollectionScreen /> */}
      {/* <AuctionScreen /> */}
      {/* <FavouriteScreen /> */}
      <IndividualCollectionScreen />
    </div>
  );
}

export default App;
