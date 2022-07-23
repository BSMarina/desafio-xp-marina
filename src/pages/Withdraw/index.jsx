import React from "react";
import AccountInfo from "../../components/AccountInfo";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Transaction from "../../components/Transaction";

export default function Withdraw() {
    return(
        <>
        <Header />
        <main>
            <AccountInfo />
            <NavBar />
            <Transaction />
        </main>
        </>
    )
};