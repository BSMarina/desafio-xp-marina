import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Market from './pages/Market';
import NotFound from './pages/NotFound';
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login/> }/>
      <Route path='/carteira' element={ <Wallet/> }/>
      <Route path='/mercado' element={ <Market/> }/>
      <Route path='/deposito' element={ <Deposit/> }/>
      <Route path='/saque' element={ <Withdraw/> }/>
      <Route path='*' element={ <NotFound /> }/>
    </Routes>
    );
}

export default App;
