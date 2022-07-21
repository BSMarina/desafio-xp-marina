import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import StockTable from "../components/StockTable";
import stockData from '../dataMock';
import { get } from '../redux/market';

export default function Wallet() {
    const dispatch = useDispatch()
    const userStocks = useSelector((state) => state.wallet.userStocks);

    useEffect(() => {
        if (userStocks.length === 0) {
        dispatch(get(stockData)) }
    })

    return(
        <>
        <Header />
        <main>
            <NavBar />
            <StockTable/>
        </main>
        </>
    )
};