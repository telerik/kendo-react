import * as React from 'react';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Button, ChipList } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import {
  bellIcon,
  caretAltDownIcon,
  caretAltUpIcon,
  fileTxtIcon,
  linkIcon
} from '@progress/kendo-svg-icons';
import { PortfolioChart } from './components/PortfolioChart';
import { KendoGrid } from './components/live-grid/KendoGrid';
import { DataProvider } from './components/live-grid/services';
import bitcoin from './assets/BITCOINLARGER.png';
import busd from './assets/BUSD-lg.png';
import ethereum from './assets/ETHERIUM-lg.png';
import eur from './assets/EUR-lg.png';
import inch from './assets/INCH-lg.png';
import kendoka from './assets/kendoka.png';
import ox from './assets/OX-larger.png';
import shib from './assets/SHIB-lg.png';
import tether from './assets/TETHERUS-lg.png';
import usd from './assets/USD-lg.png';
import xec from './assets/XEC-lg.png';

const holdings = [
  { symbol: 'BTC', name: 'Bitcoin', value: '$48,500.51', change: '+$9,247.91 (23.56%)', trend: 'positive', image: bitcoin },
  { symbol: 'OX', name: 'OpenExchange', value: '$4,062.86', change: '+$1,972.91 (94.40%)', trend: 'positive', image: ox },
  { symbol: 'USDT', name: 'Tether', value: '$183.81', change: '+$74.67 (68.41%)', trend: 'positive', image: tether },
  { symbol: 'SHIB', name: 'Shiba Inu', value: '$1.31', change: '-$0.06 (-4.56%)', trend: 'negative', image: shib }
];

const transactions = [
  { symbol: 'BTC', action: 'Received', amount: '+0.4558 BTC', time: 'Today, 13:15', image: bitcoin },
  { symbol: 'USDT', action: 'Purchased', amount: '-$2,396.54', time: 'Today, 12:32', image: tether },
  { symbol: 'XEC', action: 'Purchased', amount: '-$420.00', time: 'Yesterday, 16:04', image: xec },
  { symbol: 'USD', action: 'Received', amount: '+$0.4558', time: 'Yesterday, 11:10', image: usd },
  { symbol: 'BUSD', action: 'Received', amount: '+1.557 BUSD', time: '22 Nov, 18:26', image: busd },
  { symbol: 'ETH', action: 'Received', amount: '+$165.16', time: '21 Nov, 09:59', image: ethereum },
  { symbol: 'EUR', action: 'Received', amount: '+$366.20', time: '20 Nov, 13:15', image: eur },
  { symbol: '1INCH', action: 'Received', amount: '+14.004 1INCH', time: '19 Nov, 08:41', image: inch }
];

const news = [
  { headline: 'Markets digest the latest digital-asset policy proposals', source: 'Market Watch', time: '42 min ago', image: 'https://telerik.github.io/kendo-angular/grid-live-data/assets/news/CryptoBid.jpg', alt: 'Digital asset market analysis' },
  { headline: 'Institutional demand reshapes the crypto custody landscape', source: 'Ledger Report', time: '2 hr ago', image: 'https://telerik.github.io/kendo-angular/grid-live-data/assets/news/CryptoInvestigation.jpg', alt: 'Crypto custody analysis' },
  { headline: 'Bitcoin volatility eases as trading volumes normalize', source: 'Coin Journal', time: '4 hr ago', image: 'https://telerik.github.io/kendo-angular/grid-live-data/assets/news/BitcoinRegulation.jpg', alt: 'Bitcoin market chart' }
];

function ChangeIndicator({ change, trend }) {
  const isPositive = trend === 'positive';

  return (
    <p className={`change-indicator ${trend}`}>
      <SvgIcon icon={isPositive ? caretAltUpIcon : caretAltDownIcon} size="small" />
      <span>{change}</span>
    </p>
  );
}

function HoldingCard({ holding }) {
  return (
    <Card className="holding-card">
      <CardHeader className="holding-card__header">
        <Avatar type="image" className="asset-avatar">
          <img src={holding.image} alt={`${holding.name} logo`} />
        </Avatar>
        <div className="holding-card__identity">
          <span className="holding-card__symbol">{holding.symbol}</span>
          <span className="holding-card__name">{holding.name}</span>
        </div>
        <div className="holding-card__amount">
          <strong>{holding.value}</strong>
          <ChangeIndicator change={holding.change} trend={holding.trend} />
        </div>
      </CardHeader>
    </Card>
  );
}

