import { createContext, JSX } from "react";
import "./assets/App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";

import Home from "./Home";
import Investments from "./Investments";
import Transactions from "./Transactions";
import Settings from "./Settings";
import React from "react";
import Analytics from "./Analytics";
import AIAssistant from "./AIAssistant";
import Footer from "./Footer";
import Header from "./Header";

interface CurrencyContextType {
  currency: string;
}
export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

function App(): JSX.Element {
  const [goToRoute, setGoToRoute] = React.useState<object | undefined>();
  const [currency, setCurrency] = React.useState<string>("USD");

  const currencyContextValue = React.useMemo(() => ({ currency }), [currency]);

  return (
    <>
      <Navigation goToRoute={goToRoute}>
        <Header
          onNavigateTo={(e) => setGoToRoute(e)}
          onCurrencyChange={(e) => setCurrency(e.value)}
        />

        <CurrencyContext.Provider value={currencyContextValue}>
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Home />} />
            <Route path={`${import.meta.env.BASE_URL}transactions`} element={<Transactions />} />
            <Route path={`${import.meta.env.BASE_URL}investments`} element={<Investments />} />
            <Route path={`${import.meta.env.BASE_URL}analytics`} element={<Analytics />} />
            <Route path={`${import.meta.env.BASE_URL}ai-assistant`} element={<AIAssistant />} />
            <Route path={`${import.meta.env.BASE_URL}settings`} element={<Settings />} />
          </Routes>
        </CurrencyContext.Provider>
      </Navigation>
      <Footer />
    </>
  );
}

export default App;
