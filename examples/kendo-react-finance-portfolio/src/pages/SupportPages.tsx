import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Input, Switch } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useNavigate } from "react-router-dom";
import styles from "./support-pages.module.scss";

const transactions = [
  { date: "Aug 25, 2026", type: "Buy", symbol: "AAPL", quantity: 12, total: "$2,748.96", status: "Filled" },
  { date: "Aug 19, 2026", type: "Dividend", symbol: "MSFT", quantity: 18, total: "$15.12", status: "Completed" },
  { date: "Aug 11, 2026", type: "Sell", symbol: "NVDA", quantity: 5, total: "$6,047.50", status: "Filled" },
  { date: "Aug 02, 2026", type: "Deposit", symbol: "Cash", quantity: 1, total: "$5,000.00", status: "Completed" }
];

const Page = ({ title, description, children }: React.PropsWithChildren<{ title: string; description: string }>) => (
  <section className={styles.page}>
    <header className={styles.pageHeader}>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
    {children}
  </section>
);

export const WatchlistPage = () => (
  <Page title="Watchlist" description="Monitor the securities you want to trade.">
    <div className={styles.toolbar}>
      <Input aria-label="Add a symbol to your watchlist" placeholder="Search symbol or company" />
      <Button themeColor="primary">Add symbol</Button>
    </div>
    <div className={styles.callout}>
      <strong>Tech stocks</strong>
      <span>Price alerts and quick trade actions are available from each security in the list.</span>
    </div>
    <Grid data={transactions.filter((item) => item.symbol !== "Cash")} sortable>
      <GridColumn field="symbol" title="Ticker" width="120px" />
      <GridColumn field="type" title="Last activity" />
      <GridColumn field="total" title="Current value" />
      <GridColumn field="status" title="Alert status" />
    </Grid>
  </Page>
);

export const MarketsPage = () => (
  <Page title="Markets" description="Explore market movements and screen opportunities.">
    <div className={styles.metrics}>
      {[
        ["S&P 500", "5,321.41", "+0.64%"],
        ["NASDAQ", "16,781.12", "+0.82%"],
        ["DOW", "39,872.99", "+0.28%"],
        ["VIX", "14.72", "-3.16%"]
      ].map(([name, value, change]) => <article className={styles.metric} key={name}><span>{name}</span><strong>{value}</strong><small>{change}</small></article>)}
    </div>
    <div className={styles.split}>
      <div className={styles.callout}>
        <h3>Stock screener</h3>
        <p>Filter by sector, valuation, dividend yield, and trading volume to identify opportunities.</p>
        <Button themeColor="primary">Open screener</Button>
      </div>
      <div className={styles.callout}>
        <h3>Market status</h3>
        <p><strong>Open</strong> - regular trading closes in 5h 34m.</p>
        <Button fillMode="outline">View market movers</Button>
      </div>
    </div>
  </Page>
);

export const TransactionsPage = () => (
  <Page title="Transaction history" description="Review your completed trades, dividends, and account activity.">
    <div className={styles.toolbar}>
      <Input aria-label="Search transactions" placeholder="Search symbol or transaction ID" />
      <DropDownList aria-label="Filter transactions by type" data={["All activity", "Trades", "Dividends", "Transfers"]} defaultValue="All activity" />
      <Button fillMode="outline">Export CSV</Button>
    </div>
    <Grid data={transactions} sortable pageable={{ pageSizes: true, buttonCount: 4 }}>
      <GridColumn field="date" title="Date" />
      <GridColumn field="type" title="Type" />
      <GridColumn field="symbol" title="Symbol" />
      <GridColumn field="quantity" title="Quantity" />
      <GridColumn field="total" title="Amount" />
      <GridColumn field="status" title="Status" />
    </Grid>
  </Page>
);

export const TradePage = () => (
  <Page title="Trade" description="Review an order before submitting it to the market.">
    <div className={styles.settings}>
      <section className={styles.callout}>
        <h3>Order entry</h3>
        <label htmlFor="trade-symbol">Symbol</label>
        <Input id="trade-symbol" defaultValue="AAPL" />
        <label htmlFor="trade-quantity">Quantity</label>
        <Input id="trade-quantity" type="number" defaultValue="10" />
        <DropDownList aria-label="Order type" data={["Market order", "Limit order", "Stop order"]} defaultValue="Market order" />
        <Button themeColor="primary">Review buy order</Button>
      </section>
      <aside className={styles.callout}>
        <h3>Order estimate</h3>
        <p>Buy 10 shares of AAPL at market price.</p>
        <strong className={styles.amount}>Estimated total: $2,290.80</strong>
        <p>Buying power after order: $8,740.20</p>
      </aside>
    </div>
  </Page>
);

