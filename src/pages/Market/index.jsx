import React from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Wrapper from '../../components/shared/Wrapper';
import StockTable from '../../components/StockTable';

export default function Market() {
  return (
    <>
      <Header />
      <Wrapper>
        <main>
          <NavBar />
          <StockTable />
        </main>
      </Wrapper>
    </>
  );
}
