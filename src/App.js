import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Market from './pages/Market';
import NotFound from './pages/NotFound';
import Account from './pages/Account'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login/> }/>
      <Route path='/carteira' element={ <Wallet/> }/>
      <Route path='/mercado' element={ <Market/> }/>
      <Route path='/conta' element={ <Account/> }/>
      <Route path='*' element={ <NotFound /> }/>
    </Routes>
    );
}

export default App;
