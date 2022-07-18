import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Wallet() {
    const arrMyActions = [];
    return(
        <>
        <Header />
        <NavBar />
        <main>
            <ul>
                { arrMyActions.map((action) => <li>{ action }</li>) }
            </ul>
        </main>
        </>
    )
};