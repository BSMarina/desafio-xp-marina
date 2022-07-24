import React from 'react';
import { useSelector } from 'react-redux';
import * as SC from './styles';

export default function StockInfo() {
    const { symbol, value, variation, about } = useSelector((state) => state.market.chosenStock)
    return (
        <SC.Container>
            <SC.GridContainer>
            <dt>Ação</dt>
            <dd>{ symbol }</dd>
            <dt>Valor</dt>
            <dd>{ value }</dd>
            <dt>Alta/Baixa</dt>
            <dd>{ variation }</dd>
            <dt>Sobre</dt>
            <dd>{ about }</dd>
            </SC.GridContainer>
        </SC.Container>
    )
}