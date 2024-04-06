import { useEffect, useState } from "react";

const useAccounting = (initalValue=0)=>{
    const [balance, setBalance]=useState(initalValue);
    const [trHistory, setTrHistory]= useState();
    const [vat,setVat]=useState();
    const [incomeTax,setIncomeTax]=useState();


    const deposit =(amount)=>{
        setBalance(balance+amount);
        setTrHistory([...trHistory,{deposit:amount, balance:balance}])
    }

    const withdraw =(amount)=>{
        setBalance(balance-amount);
        setTrHistory([...trHistory,{withdraw:`-${amount}`, balance:balance}])
    }   

    const calculateVat=(array)=>{
        const totalDeposits;
        for(obj of array){
            for(key in obj){
                if (key===`deposit`) {
                    totalDeposits+=key.value;
                }
            }
        }
        const vat = totalDeposits*0.17;
        return vat;
    }

    useEffect(()=>{
        setVat(calculateVat());
    },[trHistory])

    return [balance, trHistory, vat, deposit, withdraw]
}

export default useAccounting;