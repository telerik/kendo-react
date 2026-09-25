import { createContext, JSX } from "react";
import "@progress/kendo-theme-meridian/dist/all.css";
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
import AccountDetail from "./AccountDetail";
import Budgets from "./Budgets";
import Statements from "./Statements";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import {
  Help,
  Login,
  Notifications,
  NotFound,
  Profile,
} from "./UniversalPages";

interface CurrencyContextType {
  currency: string;
}
export interface RouteSelection {
  itemIndex: number;
  itemTarget: { props: { route: string } };
}
export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

function App(): JSX.Element {
  const [goToRoute, setGoToRoute] = React.useState<RouteSelection | undefined>();
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
            <Route path={`${import.meta.env.BASE_URL}accounts/checking`} element={<AccountDetail />} />
            <Route path={`${import.meta.env.BASE_URL}budgets`} element={<Budgets />} />
            <Route path={`${import.meta.env.BASE_URL}statements`} element={<Statements />} />
            <Route path={`${import.meta.env.BASE_URL}cards`} element={<Cards />} />
            <Route path={`${import.meta.env.BASE_URL}settings`} element={<Settings />} />
            <Route path={`${import.meta.env.BASE_URL}profile`} element={<Profile />} />
            <Route path={`${import.meta.env.BASE_URL}notifications`} element={<Notifications />} />
            <Route path={`${import.meta.env.BASE_URL}help`} element={<Help />} />
            <Route path={`${import.meta.env.BASE_URL}login`} element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrencyContext.Provider>
      </Navigation>
      <Footer />
    </>
  );
}

export default App;