export const AccountsPage = () => (
  <Page title="Accounts and funding" description="Manage balances, linked banks, and money movement.">
    <div className={styles.metrics}>
      <article className={styles.metric}><span>Portfolio value</span><strong>$58,314.72</strong><small>Individual account</small></article>
      <article className={styles.metric}><span>Cash balance</span><strong>$11,031.00</strong><small>Available to trade</small></article>
      <article className={styles.metric}><span>Buying power</span><strong>$11,031.00</strong><small>Updated today</small></article>
      <article className={styles.metric}><span>Linked accounts</span><strong>2</strong><small>Both verified</small></article>
    </div>
    <div className={styles.split}>
      <section className={styles.callout}><h3>Deposit funds</h3><p>Transfer money from a verified bank account.</p><Button themeColor="primary">Make a deposit</Button></section>
      <section className={styles.callout}><h3>Withdraw funds</h3><p>Send available cash to your linked bank.</p><Button fillMode="outline">Start a withdrawal</Button></section>
    </div>
  </Page>
);

export const BillingPage = () => (
  <Page title="Billing and plan" description="Manage your subscription and payment methods.">
    <div className={styles.split}>
      <section className={styles.callout}><h3>Investor Plus</h3><strong className={styles.amount}>$12.00 / month</strong><p>Renews September 25, 2026.</p><Button themeColor="primary">Manage plan</Button></section>
      <section className={styles.callout}><h3>Default payment method</h3><p>Visa ending in 0429, expires 09/28</p><Button fillMode="outline">Update payment method</Button></section>
    </div>
    <Grid data={[{ date: "Aug 25, 2026", description: "Investor Plus subscription", amount: "$12.00", status: "Paid" }]}>
      <GridColumn field="date" title="Date" /><GridColumn field="description" title="Description" /><GridColumn field="amount" title="Amount" /><GridColumn field="status" title="Status" />
    </Grid>
  </Page>
);

export const SettingsPage = () => {
  const [emailAlerts, setEmailAlerts] = React.useState(true);
  const [newsAlerts, setNewsAlerts] = React.useState(false);
  return (
    <Page title="Account settings" description="Manage your portfolio preferences and notification delivery.">
      <div className={styles.settings}>
        <section className={styles.callout}>
          <h3>Profile</h3>
          <label htmlFor="full-name">Full name</label>
          <Input id="full-name" defaultValue="Collin Johnson" />
          <label htmlFor="email">Email address</label>
          <Input id="email" type="email" defaultValue="collin.johnson@example.com" />
          <Button themeColor="primary">Save profile</Button>
        </section>
        <section className={styles.callout}>
          <h3>Notifications</h3>
          <label className={styles.switchRow}>Trade confirmations <Switch checked={emailAlerts} onChange={(event) => setEmailAlerts(event.value)} /></label>
          <label className={styles.switchRow}>Market news <Switch checked={newsAlerts} onChange={(event) => setNewsAlerts(event.value)} /></label>
        </section>
      </div>
    </Page>
  );
};

export const HelpPage = () => (
  <Page title="Help and support" description="Find answers about trading, accounts, and portfolio tools.">
    <div className={styles.toolbar}><Input aria-label="Search help articles" placeholder="Search help topics" /><Button themeColor="primary">Search</Button></div>
    <div className={styles.split}>
      <article className={styles.callout}><h3>Trading</h3><p>Learn about order types, market hours, and settlement.</p></article>
      <article className={styles.callout}><h3>Account security</h3><p>Review sign-in, password, and verification options.</p></article>
    </div>
    <section className={styles.callout}><h3>Contact support</h3><p>For account assistance, send us a secure message and expect a response within one business day.</p><Button fillMode="outline">Contact support</Button></section>
  </Page>
);

export const NotificationsPage = () => (
  <Page title="Notifications" description="Trade activity, price alerts, and account updates.">
    <div className={styles.toolbar}><strong>Today</strong><Button fillMode="flat">Mark all as read</Button></div>
    <div className={styles.notification}><strong>AAPL order filled</strong><span>You bought 12 shares at an estimated $229.08 per share.</span><small>10 minutes ago</small></div>
    <div className={styles.notification}><strong>MSFT price alert</strong><span>Microsoft reached your $420.00 target price.</span><small>2 hours ago</small></div>
  </Page>
);

export const LoginPage = () => {
  const navigate = useNavigate();
  return <section className={styles.auth}><div className={styles.callout}><h1>Sign in to your portfolio</h1><p>Use your account credentials to access your investments.</p><label htmlFor="login-email">Email address</label><Input id="login-email" type="email" placeholder="you@example.com" /><label htmlFor="login-password">Password</label><Input id="login-password" type="password" /><Button themeColor="primary" onClick={() => navigate("/")}>Sign in</Button><Button fillMode="flat">Forgot password?</Button></div></section>;
};

export const RegisterPage = () => {
  const navigate = useNavigate();
  return <section className={styles.auth}><div className={styles.callout}><h1>Create your portfolio account</h1><p>Set up secure access to begin monitoring the market.</p><label htmlFor="register-email">Email address</label><Input id="register-email" type="email" placeholder="you@example.com" /><label htmlFor="register-password">Password</label><Input id="register-password" type="password" /><Button themeColor="primary" onClick={() => navigate("/")}>Create account</Button></div></section>;
};

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return <section className={styles.auth}><div className={styles.callout}><h1>Page not found</h1><p>The page you requested is unavailable or may have moved.</p><Button themeColor="primary" onClick={() => navigate("/")}>Go to portfolio dashboard</Button><Button fillMode="flat" onClick={() => navigate("/help")}>Get help</Button></div></section>;
};
