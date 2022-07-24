import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import iconArrowBack from '../../assets/images/iconArrowBack.svg';
import * as SC from './styles';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navAccount = ['/saque', '/deposito'];
  const btnInfo = navAccount.includes(pathname) ? 'Investir' : 'Seu saldo';

  const handleTransaction = ({ target }) => {
    if (target.value === 'Seu saldo') {
      navigate('/saque');
    }
    if (target.value === 'Investir') {
      navigate('/mercado');
    }
  };

  const userEmail = useSelector((state) => state.user.email);

  return (
    <SC.HeaderWrapper>
      <SC.Container>
        <SC.IconContent>
          <button type="button" onClick={() => navigate(-1)}>
            <img src={iconArrowBack} alt="Ícone de seta para voltar" />
          </button>
        </SC.IconContent>
        <SC.UserContent>
          <p>{ userEmail }</p>
          <button type="button" onClick={handleTransaction} value={btnInfo}>
            { btnInfo }
          </button>
        </SC.UserContent>
      </SC.Container>
    </SC.HeaderWrapper>
  );
}
