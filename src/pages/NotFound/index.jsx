import React from 'react';
import Header from '../../components/Header';
import Wrapper from '../../components/shared/Wrapper';
import NavBar from '../../components/NavBar';
import Container from './styles';

export default function Wallet() {
  return (
    <>
      <Header />
      <Wrapper>
        <main>
          <NavBar />
          <Container>
            <p>Página não encontrada</p>
          </Container>
        </main>
      </Wrapper>
    </>
  );
}
