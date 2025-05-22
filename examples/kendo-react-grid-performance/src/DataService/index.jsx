import React from 'react';
import { FinancialData } from './local-data/financial-data';

export const updateRandomPrices = (data) => {
    // console.time('randomizerandom');

    const newData = data.slice();
    for (let i = Math.round(Math.random() * 10); i < newData.length; i += Math.round(Math.random() * 10)) {
        randomizeObjectData(newData[i]);
    }

    // console.timeEnd('randomizerandom');

    return newData;
}

export const updateAllPrices = (data) => {
    // console.time('randomizeall');

    const newData = data.slice();
    for (const dataRow of newData) {
        randomizeObjectData(dataRow);
    }

    // console.timeEnd('randomizeall');
    return newData;
}

export const randomizeObjectData = (dataObj) => {
    const changeP = 'Change(%)';
    const res = generateNewPrice(dataObj.Price);
    dataObj.Change = res.Price - dataObj.Price;
    dataObj.Price = res.Price;
    dataObj[changeP] = res.ChangePercent;
}

export const generateNewPrice = (oldPrice) => {
    let rnd = Math.random();
    rnd = Math.round(rnd * 100) / 100;
    const volatility = 2;
    let newPrice = 0;
    let changePercent = 2 * volatility * rnd;
    if (changePercent > volatility) {
        changePercent -= (2 * volatility);
    }
    const changeAmount = oldPrice * (changePercent / 100);
    newPrice = oldPrice + changeAmount;
    newPrice = Math.round(newPrice * 100) / 100;
    const result = { Price: 0, ChangePercent: 0 };
    changePercent = Math.round(changePercent * 100) / 100;
    result.Price = newPrice;
    result.ChangePercent = changePercent;

    return result;
}


export const DataProvider = (props) => {
    const [data, setData] = React.useState([]);
    const intervalRef = React.useRef(null);

    const onDataReset = React.useCallback(
        (volume) => {
            // console.log(volume, 'inside onDataReset')
            clearInterval(intervalRef.current);

            const financialData = new FinancialData();
            setData(financialData.generateData(volume));
        },
        []
    );

    const onStartLiveUpdate = React.useCallback(
        (interval) => {
            clearInterval(intervalRef.current);

            intervalRef.current = setInterval(
                () => setData(oldData => updateRandomPrices(oldData)),
                interval
            );
        },
        []
    );

    const onStartLiveUpdateAll = React.useCallback(
        (interval) => {
            clearInterval(intervalRef.current);

            intervalRef.current = setInterval(
                () => {
                    setData(oldData => updateAllPrices(oldData))
                },
                interval
            );
        },
        []
    );

    const onStopLiveUpdate = React.useCallback(
        () => {
            clearInterval(intervalRef.current);
        },
        []
    );

    return React.Children.map(
        props.children,
        (child) => {
            if (!React.isValidElement(child)) {
                return;
            }

            return <child.type
                {...child.props}
                data={data}
                onDataReset={onDataReset}
                onStartLiveUpdate={onStartLiveUpdate}
                onStartLiveUpdateAll={onStartLiveUpdateAll}
                onStopLiveUpdate={onStopLiveUpdate}
            />;
        }
    );
}
