import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import background from './assets/background - login.jpg';

function App() {
  return (
    <div className="App">
      <div className='ImageBG'>
        <img src={background} alt="background" height={'100%'} width= {'100%'}/>;
      </div>
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
