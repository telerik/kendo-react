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
      <h1 className="k-px-md-15 k-p-5 k-m-0">Transactions</h1>
            <div className="k-d-grid k-grid-cols-12 k-gap-4 k-gap-lg-6 k-mb-5 k-overflow-hidden k-p-md-5 k-px-md-15 k-p-5">
              <div className="k-col-span-12 k-col-span-xl-8 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
              <PersonalTransactions onSelectionChange={onSelectionChange} currency={currency}/>              </div>
              <div className="k-col-span-12 k-col-span-xl-4 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-1">
              <TransactionDetails selectedRow={selectedRow} />
              </div>
            </div>
    </>
    );
};