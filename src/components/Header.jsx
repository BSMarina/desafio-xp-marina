import React from 'react';
import { useLocation } from 'react-router-dom';
import iconMenu from '../images/iconMenu.svg'

export default function Header() {
  const { pathname } = useLocation();
  const handleMenu = () => {
      console.log('clicou no menu!')
  }

  const handleTransaction = () => {
      console.log('clicou no botão de transação!')
  }

  const userEmail = 'fulano@email.com' // pegar do store do redux, coletado no login

  return (
      <header
    //    className={ styles.Header }
      >
        <button onClick={ handleMenu }>
          <img src={ iconMenu } alt="Ícone de menu" />
        </button>
        <h2>{ userEmail }</h2> 
        <button onClick={ handleTransaction }>
          { pathname === '/carteira' ? 'Seu saldo' : 'Investir' }
        </button>
      </header>
  );
}
