import React from 'react';
import TotalInvestments from './InvestmentsComponents/TotalInvestments';
import TopMovers from './InvestmentsComponents/TopMovers';
import StockChart  from './InvestmentsComponents/StockChart';
import { useContext } from 'react';
import { CurrencyContext } from './App';

const Investments: React.FC = () => {
    const currencyContext = useContext(CurrencyContext);
    const currency = currencyContext!.currency;
    
    return (
 <>
      <h1 className="k-px-md-15 k-p-5 k-m-0">Investments</h1>
      <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-9 k-gap-5 k-p-md-5 k-px-md-15 k-p-5">
        <div className="k-col-span-9 k-col-span-xl-4 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
            <TotalInvestments />
        </div>
        <div className="k-col-span-9 k-col-span-xl-5 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
            <TopMovers currency={currency} />
        </div>
        <div className="k-col-span-9 k-col-span-md-9">
            <StockChart />
        </div>
      </div>
    </>
    );
};

export default Investments;