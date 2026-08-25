import React, { useContext } from 'react';
import PersonalTransactions from './TransactionsComponents/PersonalTransactions';
import TransactionDetails from './TransactionsComponents/TransactionDetails';
import { gridTransactions } from "./data/transactions";
import { CurrencyContext } from './App';

export default function Transactions(){
  const [selectedRow, setSelectedRow] = React.useState<any>(gridTransactions[0]);
  const currencyContext = useContext(CurrencyContext);
  const currency = currencyContext!.currency;
  
  const onSelectionChange = (event: any) => {
      setSelectedRow(event);
    }
    return (
 <>
      <h1 className="app-page-title">Transactions</h1>
            <div className="app-page-grid--twelve">
              <div className="app-column app-span-8">
              <PersonalTransactions onSelectionChange={onSelectionChange} currency={currency}/>              </div>
              <div className="app-column app-span-4">
              <TransactionDetails selectedRow={selectedRow} />
              </div>
            </div>
    </>
    );
};