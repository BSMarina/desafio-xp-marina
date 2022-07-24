import React from "react";
import StockInfo from "../../components/StockInfo";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Transaction from "../../components/Transaction";
import Wrapper from '../../components/shared/Wrapper'

export default function Buy() {
    return(
        <>
        <Header />
        <Wrapper>
        <main>
            <StockInfo />
            <NavBar />
            <Transaction />
        </main>
        </Wrapper>
        </>
    )
};