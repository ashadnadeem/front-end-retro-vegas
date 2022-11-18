import React from 'react';
import './App.css';
import AdminCustomersScreen from './screens/Admin/CustomersPage';
import AdminScreen from './screens/Admin/MainPage';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import HomePageScreen from './screens/homepage';

function App() {
  return (
    <div className="App">
      {/* <RegisterScreen /> */}
      <LoginScreen />
      {/* <AdminScreen/> */}
      {/* <AdminCustomersScreen/> */}
      {/* <HomePageScreen /> */}
    </div>
  );
}

export default App;
