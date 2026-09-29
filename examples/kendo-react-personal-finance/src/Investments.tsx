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
      <h1 className="app-page-title">Investments</h1>
      <div className="app-page-grid--nine">
        <div className="app-column app-span-4">
            <TotalInvestments />
        </div>
        <div className="app-column app-span-5">
            <TopMovers currency={currency} />
        </div>
        <div className="app-span-all">
            <StockChart />
        </div>
      </div>
    </>
    );
};

export default Investments;