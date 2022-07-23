import React, { useState, useEffect } from 'react';
import TableHead from '../TableHead';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { chose } from '../../redux/market';


export default function StockTable() {
    const stocks = useSelector((state) => state.market.stocks);
    const userStocks = useSelector((state) => state.wallet.userStocks);
    const [toRender, setToRender] = useState({stocks: stocks})

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const handleClick = ({target}) => {
        if (pathname === '/carteira') {
            const chosenUserStock = userStocks.find((stock) => stock.simbol === target.value);
            dispatch(chose(chosenUserStock));
            navigate('/venda');
        }

        if (pathname === '/mercado') {
            const chosenStock = stocks.find((stock) => stock.simbol === target.value);
            dispatch(chose(chosenStock));
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
                ? <p>Você ainda não tem ações</p>
                : <table>
                    <TableHead /> 
                    { toRender.stocks.map((stock) => (
                        <tr key={ stock.simbol }>
                            <td>{stock.simbol}</td>
                            { stock.amount ? <td>{ stock.amount }</td> : null }
                            <td>{`R$ ${stock.value}`}</td>
                            <td>{`R$ ${stock.variation}`}</td>
                            <td><button value={ stock.simbol } onClick={ handleClick }>Negociar</button></td>
                        </tr>
                    ))
                    }
                </table>
            }
        </> 
    )
}
