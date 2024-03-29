import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from './styles';

export default function NavBar() {
  const [navType, setNavType] = useState({
    typeA: '/carteira',
    nameA: 'Minha Carteira',
    typeB: '/mercado',
    nameB: 'Mercado',
  });
  const { pathname } = useLocation();

  useEffect(() => {
    const navBarAccount = ['/deposito', '/saque'];
    const navBarWallet = ['/carteira', '/mercado'];
    const navBarMarket = ['/compra', '/venda'];

    if (navBarAccount.includes(pathname)) {
      setNavType({
        typeA: '/deposito',
        nameA: 'Depositar',
        typeB: '/saque',
        nameB: 'Sacar',
      });
    }

    if (navBarWallet.includes(pathname)) {
      setNavType({
        typeA: '/carteira',
        nameA: 'Minha Carteira',
        typeB: '/mercado',
        nameB: 'Mercado',
      });
    }

    if (navBarMarket.includes(pathname)) {
      setNavType({
        typeA: '/compra',
        nameA: 'Comprar',
        typeB: '/venda',
        nameB: 'Vender',
      });
    }
  }, [pathname]);

  const navigate = useNavigate();
  return (
    <Container>
      <li>
        <button type="button" className={pathname === navType.typeA ? 'active' : 'inactive '} onClick={() => navigate(navType.typeA)}>
          { navType.nameA }
        </button>
      </li>
      <li>
        <button type="button" className={pathname === navType.typeB ? 'active' : 'inactive '} onClick={() => navigate(navType.typeB)}>
          { navType.nameB }
        </button>
      </li>
    </Container>
  );
}
