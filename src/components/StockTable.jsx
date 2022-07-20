import React, { useEffect } from 'react';
import TableHead from './TableHead';
import { useSelector } from 'react-redux';

export default function StockTable() {
    // const getStocks = async () => {
    //     const stocksInfoJSON = await fetch('../dataMock.json');
    //     const stocksInfo = await stocksInfoJSON.json();
    //     return stocksInfo;
    // }
    
    const stocks = useSelector((state) => state.market.stocks);
    useEffect(() => {
        console.log('stocks no stocktabel', stocks)
    }, [stocks])

    return (
        <table>
            <TableHead />
            { stocks.map((stock) => (
                <tr key={ stock.simbol }>
                    <td>{stock.simbol}</td>
                    {/* <td>{ valor vindo de info do usuário }}</td> */}
                    <td>{`R$ ${stock.value}`}</td>
                    <td>{`R$ ${stock.variation}`}</td>
                </tr>
        ))}
        </table> 
    )
}
