import React, { useContext } from "react";
import SmallCard from "./HomeComponents/SmallCard";
import Savings from "./HomeComponents/Savings";
import BudgetUtilization from "./HomeComponents/BudgetUtilization";
import TransactionsGrid from "./common/TransactionsGrid";
import { CurrencyContext } from "./App";
import { displayCurrencyValue } from "./data/currency-converter";

const Home = () => {
  const [savings, ] = React.useState(104500);
  const currencyContext = useContext(CurrencyContext);
  const currency = React.useMemo(() => currencyContext!.currency, [currencyContext]);

  return (
    <>
      <h1 className="app-page-title">Overview</h1>
      <div className="app-page-grid">
        <div className="app-span-2">
          <SmallCard
            topic={"Earnings"}
            amount={displayCurrencyValue(50000, currency)}
            percentage={200}
          />
        </div>
        <div className="app-span-2">
          <SmallCard
            topic={"Spendings"}
            amount={displayCurrencyValue(50000, currency)}
            percentage={100}
          />
        </div>
        <div className="app-span-2">
          <SmallCard
            topic={"Investments"}
            amount={displayCurrencyValue(35000, currency)}
            percentage={-80}
          />
        </div>
        <div className="app-span-3">
          <Savings savings={savings} currency={currency} />
        </div>
        <div className="app-span-3">
          <BudgetUtilization currency={currency} />
        </div>
        <div className="app-span-all">
          <TransactionsGrid currency={currency} />
        </div>
      </div>
    </>
  );
};

export default Home;
