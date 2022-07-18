import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <ul>
            <li>
                <button onClick={ () => navigate('/carteira') }>Minha Carteira</button>
            </li>
            <li>
                <button onClick={ () => navigate('/mercado') }>Mercado</button>
            </li>
        </ul>
    );
}
