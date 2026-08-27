import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Card } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { arrowLeftIcon, calendarDateIcon, checkCircleIcon, downloadIcon, walletIcon } from "@progress/kendo-svg-icons";
import { CurrencyContext } from "./App";
import FinanceState from "./common/FinanceState";
import { accountActivity, checkingAccount } from "./data/finance-data";
import { displayCurrencySign } from "./data/currency-converter";

export default function AccountDetail() {
  const navigate = useNavigate();
  const currency = useContext(CurrencyContext)?.currency ?? "USD";
  const [query, setQuery] = React.useState("");
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const normalizedQuery = query.trim().toLowerCase();
  const visibleActivity = accountActivity.filter((activity) =>
    `${activity.description} ${activity.category}`.toLowerCase().includes(normalizedQuery)
  );

  const refreshActivity = () => {
    setIsRefreshing(true);
    window.setTimeout(() => setIsRefreshing(false), 350);
  };

  return (
    <>
      <div className="app-page-heading app-page-heading--wide">
        <div>
          <Button fillMode="flat" svgIcon={arrowLeftIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}`)}>
            Back to overview
          </Button>
          <h1 className="app-page-title">Everyday Checking</h1>
          <p>Account details and recent activity for {checkingAccount.number}.</p>
        </div>
        <div className="page-heading-actions">
          <Button fillMode="outline" svgIcon={downloadIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}statements`)}>
            View statements
          </Button>
          <Button themeColor="primary" svgIcon={walletIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}cards`)}>
            Manage cards
          </Button>
        </div>
      </div>
      <main className="app-detail-page">
        <section className="account-summary" aria-label="Account balance">
          <div className="account-summary__icon"><SvgIcon icon={walletIcon} size="xlarge" /></div>
          <div>
            <p className="eyebrow">Available balance</p>
            <p className="account-summary__balance">{displayCurrencySign(checkingAccount.available, currency)}</p>
            <p className="account-summary__note">Current balance {displayCurrencySign(checkingAccount.balance, currency)}</p>
          </div>
          <div className="account-summary__status">
            <SvgIcon icon={checkCircleIcon} />
            <span>Good standing</span>
          </div>
        </section>

        <section className="detail-grid" aria-label="Account information">
          <Card className="app-card app-card--section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Account information</p>
                <h2>About this account</h2>
              </div>
            </div>
            <dl className="metadata-list">
              <div><dt>Account type</dt><dd>{checkingAccount.type}</dd></div>
              <div><dt>Account number</dt><dd>{checkingAccount.number}</dd></div>
              <div><dt>Opened</dt><dd>{checkingAccount.opened}</dd></div>
              <div><dt>Interest rate</dt><dd>{checkingAccount.interest}</dd></div>
            </dl>
          </Card>
          <Card className="app-card app-card--section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Account tools</p>
                <h2>Contextual actions</h2>
              </div>
            </div>
            <div className="action-list">
              <Button fillMode="outline" svgIcon={calendarDateIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}statements`)}>
                Review monthly statement
              </Button>
              <Button fillMode="outline" svgIcon={walletIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}budgets`)}>
                Compare with budgets
              </Button>
            </div>
            <p className="helper-text">These demo actions open local sample surfaces. No account changes are made.</p>
          </Card>
        </section>

        <Card className="app-card app-card--section">
          <div className="section-heading section-heading--responsive">
            <div>
              <p className="eyebrow">Activity</p>
              <h2>Recent account activity</h2>
            </div>
            <div className="activity-tools">
              <label className="visually-hidden" htmlFor="activity-search">Filter activity</label>
              <input id="activity-search" className="finance-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter activity" />
              <Button fillMode="flat" onClick={refreshActivity}>Refresh</Button>
            </div>
          </div>
          {isRefreshing ? (
            <FinanceState kind="loading" title="Refreshing activity" message="Updating the local account activity sample." />
          ) : visibleActivity.length === 0 ? (
            <FinanceState kind="no-results" title="No activity found" message="Try a different merchant or category." actionLabel="Clear filter" onAction={() => setQuery("")} />
          ) : (
            <div className="responsive-table">
              <table className="finance-table">
                <caption className="visually-hidden">Recent activity for Everyday Checking</caption>
                <thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Category</th><th scope="col">Status</th><th scope="col" className="numeric">Amount</th></tr></thead>
                <tbody>
                  {visibleActivity.map((activity) => (
                    <tr key={activity.id}>
                      <td>{activity.date}</td>
                      <th scope="row">{activity.description}</th>
                      <td>{activity.category}</td>
                      <td><span className={`finance-status finance-status--${activity.status.toLowerCase()}`}>{activity.status}</span></td>
                      <td className={`numeric ${activity.amount < 0 ? "negative" : "positive"}`}>{displayCurrencySign(activity.amount, currency)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </main>
    </>
  );
}
