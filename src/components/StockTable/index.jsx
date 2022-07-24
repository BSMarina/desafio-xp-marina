import React, { useState, useEffect } from 'react';
import TableHead from '../TableHead';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { choose } from '../../redux/market';

import * as SC from './styles'

export default function StockTable() {
    const stocks = useSelector((state) => state.market.stocks);
    const userStocks = useSelector((state) => state.wallet.userStocks);
    const [toRender, setToRender] = useState({stocks: stocks})

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const handleClick = ({target}) => {
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
    }
    
    useEffect(() => {
        if (pathname === '/carteira') {
            setToRender({stocks: userStocks})
        }

        if (pathname === '/mercado') {
            setToRender({stocks: stocks})
        }
        // console.log('stocks no torender', toRender )
        // console.log('stocks', stocks )
        // console.log('user stocks', userStocks )

    }, [pathname, stocks, userStocks])

    return (
        <>
            { toRender.stocks.length === 0 
                ? <SC.PContainer><p>Você ainda não tem ações</p></SC.PContainer>
                : <SC.PContainer>
                    <SC.Table>
                        <TableHead /> 
                        { toRender.stocks.map((stock) => (
                        <tr key={ stock.symbol }>
                            <td>{stock.symbol}</td>
                            { stock.amount ? <td>{ stock.amount }</td> : null }
                            <td>{`R$ ${stock.value}`}</td>
                            <td className={ stock.variation.slice(0, 1) === '+' ?'positive' :'negative'}>{`R$ ${stock.variation}`}</td>
                            <td><button value={ stock.symbol } onClick={ handleClick }>⇄</button></td>
                        </tr>
                        ))
                        }
                    </SC.Table>
                </SC.PContainer>
            }
        </> 
    )
}