import React from "react";
import AccountInfo from "../../components/AccountInfo";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/shared/Wrapper";
import Transaction from "../../components/Transaction";

export default function Deposit() {
    return(
        <>
        <Header />
        <Wrapper>
        <main>
            <AccountInfo />
            <NavBar />
            <Transaction />
        </main>
        </Wrapper>
        </>
    )
};