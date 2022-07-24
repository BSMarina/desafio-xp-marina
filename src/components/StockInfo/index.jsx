import React from 'react';
import { useSelector } from 'react-redux';

export default function StockInfo() {
    const { symbol, value, variation, about } = useSelector((state) => state.market.chosenStock)
    return (
        <div>
            <h3>{ symbol }</h3>
            <p>{ value }</p>
            <p>{ variation }</p>
            <p>{ about }</p>
        </div>
    )
}