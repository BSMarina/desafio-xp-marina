import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Market from './pages/Market';
import NotFound from './pages/NotFound';
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw';
import Buy from './pages/Buy';
import Sell from './pages/Sell';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
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
      <GlobalStyles />
    </ThemeProvider>

    );
}

export default App;
