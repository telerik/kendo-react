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
      <div className="k-d-grid k-grid-cols-4 k-gap-lg-6 k-gap-xxl-6 k-gap-sm-0 k-rounded-md">
        <div className="k-d-flex k-align-items-center">
          <Avatar rounded="full" type="image">
            <img src={dataItem.avatar} alt={dataItem.name} />
          </Avatar>
          <div className="k-d-flex k-flex-column k-gap-4px">
            <span style={{ fontSize: 14, fontWeight: 700 }}>
              {dataItem.pair}
            </span>
            <span style={{ fontSize: 12, fontWeight: 400 }}>
              {dataItem.name}
            </span>
          </div>
        </div>
        <div className="k-d-flex k-flex-column k-gap-4px k-align-items-end">
          <span>{displayCurrencySign(dataItem.price, currency)}</span>
          <Change change={dataItem.change} price={dataItem.price} />
        </div>
        <div className="k-d-flex k-flex-column k-gap-4px k-align-items-end">
          <span>{displayCurrencySign(dataItem.price, currency)}</span>
          <Change change={dataItem.change} price={dataItem.price} />
        </div>
        <div className="k-d-flex k-flex-column k-align-items-end k-justify-content-center ">
          <span>{displayCurrencySign(dataItem.total, currency)}</span>
        </div>
      </div>
    );
  };

  return (
    <Card className="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
      <div className={"k-d-grid k-gap-10"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="k-gap-2"
        >
          Today’s Top 5 Movers
        </div>
        <div className="k-d-grid k-gap-6 k-pb-5">
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
