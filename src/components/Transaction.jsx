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
        const validateInputValue = () => {
          const conditions = [ inputValue.amount > 0];
    
          setButton({ isDisable: conditions.includes(false) });
        };
        validateInputValue();
      }, [inputValue]);

    // const handleChange = ({ target }) => {
    //     setInputValue({ amount: target.value });
    //     };

    const handleChange = ({ value }) => {
        setInputValue((prevState) => ({
          ...prevState,
          amount: value,
        }));
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
            <input type='number' placeholder='Insira o valor' onChange={ ({ target }) => handleChange(target) } value={ inputValue.amount }/>
            <button onClick={ handleClick } disabled={ button.isDisable }>Confirmar</button>
        </div>
    )
}