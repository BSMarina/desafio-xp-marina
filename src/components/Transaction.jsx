import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buy } from '../redux/wallet';
import { get } from '../redux/market';

export default function Transaction() {
    const [inputValue, setInputValue] = useState({ amount: 0});
    const [button, setButton] = useState({ isDisable: true });

    const { pathname } = useLocation();

    const stocks = useSelector((state) => state.market.stocks);
    const chosenStock = useSelector((state) => state.market.chosenStock);
    const userStocks = useSelector((state) => state.wallet.userStocks);
    const dispatch = useDispatch();

    useEffect(() => {
        const verifySell = () => {
            if (userStocks.length > 0) {
                const verifyStock = userStocks.find((stock) => chosenStock.simbol === stock.simbol);
                if (pathname === '/venda' && +(verifyStock.amount) < +(inputValue.amount)) {
                    return false
                }
            }
            return true
        }
        const validateInputValue = () => {
            const conditions = [ inputValue.amount > 0, verifySell()];
    
            setButton({ isDisable: conditions.includes(false) });
        };
        validateInputValue();
    }, [inputValue, chosenStock.simbol, pathname, userStocks]);

    const handleChange = ({ value }) => {
        setInputValue((prevState) => ({
            ...prevState,
            amount: value,
        }));
    };

    const buyStock = () => {
        const formatNewStock = {amount: +(inputValue.amount), ...chosenStock};
        console.log('format new stock', formatNewStock)

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

    const sellStock = async () => {
            const verifyStock = userStocks.find((stock) => chosenStock.simbol === stock.simbol);
            const formatStock = {amount: +(verifyStock.amount) - +(inputValue.amount), ...chosenStock};
            const newUserStocks = userStocks.filter((stock) => verifyStock.simbol !== stock.simbol);
            
            if (+(verifyStock.amount) > +(inputValue.amount)) {
                newUserStocks.push(formatStock);
                dispatch(buy(newUserStocks));
            } else if (+(verifyStock.amount) === +(inputValue.amount)) {
                const newStocks = [...stocks];
                await newStocks.push(chosenStock)
                console.log('newStocks', newStocks)
                dispatch(get(newStocks));
                dispatch(buy(newUserStocks));
            }
    }

        


    const handleClick = () => {
        if (pathname === '/compra') {
            buyStock();
            const filteredStocks = stocks.filter((stock) => stock.simbol !== chosenStock.simbol);
            dispatch(get(filteredStocks));
        }

        if (pathname === '/venda') {
            sellStock();
            const filteredStocks = stocks.filter((stock) => stock.simbol !== chosenStock.simbol);
            dispatch(get(filteredStocks));
        }
    }
    return (
        <div>
            <input 
                type='number'
                placeholder='Insira o valor'
                onChange={ ({ target }) => handleChange(target) }
                value={ inputValue.amount }
            />        
            <button onClick={ handleClick } disabled={ button.isDisable }>Confirmar</button>
        </div>
    )
}