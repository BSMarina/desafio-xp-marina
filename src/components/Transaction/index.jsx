import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buySell, deposit, withdraw } from '../../redux/wallet';
import { get } from '../../redux/market';

export default function Transaction() {
    const [inputValue, setInputValue] = useState({ amount: 0});
    const [button, setButton] = useState({ isDisable: true, btnText: 'Confirmar' });
    // const [btnText, setBtnText] = useState({ btnText: 'Confirmar'})

    const { pathname } = useLocation();

    const stocks = useSelector((state) => state.market.stocks);
    const chosenStock = useSelector((state) => state.market.chosenStock);
    const userStocks = useSelector((state) => state.wallet.userStocks);
    const userAccount = useSelector((state) => state.wallet.userAccount);
    const dispatch = useDispatch();

    useEffect(() => {
        const verifyBuy = () => {
            if (pathname === '/compra' && (+(chosenStock.value) * +(inputValue.amount)) > userAccount ) {
                return false
            }
            return true
        }

        const verifySell = () => {
            if (userStocks.length > 0) {
                const verifyStock = userStocks.find((stock) => chosenStock.simbol === stock.simbol);
                if (pathname === '/venda' && +(verifyStock.amount) < +(inputValue.amount)) {
                    return false
                }
            }
            return true
        }

        const verifyAccount = () => {
            if (pathname === '/saque' && +(inputValue.amount) > userAccount ) {
                return false
            }
            return true
        }

        const validateInputValue = async () => {
            const conditions = [ inputValue.amount > 0, verifyBuy(), verifySell(), verifyAccount()];
    
            setButton((prevState) => ({
                ...prevState, 
                isDisable: conditions.includes(false),
            }));
            
            if (button.isDisable) {
                setButton((prevState) => ({
                    ...prevState, 
                    btnText: 'Quantia incompatível',
                })) 
            } else {
                setButton((prevState) => ({
                    ...prevState, 
                    btnText: 'Confirmar',
                })) 
            }
        };
        validateInputValue();
    }, [inputValue, chosenStock.simbol, chosenStock.value, pathname, userStocks, userAccount, button.isDisable]);

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
                dispatch(buySell(newUserStocks));
            } else {
                const formatStock = {amount: +(verifyStock.amount) + +(inputValue.amount), ...chosenStock};
                const newUserStocks = userStocks.filter((stock) => verifyStock.simbol !== stock.simbol);
                newUserStocks.push(formatStock);
                dispatch(buySell(newUserStocks));}
        }

        if (userStocks.length === 0) {
            dispatch(buySell([formatNewStock]));
        }
        
        dispatch(withdraw(+(chosenStock.value)))
    }

    const sellStock = async () => {
            const verifyStock = userStocks.find((stock) => chosenStock.simbol === stock.simbol);
            const formatStock = {amount: +(verifyStock.amount) - +(inputValue.amount), ...chosenStock};
            const newUserStocks = userStocks.filter((stock) => verifyStock.simbol !== stock.simbol);
            
            if (+(verifyStock.amount) > +(inputValue.amount)) {
                newUserStocks.push(formatStock);
                dispatch(buySell(newUserStocks));
            } else if (+(verifyStock.amount) === +(inputValue.amount)) {
                const newStocks = [...stocks];
                await newStocks.push(chosenStock)
                console.log('newStocks', newStocks)
                dispatch(get(newStocks));
                dispatch(buySell(newUserStocks));
            }
            dispatch(deposit(+(chosenStock.value) * +(inputValue.amount)))
    }

    const depositFunc = () => {
        dispatch(deposit(+(inputValue.amount)))
    }  
    
    const withdrawFunc = () => {
        dispatch(withdraw(+(inputValue.amount)))
    }  


    const handleClick = (e) => {
        e.preventDefault()
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

        if (pathname === '/deposito') {
            depositFunc();
        }

        if (pathname === '/saque') {
            withdrawFunc();
        }
        setInputValue({ amount: 0});
    }

    return (
        <form>
            <input 
                type='number'
                placeholder='Insira o valor'
                onChange={ ({ target }) => handleChange(target) }
                value={ inputValue.amount }
            />        
            <button onClick={ handleClick } disabled={ button.isDisable }>{ button.btnText }</button>
        </form>
    )
}