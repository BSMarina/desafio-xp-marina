import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import TableHead from '../TableHead';
import { choose } from '../../redux/market';

import * as SC from './styles';

export default function StockTable() {
  const stocks = useSelector((state) => state.market.stocks);
  const userStocks = useSelector((state) => state.wallet.userStocks);
  const [toRender, setToRender] = useState({ stocks });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClick = ({ target }) => {
    if (pathname === '/carteira') {
      const chosenUserStock = userStocks.find((stock) => stock.symbol === target.value);
      dispatch(choose(chosenUserStock));
      navigate('/venda');
    }

    if (pathname === '/mercado') {
      const chosenStock = stocks.find((stock) => stock.symbol === target.value);
      dispatch(choose(chosenStock));
      navigate('/compra');
    }
  };

  useEffect(() => {
    if (pathname === '/carteira') {
      setToRender({ stocks: userStocks });
    }

    if (pathname === '/mercado') {
      setToRender({ stocks });
    }
  }, [pathname, stocks, userStocks]);

  return (
    <SC.PContainer>
      { toRender.stocks.length === 0
        ? <p>Você ainda não tem ações</p>
        : (
          <SC.Table>
            <TableHead />
            { toRender.stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                { stock.amount ? <td>{ stock.amount }</td> : null }
                <td>{`R$ ${stock.value}`}</td>
                <td className={stock.variation.slice(0, 1) === '+' ? 'positive' : 'negative'}>{`R$ ${stock.variation}`}</td>
                <td><button type="button" value={stock.symbol} onClick={handleClick}>⇄</button></td>
              </tr>
            ))}
          </SC.Table>
        )}
    </SC.PContainer>
  );
}
