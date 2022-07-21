import React from "react";
import StockInfo from "../components/StockInfo";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Transaction from "../components/Transaction";

export default function Sell() {
    return(
        <>
        <Header />
        <main>
            <StockInfo />
            <NavBar />
            <Transaction />
        </main>
        </>
    )
};