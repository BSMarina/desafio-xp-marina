import React from 'react';
import TableHead from './TableHead';

export default function StockTable() {
    const arrStocks = [];
    return (
        <table>
            <TableHead />
            { arrStocks.map((stock) => (
          // console.log("expense", expense)
                <tr key={ stock.simbol }>
                    <td>{stock.simbol}</td>
                    {/* <td>{ valor vindo de info do usuário }}</td> */}
                    <td>{stock.value}</td>
                </tr>
        ))}
        </table> 
    )
}