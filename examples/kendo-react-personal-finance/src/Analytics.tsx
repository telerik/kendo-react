import React from "react";
import TransactionsGrid from "./common/TransactionsGrid";
import CashFlowChart from "./AnalyticsComponents/Cashflow";
import { CurrencyContext } from "./App";
import { useContext } from "react";


const Analytics: React.FC = (props) => {
  const currencyContext = useContext(CurrencyContext);
  const currency = currencyContext!.currency;

  return (
    <>
      <h1 className="k-px-md-15 k-p-5 k-m-0">Analytics</h1>
      <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-6 k-gap-5 k-p-md-5 k-px-md-15 k-p-5">
        <div className="k-col-span-6">
          <CashFlowChart />
        </div>
        <div className="k-col-span-6">
          <TransactionsGrid currency={currency} />
        </div>
      </div>
    </>
  );
};

export default Analytics;

