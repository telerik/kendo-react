import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Card } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { arrowLeftIcon, trendUpIcon, warningCircleIcon } from "@progress/kendo-svg-icons";
import { CurrencyContext } from "./App";
import FinanceState from "./common/FinanceState";
import { budgetCategories } from "./data/finance-data";
import { displayCurrencySign } from "./data/currency-converter";

export default function Budgets() {
  const navigate = useNavigate();
  const currency = useContext(CurrencyContext)?.currency ?? "USD";
  const totalLimit = budgetCategories.reduce((sum, item) => sum + item.limit, 0);
  const totalActual = budgetCategories.reduce((sum, item) => sum + item.actual, 0);
  const overallPercent = Math.round((totalActual / totalLimit) * 100);

  return (
    <>
      <div className="app-page-heading app-page-heading--wide">
        <div>
          <Button fillMode="flat" svgIcon={arrowLeftIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}`)}>Back to overview</Button>
          <h1 className="app-page-title">Budgets</h1>
          <p>Track monthly limits, actual spending, and trends before they become surprises.</p>
        </div>
        <Button fillMode="outline" onClick={() => navigate(`${import.meta.env.BASE_URL}accounts/checking`)}>View checking account</Button>
      </div>
      <main className="app-detail-page">
        <section className="budget-overview" aria-label="Budget summary">
          <div>
            <p className="eyebrow">August 2026 plan</p>
            <h2>{displayCurrencySign(totalActual, currency)} <span>of {displayCurrencySign(totalLimit, currency)}</span></h2>
            <p>{overallPercent}% of your planned spending used</p>
          </div>
          <div className="budget-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={overallPercent} aria-label="Overall budget used">
            <span style={{ width: `${Math.min(overallPercent, 100)}%` }} />
          </div>
          <div className="budget-overview__trend"><SvgIcon icon={trendUpIcon} /><span>6% lower than July</span></div>
        </section>

        <section className="budget-grid" aria-label="Budget categories">
          {budgetCategories.map((budget) => {
            const percent = Math.round((budget.actual / budget.limit) * 100);
            const overBudget = budget.actual > budget.limit;
            return (
              <Card className="app-card app-card--section budget-card" key={budget.name}>
                <div className="section-heading">
                  <div><h2>{budget.name}</h2><p>{budget.detail}</p></div>
                  <span className={`finance-status finance-status--${overBudget ? "over" : "on-track"}`}>
                    <SvgIcon icon={overBudget ? warningCircleIcon : trendUpIcon} />{budget.trend}
                  </span>
                </div>
                <div className="budget-values">
                  <strong>{displayCurrencySign(budget.actual, currency)}</strong>
                  <span>of {displayCurrencySign(budget.limit, currency)}</span>
                </div>
                <div className={`budget-progress budget-progress--${overBudget ? "over" : "on-track"}`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.min(percent, 100)} aria-label={`${budget.name} budget used`}>
                  <span style={{ width: `${Math.min(percent, 100)}%` }} />
                </div>
                <p className="budget-card__caption">{overBudget ? `${displayCurrencySign(budget.actual - budget.limit, currency)} over limit` : `${displayCurrencySign(budget.limit - budget.actual, currency)} remaining`}</p>
              </Card>
            );
          })}
        </section>
        {budgetCategories.length === 0 && (
          <Card className="app-card"><FinanceState kind="empty" title="No budgets yet" message="Your monthly budget categories will appear here when they are available." /></Card>
        )}
        <p className="demo-note">Sample data only. Budget values are illustrative and do not change your account.</p>
      </main>
    </>
  );
}
