import React, { useEffect, useState } from 'react'
import useAccounting from '../../../hooks/useAccounting'

const AccountingUsingHook = () => {
    const [balance, trHistory, vat, incomeTax, deposit, withdraw] = useAccounting();
    const [amount, setAmount] = useState();
    const [trHistoryFlag, setTrHistoryFlag] = useState(false)
    let toggleValue = true;

    useEffect(() => {
        toggleValue=trHistoryFlag? false : true;
    }, [trHistoryFlag])
    return (
        <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
            <table>
                <thead>
                    <tr>
                        <td className='p-2'>Balance:</td>
                        <td className='p-2'>Vat:</td>
                        <td className='p-2'>Income Tax:</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2 fs-4 text'>{balance}</td>
                        <td className='p-2'>{vat && vat.toFixed(2)}</td>
                        <td className='p-2'>{incomeTax && incomeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <input onChange={(e) => setAmount(e.target.value)} className='p-1' type="number" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='p-2'>
                            <button onClick={() => deposit(amount)}>הפקדה</button>
                        </td>
                        <td colSpan={2} className='p-2'>
                            <button onClick={() => withdraw(amount)}>הוצאה</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className='p-2'>
                            <button onClick={() => setTrHistoryFlag(toggleValue)}>היסטוריית פעולות</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {trHistoryFlag && <div>
                <table>
                    <tbody>
                        {trHistory.map(transaction => (
                            <tr key={transaction.balance}>
                                <td className='align-center p-2'>Action:</td>
                                <td className='align-center p-2'>{transaction.action}</td>
                                <td className='align-center p-2'>Balance:</td>
                                <td className='align-center p-2'>{transaction.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div >
    )
}

export default AccountingUsingHook
