import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from '../services/api'

type transactionProps = {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,

}

type transactionProviderProps = { 
    children: ReactNode;
}

export const TransactionsContext = createContext<transactionProps[]>([])

export function TransactionsProvider({ children } : transactionProviderProps) {
    const [transactions, setTransactions] = useState<transactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(res => setTransactions(res.data.transactions))
    }, [])

    return (
     <TransactionsContext.Provider value={transactions}>
         {children}
     </TransactionsContext.Provider>
     )
}
