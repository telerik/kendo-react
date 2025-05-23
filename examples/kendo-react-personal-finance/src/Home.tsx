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
      <h1 className="k-px-md-15 k-p-5 k-m-0">Overview</h1>
      <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-6 k-gap-5 k-p-md-5 k-px-md-15 k-p-5">
        <div className="k-col-span-6 k-col-span-md-2">
          <SmallCard
            topic={"Earnings"}
            amount={displayCurrencyValue(50000, currency)}
            percentage={200}
          />
        </div>
        <div className="k-col-span-6 k-col-span-md-2">
          <SmallCard
            topic={"Spendings"}
            amount={displayCurrencyValue(50000, currency)}
            percentage={100}
          />
        </div>
        <div className="k-col-span-6 k-col-span-md-2">
          <SmallCard
            topic={"Investments"}
            amount={displayCurrencyValue(35000, currency)}
            percentage={-80}
          />
        </div>
        <div className="k-col-span-6 k-col-span-md-3">
          <Savings savings={savings} currency={currency} />
        </div>
        <div className="k-col-span-6 k-col-span-md-3">
          <BudgetUtilization currency={currency} />
        </div>
        <div className="k-col-span-6">
          <TransactionsGrid currency={currency} />
        </div>
      </div>
    </>
  );
};

export default Home;
