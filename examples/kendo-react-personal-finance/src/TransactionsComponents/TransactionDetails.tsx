import React, { useState } from "react";
import { Card } from "@progress/kendo-react-layout";
import TransactionDetail from "./TransactionDetail";
import { userData } from "../data/personal-data";

interface TransactionsProps {
  selectedRow: {
    merchant: string;
    orderStatus: string;
    cardType: string;
    transactionHashFrom: string;
    transactionHashTo: string;
    transactionHash: string;
    dateOfPurchase: string;
  };
}

export default function Transactions(props: TransactionsProps) {

  const { merchant, orderStatus, cardType, transactionHashFrom, transactionHashTo, transactionHash, dateOfPurchase } = props.selectedRow;

  const {name, surname, email} = userData;
  return (
    <Card className="app-card">
      <div className="app-card__content app-card__content--spacious">
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="app-card__title"
        >
          Transaction Details
        </div>
        <div className="app-details">
          <TransactionDetail label={'Merchant'} value={merchant}/>
          <TransactionDetail label={'Order Status'} value={orderStatus} status={true}/>
          <TransactionDetail label={'Time'} value={dateOfPurchase}/>
          <TransactionDetail label={'Customer'} value={`${name} ${surname}`}/>
          <TransactionDetail label={'Email'} value={email}/>
          <TransactionDetail label={'Payment Method'} value={cardType}/>
          <TransactionDetail label={'Transaction Hash'} value={transactionHash}/>
          <TransactionDetail label={'From'} value={transactionHashFrom}/>
          <TransactionDetail label={'To'} value={transactionHashTo}/>
        </div>
      </div>
    </Card>
  );
}
