import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buy } from '../redux/wallet';
import { get } from '../redux/market';

export default function Transaction() {
    const { pathname } = useLocation();
    const stocks = useSelector((state) => state.market.stocks);
    const chosenStock = useSelector((state) => state.market.chosenStock);
    const userStocks = useSelector((state) => state.wallet.userStocks);
    const dispatch = useDispatch();
 
    const [inputValue, setInputValue] = useState({ amount: 0});

    const handleChange = ({ target }) => {
        setInputValue({ amount: target.value });
        };

    const buyStock = () => {
        const formatNewStock = {amount: +(inputValue.amount), ...chosenStock};

        if (userStocks.length !== 0) { 
            const verifyStock = userStocks.find((stock) => chosenStock.simbol === stock.simbol);
            console.log('verify stock', verifyStock)

            if (!verifyStock) {
                console.log('ações do user no estado', Array.isArray(userStocks)) 
                const newUserStocks = userStocks.concat([formatNewStock]);
                dispatch(buy(newUserStocks));
            } else {
                const formatStock = {amount: +(verifyStock.amount) + +(inputValue.amount), ...chosenStock};
                const newUserStocks = userStocks.filter((stock) => verifyStock.simbol !== stock.simbol);
                newUserStocks.push(formatStock);
                dispatch(buy(newUserStocks));}
        }

        if (userStocks.length === 0) {
            dispatch(buy([formatNewStock]));
        }
        
    }

    const handleClick = () => {
        if (pathname === '/compra') {
            buyStock();
            const filteredStocks = stocks.filter((stock) => stock.simbol !== chosenStock.simbol);
            dispatch(get(filteredStocks));
        }
    }
    return (
        <div>
            <input type='number' placeholder='Insira o valor' onChange={ handleChange }/>
            <button onClick={ handleClick }>Confirmar</button>
        </div>
    )
}