function TransactionList() {
  return (
    <section aria-labelledby="transactions-heading">
      <div className="section-heading">
        <h2 id="transactions-heading">Recent transactions</h2>
        <Button fillMode="flat" themeColor="primary">View all</Button>
      </div>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li key={`${transaction.symbol}-${transaction.time}`} className="transaction">
            <Avatar type="image" className="asset-avatar">
              <img src={transaction.image} alt="" />
            </Avatar>
            <div className="transaction__details">
              <span className="transaction__symbol">{transaction.symbol}</span>
              <span className="transaction__action">{transaction.action}</span>
            </div>
            <div className="transaction__amount">
              <span>{transaction.amount}</span>
              <time>{transaction.time}</time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function NewsFeed() {
  return (
    <section aria-labelledby="news-heading">
      <div className="section-heading">
        <h2 id="news-heading">Portfolio news</h2>
        <Button fillMode="flat" themeColor="primary">View all</Button>
      </div>
      <ul className="news-list">
        {news.map((article) => (
          <li key={article.headline}>
            <article className="news-item">
              <div>
                <h3>{article.headline}</h3>
                <p>{article.source} <span aria-hidden="true">·</span> <time>{article.time}</time></p>
              </div>
              <img src={article.image} alt={article.alt} />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const rate = [{ text: '+10%', value: '+10%', disabled: true, svgIcon: caretAltUpIcon }];

  return (
    <div className="app-shell">
      <AppBar className="app-bar">
        <AppBarSection>
          <a className="brand" href="#portfolio" aria-label="CryptoVault portfolio dashboard">CryptoVault</a>
        </AppBarSection>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#portfolio" aria-current="page">Portfolio</a>
          <a href="#market">Markets</a>
          <a href="#transactions-heading">Activity</a>
        </nav>
        <AppBarSpacer />
        <AppBarSection className="app-bar__actions">
          <span className="market-status"><span className="market-status__dot" />Market open</span>
          <a className="icon-link" href="https://github.com/telerik/kendo-react" aria-label="View KendoReact on GitHub">
            <SvgIcon icon={linkIcon} size="large" />
          </a>
          <a className="icon-link" href="https://www.telerik.com/kendo-react-ui/components/grid/get-started/" aria-label="Open Grid documentation">
            <SvgIcon icon={fileTxtIcon} size="large" />
          </a>
          <Button fillMode="flat" themeColor="base" aria-label="Open notifications">
            <BadgeContainer>
              <SvgIcon icon={bellIcon} size="large" />
              <Badge shape="dot" themeColor="info" size="small" position="inside" />
            </BadgeContainer>
          </Button>
          <Avatar type="image" className="profile-avatar">
            <img src={kendoka} alt="Account profile" />
          </Avatar>
        </AppBarSection>
      </AppBar>

      <main id="portfolio" className="dashboard">
        <div className="dashboard__main">
          <section aria-labelledby="portfolio-heading">
            <div className="page-heading">
              <div>
                <h1 id="portfolio-heading">My portfolio</h1>
                <p>Live values update every half second.</p>
              </div>
              <span className="last-updated">Live market data</span>
            </div>
            <div className="holdings-grid">
              {holdings.map((holding) => <HoldingCard key={holding.symbol} holding={holding} />)}
            </div>
          </section>

          <section className="chart-section" aria-labelledby="performance-heading">
            <div className="section-heading">
              <div>
                <h2 id="performance-heading">Portfolio performance</h2>
                <p>Portfolio value over the last seven days</p>
              </div>
              <ChipList data={rate} selection="single" aria-label="Portfolio performance change" />
            </div>
            <PortfolioChart />
          </section>

          <section id="market" className="market-section" aria-labelledby="market-heading">
            <div className="section-heading">
              <div>
                <h2 id="market-heading">Explore the market</h2>
                <p>Live quotes, intraday range, volume, and analyst signal</p>
              </div>
              <span className="live-status"><span className="market-status__dot" />Updating live</span>
            </div>
            <DataProvider>
              <KendoGrid refreshRate={500} />
            </DataProvider>
          </section>
        </div>

        <aside className="dashboard__sidebar" aria-label="Portfolio activity">
          <section aria-labelledby="balance-heading">
            <div className="section-heading">
              <h2 id="balance-heading">Available balance</h2>
            </div>
            <Card className="balance-card">
              <CardBody>
                <CardTitle>Portfolio balance</CardTitle>
                <p className="balance-card__value">$430,933.00</p>
                <div className="balance-card__footer">
                  <div>
                    <span>Monthly profit</span>
                    <strong>$12,649.00</strong>
                  </div>
                  <ChipList data={rate} selection="single" aria-label="Monthly profit increased by 10 percent" />
                </div>
              </CardBody>
            </Card>
          </section>
          <TransactionList />
          <NewsFeed />
        </aside>
      </main>
    </div>
  );
}

export default App;
