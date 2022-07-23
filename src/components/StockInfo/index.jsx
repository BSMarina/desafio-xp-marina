import React from 'react';
import { useSelector } from 'react-redux';

export default function StockInfo() {
    const { simbol, value, variation, about } = useSelector((state) => state.market.chosenStock)
    return (
        <div>
            <h3>{ simbol }</h3>
            <p>{ value }</p>
            <p>{ variation }</p>
            <p>{ about }</p>
        </div>
    )
}