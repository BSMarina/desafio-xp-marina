import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TableHead() {
    const { pathname } = useLocation();
    return (
        <tr>
            <th>Ação</th>
            { pathname === '/carteira' ? <th>Quantidade</th> : null}
            <th>Valor</th>
            <th>Variação</th>
        </tr>
    )
}