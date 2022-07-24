import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as SC from './styles';
import moneyIcon from '../../assets/images/moneyIcon.svg';

export default function AccountInfo() {
  const amountInfo = useSelector((state) => state.wallet.userAccount);
  const [accountInfo, setAccountInfo] = useState({ amount: 0 });

  useEffect(() => {
    setAccountInfo({ amount: amountInfo });
  }, [amountInfo]);

  return (
    <SC.Container>
      <SC.AccountContent>
        <img src={moneyIcon} alt="Ícone de dinheiro" />
        {accountInfo.amount === 0
          ? <h3>Adicione fundos para começar a investir</h3>
          : (
            <SC.ValueContent>
              <h3>Seu saldo</h3>
              <p>{`R$ ${accountInfo.amount}`}</p>
            </SC.ValueContent>
          )}
      </SC.AccountContent>
    </SC.Container>
  );
}
