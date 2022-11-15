import React from 'react';
import './App.css';
import AdminScreen from './screens/Admin';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';

function App() {
  return (
    <div className="App">
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      <AdminScreen/>
    </div>
  );
}

export default App;
