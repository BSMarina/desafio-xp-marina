import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TableHead() {
  const { pathname } = useLocation();
  return (
    <tr>
      <th>Ação</th>
      { pathname === '/carteira' ? <th>Qtd.</th> : null}
      <th>Valor</th>
      <th>Alta/Baixa</th>
      <th> </th>
    </tr>
  );
}
