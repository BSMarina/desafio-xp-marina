import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Market from './pages/Market';
import NotFound from './pages/NotFound';
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw';
import Buy from './pages/Buy';
import Sell from './pages/Sell';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login/> }/>
      <Route exact path='/carteira' element={ <Wallet/> }/>
      <Route exact path='/mercado' element={ <Market/> }/>
      <Route exact path='/deposito' element={ <Deposit/> }/>
      <Route exact path='/saque' element={ <Withdraw/> }/>
      <Route exact path='/compra' element={ <Buy/> }/>
      <Route exact path='/venda' element={ <Sell/> }/>
      <Route path='*' element={ <NotFound/> }/>
    </Routes>
    );
}

export default App;
