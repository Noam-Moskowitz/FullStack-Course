import { useEffect, useState } from "react";

const useAccounting = (initalValue = 0) => {
    const [balance, setBalance] = useState(initalValue);
    const [trHistory, setTrHistory] = useState([]);
    const [vat, setVat] = useState();
    const [incomeTax, setIncomeTax] = useState();
    const [totalDeposits, setTotalDeposits] = useState(0);
    const [totalWithdrawls, setTotalWithdrawls] = useState(0);


    const deposit = (amount) => {
        setBalance(Number(balance) + Number(amount));
        setTrHistory([...trHistory, { action: `+${amount}`, balance: balance }])
        setTotalDeposits(Number(totalDeposits) + Number(amount));
    }

    const withdraw = (amount) => {
        setBalance(balance - amount);
        setTrHistory([...trHistory, { action: `-${amount}`, balance: balance }])
        setTotalWithdrawls(Number(totalWithdrawls) + Number(amount));
    }

    const calculateIncomeTax = () => {
        let taxBracket = .5;
        if (totalDeposits <= 7010) {
            taxBracket = .1;
        } else if (totalDeposits <= 10060) {
            taxBracket = .14;
        } else if (totalDeposits <= 16150) {
            taxBracket = .20;
        } else if (totalDeposits <= 22440) {
            taxBracket = .31;
        } else if (totalDeposits <= 46690) {
            taxBracket = .35;
        } else if (totalDeposits <= 60130) {
            taxBracket = .47;
        }
        setIncomeTax(Number(totalDeposits - totalWithdrawls) * taxBracket)
    }


    useEffect(() => {
        setVat((totalDeposits - totalWithdrawls) * .17);
        calculateIncomeTax()
    }, [totalDeposits, totalWithdrawls])


    return [balance, trHistory, vat, incomeTax, deposit, withdraw]
}

export default useAccounting;