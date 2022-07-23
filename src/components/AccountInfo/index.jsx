import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function AccountInfo() {
    const amountInfo = useSelector((state) => state.wallet.userAccount)
    const [accountInfo, setAccountInfo] = useState({amount: 0})

    useEffect(() => {
        setAccountInfo({amount: amountInfo})
    }, [amountInfo])


    return (
        <div>
            <h3>Seu saldo:</h3>
            <p>{`R$ ${accountInfo.amount}`}</p>
        </div>
    )
}