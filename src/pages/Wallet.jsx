import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import StockTable from "../components/StockTable";

export default function Wallet() {
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