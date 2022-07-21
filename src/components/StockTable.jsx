import React from 'react';
import TableHead from './TableHead';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { chose } from '../redux/market';


export default function StockTable() {
    // const getStocks = async () => {
    //     const stocksInfoJSON = await fetch('../dataMock.json');
    //     const stocksInfo = await stocksInfoJSON.json();
    //     return stocksInfo;
    // }
    const stocks = useSelector((state) => state.market.stocks);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = ({target}) => {
        const chosenStock = stocks.find((stock) => stock.simbol === target.value);
        dispatch(chose(chosenStock));
        navigate('/compra');
    }
    
    // useEffect(() => {
    //     console.log('stocks no stocktabel', stocks)
    // }, [stocks])

    return (
        <table>
            <TableHead />
            { stocks.map((stock) => (
                    <tr key={ stock.simbol }>
                        <td>{stock.simbol}</td>
                        {/* <td>{ valor vindo de info do usuário }}</td> */}
                        <td>{`R$ ${stock.value}`}</td>
                        <td>{`R$ ${stock.variation}`}</td>
                        <td><button value={ stock.simbol } onClick={ handleClick }>Negociar</button></td>
                    </tr>
        ))}
        </table> 
    )
}
