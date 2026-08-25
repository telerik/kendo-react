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
      <h1 className="app-page-title">Analytics</h1>
      <div className="app-page-grid">
        <div className="app-span-all">
          <CashFlowChart />
        </div>
        <div className="app-span-all">
          <TransactionsGrid currency={currency} />
        </div>
      </div>
    </>
  );
};

export default Analytics;
