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

function App() {
  return (
    <div className="App">
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <AdminScreen/> */}
      {/* <AdminCustomersScreen/> */}
      <CustomerProfileScreen/>
      {/* <HomePageScreen /> */}
      {/* <AboutScreen /> */}
      {/* <CollectionScreen /> */}
    </div>
  );
}

export default App;
