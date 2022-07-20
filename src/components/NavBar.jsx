import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
    
    const [navType, setNavType] = useState({ 
        typeA: '/carteira',
        nameA: 'Minha Carteira',
        typeB: '/mercado',
        nameB: 'Mercado',
    });
    const { pathname } = useLocation();

    useEffect(() => {
        const navBarAccount = ['/deposito', '/saque'];
        const navBarWallet = ['/carteira', '/mercado'];

        if (navBarAccount.includes(pathname)) {
            setNavType({
                typeA: '/deposito',
                nameA: 'Depositar',
                typeB: '/saque',
                nameB: 'Sacar',
            })
        }

        if (navBarWallet.includes(pathname)) {
            setNavType({
                typeA: '/carteira',
                nameA: 'Minha Carteira',
                typeB: '/mercado',
                nameB: 'Mercado',
            })
        }
        
    }, [pathname]); //a função chegou nessa forma final depois de sugestões dos proprios warnings do react

    const navigate = useNavigate();
    return (
        <ul>
            <li>
                <button onClick={ () => navigate(navType.typeA) }>{ navType.nameA }</button>
            </li>
            <li>
                <button onClick={ () => navigate(navType.typeB) }>{ navType.nameB }</button>
            </li>
        </ul>
    );
}
