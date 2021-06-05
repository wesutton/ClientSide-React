import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'
import Header from './components/Header';
import Auth from './auth/Auth'
import SplashPage from './apps/SplashPage';
import Footer from './components/Footer';


function App() {
  const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return(sessionToken === localStorage.getItem('token') ? <SplashPage token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
  
}

  return (
    <div >
      <Header clickLogout={clearToken}/>
      {protectedViews()}
      <Footer />
    </div>
  );
}

export default App;
