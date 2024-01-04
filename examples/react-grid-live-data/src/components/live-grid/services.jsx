import React from 'react';
import { FinancialData } from './financial-data';
export const updateRandomPrices = data => {
  const newData = data.slice();
  for (let i = Math.round(Math.random() * 10); i < newData.length; i += Math.round(Math.random() * 10)) {
    randomizeObjectData(newData[i]);
  }
  return newData;
};
export const updateAllPrices = data => {
  const newData = data.slice();
  for (const dataRow of newData) {
    randomizeObjectData(dataRow);
  }
  return newData;
};
export const randomizeObjectData = dataObj => {
  const changeP = 'Change(%)';
  const res = generateNewPrice(dataObj.Price);
  dataObj.Change = res.Price - dataObj.Price;
  dataObj.Price = res.Price;
  dataObj[changeP] = res.ChangePercent;
};
export const generateNewPrice = oldPrice => {
  let rnd = Math.random();
  rnd = Math.round(rnd * 100) / 100;
  const volatility = 2;
  let newPrice = 0;
  let changePercent = 2 * volatility * rnd;
  if (changePercent > volatility) {
    changePercent -= 2 * volatility;
  }
  const changeAmount = oldPrice * (changePercent / 100);
  newPrice = oldPrice + changeAmount;
  newPrice = Math.round(newPrice * 100) / 100;
  const result = {
    Price: 0,
    ChangePercent: 0
  };
  changePercent = Math.round(changePercent * 100) / 100;
  result.Price = newPrice;
  result.ChangePercent = changePercent;
  return result;
};
export const DataProvider = props => {
  const [data, setData] = React.useState([]);
  const intervalRef = React.useRef(null);
  const onDataReset = React.useCallback((volume = 10) => {
    clearInterval(intervalRef.current);
    const financialData = new FinancialData();
    setData(financialData.generateData(volume));
  }, []);
  const onStartLiveUpdate = React.useCallback(interval => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setData(oldData => updateRandomPrices(oldData)), interval);
  }, []);
  return React.Children.map(props.children, child => {
    if (!React.isValidElement(child)) {
      return;
    }
    return <child.type {...child.props} data={data} onDataReset={onDataReset} onStartLiveUpdate={onStartLiveUpdate} />;
  });
};