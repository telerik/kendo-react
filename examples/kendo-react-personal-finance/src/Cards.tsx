import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Card } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { arrowLeftIcon, checkCircleIcon, lockIcon, walletIcon } from "@progress/kendo-svg-icons";
import { CurrencyContext } from "./App";
import FinanceState from "./common/FinanceState";
import { cardActivity } from "./data/finance-data";
import { displayCurrencySign } from "./data/currency-converter";

export default function Cards() {
  const navigate = useNavigate();
  const currency = useContext(CurrencyContext)?.currency ?? "USD";

  return (
    <>
      <div className="app-page-heading app-page-heading--wide">
        <div>
          <Button fillMode="flat" svgIcon={arrowLeftIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}accounts/checking`)}>Back to account</Button>
          <h1 className="app-page-title">Card management</h1>
          <p>Review card status, limits, and representative recent activity.</p>
        </div>
      </div>
      <main className="app-detail-page">
        <section className="card-management-grid">
          <Card className="app-card card-visual">
            <div className="card-visual__top"><span>Everyday card</span><SvgIcon icon={walletIcon} size="large" /></div>
            <p className="card-visual__number">•••• 9012</p>
            <div className="card-visual__bottom"><span>Maria Johnson</span><span>04/28</span></div>
          </Card>
          <Card className="app-card app-card--section">
            <div className="section-heading">
              <div><p className="eyebrow">Card status</p><h2>Ready to use</h2></div>
              <span className="finance-status finance-status--on-track"><SvgIcon icon={checkCircleIcon} />Active</span>
            </div>
            <dl className="metadata-list">
              <div><dt>Card limit</dt><dd>{displayCurrencySign(5000, currency)} / month</dd></div>
              <div><dt>Available this month</dt><dd>{displayCurrencySign(3875.4, currency)}</dd></div>
              <div><dt>Linked account</dt><dd>Everyday Checking</dd></div>
            </dl>
          </Card>
        </section>
        <section className="card-management-grid">
          <Card className="app-card app-card--section">
            <div className="section-heading"><div><p className="eyebrow">Security</p><h2>Secure actions</h2></div><SvgIcon icon={lockIcon} /></div>
            <p className="helper-text">These controls are intentionally disabled because this showcase has no secure service.</p>
            <div className="action-list">
              <Button disabled fillMode="outline">Freeze card</Button>
              <Button disabled fillMode="outline">Request replacement</Button>
              <Button disabled fillMode="outline">Reveal card number</Button>
            </div>
          </Card>
          <Card className="app-card app-card--section">
            <div className="section-heading"><div><p className="eyebrow">Activity</p><h2>Recent card purchases</h2></div></div>
            {cardActivity.length === 0 ? <FinanceState kind="empty" title="No card activity" message="Purchases will appear here when activity is available." /> : (
              <ul className="activity-list">
                {cardActivity.map((activity) => <li key={`${activity.merchant}-${activity.date}`}><div><strong>{activity.merchant}</strong><span>{activity.date}</span></div><strong className="negative">{displayCurrencySign(activity.amount, currency)}</strong></li>)}
              </ul>
            )}
          </Card>
        </section>
        <p className="demo-note">Representative card details only. Secure actions are not connected to a real card.</p>
      </main>
    </>
  );
}
