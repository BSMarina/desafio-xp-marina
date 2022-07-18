import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Market() {
    const arrMarketActions = [];
    return(
        <>
        <Header />
        <NavBar />
        <main>
            <ul>
                { arrMarketActions.map((action) => <li>{ action }</li>) }
            </ul>
        </main>
        </>
    )
};