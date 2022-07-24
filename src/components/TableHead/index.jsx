import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TableHead() {
    const { pathname } = useLocation();
    return (
        <li>
            <div>Ação</div>
            { pathname === '/carteira' ? <div>Quantidade</div> : null}
            <div>Valor</div>
            <div>Variação</div>
            <div>Negociar</div>
        </li>
    )
}