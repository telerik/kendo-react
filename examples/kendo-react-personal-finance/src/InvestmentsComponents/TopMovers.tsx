import React from "react";
import { Card } from "@progress/kendo-react-layout";
import { ListView, ListViewItemProps } from "@progress/kendo-react-listview";
import { Avatar } from "@progress/kendo-react-layout";
import Change from "./Change";
import { displayCurrencySign } from "../data/currency-converter";

const currencies = [
  {
    pair: "BTC/BIRD",
    name: "Bitcoin",
    avatar: `${import.meta.env.BASE_URL}images/bitcoin.png`,
    price: "3000",
    change: "220.2",
    total: "300000",
  },
  {
    pair: "ETH/BIRD",
    name: "Etherium",
    avatar: `${import.meta.env.BASE_URL}images/ethereum.png`,
    price: "2000",
    change: "150.3",
    total: "200000",
  },
  {
    pair: "XRP/BIRD",
    name: "Ripple",
    avatar: `${import.meta.env.BASE_URL}images/ripple.png`,
    price: "50",
    change: "-5.1",
    total: "50000",
  },
  {
    pair: "TTH/BIRD",
    name: "Theter",
    avatar: `${import.meta.env.BASE_URL}images/tetherus.png`,
    price: "100",
    change: "2.0",
    total: "10000",
  },
  {
    pair: "UNI/BIRD",
    name: "Unicorn",
    avatar: `${import.meta.env.BASE_URL}images/inch.png`,
    price: "100",
    change: "-3.5",
    total: "10000",
  },
];

interface TopMoversProps {
  currency: string;
}

export default function TopMovers(props: TopMoversProps) {
  const currency = props.currency;

  const ListViewItem = (props: ListViewItemProps) => {
    const { dataItem } = props;
    return (
      <div className="top-movers__item">
        <div className="top-movers__identity">
          <Avatar rounded="full" type="image">
            <img src={dataItem.avatar} alt={dataItem.name} />
          </Avatar>
          <div className="top-movers__stack">
            <span style={{ fontSize: 14, fontWeight: 700 }}>
              {dataItem.pair}
            </span>
            <span style={{ fontSize: 12, fontWeight: 400 }}>
              {dataItem.name}
            </span>
          </div>
        </div>
        <div className="top-movers__stack top-movers__stack--end">
          <span>{displayCurrencySign(dataItem.price, currency)}</span>
          <Change change={dataItem.change} price={dataItem.price} />
        </div>
        <div className="top-movers__stack top-movers__stack--end">
          <span>{displayCurrencySign(dataItem.price, currency)}</span>
          <Change change={dataItem.change} price={dataItem.price} />
        </div>
        <div className="top-movers__stack top-movers__stack--end top-movers__total">
          <span>{displayCurrencySign(dataItem.total, currency)}</span>
        </div>
      </div>
    );
  };

  return (
    <Card className="app-card">
      <div className="app-card__content top-movers__content">
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="app-card__title"
        >
          Today’s Top 5 Movers
        </div>
        <div className="top-movers__list">
          <ListView
            data={currencies}
            item={ListViewItem}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </Card>
  );
}
