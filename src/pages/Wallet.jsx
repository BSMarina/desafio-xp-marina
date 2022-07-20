import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import StockTable from "../components/StockTable";
import stockData from '../dataMock';
import { get } from '../redux/market';

export default function Wallet() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get(stockData)) 
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