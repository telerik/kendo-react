export interface StockDataItem {
    Date: Date;
    Close: number;
    Volume: number;
    Open: number;
    High: number;
    Low: number;
}

export const initialStockData: StockDataItem[] = [
    { Date: new Date('2020-12-01'), Close: 40.635, Volume: 1650185491, Open: 40.64, High: 40.68, Low: 39.09 },
    { Date: new Date('2021-01-01'), Close: 40.13, Volume: 1979918237, Open: 40.13, High: 40.292, Low: 36.46 },
    { Date: new Date('2021-02-01'), Close: 38.44, Volume: 1572505911, Open: 38.44, High: 38.48, Low: 36.697 },
    { Date: new Date('2021-03-01'), Close: 38.24, Volume: 1922276774, Open: 38.24, High: 38.29, Low: 35.94 },
    { Date: new Date('2021-04-01'), Close: 37.031, Volume: 2078426778, Open: 37.032, High: 37.07, Low: 34.35 },
    { Date: new Date('2021-05-01'), Close: 38.2402, Volume: 1727585885, Open: 38.25, High: 38.27, Low: 34.886 },
    { Date: new Date('2021-06-01'), Close: 38.65, Volume: 1776948280, Open: 38.63, High: 38.68, Low: 36.7 },
    { Date: new Date('2021-07-01'), Close: 39.9002, Volume: 1456330078, Open: 39.9, High: 39.921, Low: 36.5498 },
    { Date: new Date('2021-08-01'), Close: 40.1, Volume: 1557166494, Open: 40.095, High: 40.14, Low: 38.26 },
    { Date: new Date('2021-09-01'), Close: 39.841, Volume: 1506305343, Open: 39.84, High: 39.91, Low: 38.24 },
    { Date: new Date('2021-10-01'), Close: 39.8592, Volume: 2034928239, Open: 39.8515, High: 39.88, Low: 37.33 },
    { Date: new Date('2021-11-01'), Close: 41.993, Volume: 1542204312, Open: 41.99, High: 42.02, Low: 38.71 },
    { Date: new Date('2021-12-01'), Close: 42.3, Volume: 1255678260, Open: 42.298, High: 42.31, Low: 40.36 },
    { Date: new Date('2022-01-01'), Close: 43.29, Volume: 1685490186, Open: 43.29, High: 43.31, Low: 40.16 },
    { Date: new Date('2022-02-01'), Close: 42.13, Volume: 1445458017, Open: 42.04, High: 42.17, Low: 40.26 },
    { Date: new Date('2022-03-01'), Close: 42.14, Volume: 1958550854, Open: 42.14, High: 42.15, Low: 40.5 },
    { Date: new Date('2022-04-01'), Close: 42.86, Volume: 1533883066, Open: 42.89, High: 43.05, Low: 41.39 },
    { Date: new Date('2022-05-01'), Close: 42.23, Volume: 2396221596, Open: 42.24, High: 42.28, Low: 38.23 },
    { Date: new Date('2022-06-01'), Close: 39.8, Volume: 2709886930, Open: 39.96, High: 40, Low: 37.16 },
    { Date: new Date('2022-07-01'), Close: 39, Volume: 2091835303, Open: 38.938, High: 39, Low: 36.5 },
    { Date: new Date('2022-08-01'), Close: 38.96, Volume: 1986978146, Open: 38.97, High: 39.03, Low: 36.26 },
    { Date: new Date('2022-09-01'), Close: 40.91, Volume: 1860762246, Open: 40.91, High: 40.95, Low: 38.32 },
    { Date: new Date('2022-10-01'), Close: 42.88, Volume: 1974572432, Open: 42.89, High: 42.92, Low: 39.88 },
    { Date: new Date('2022-11-01'), Close: 44.78, Volume: 1903112379, Open: 44.77, High: 44.86, Low: 41.61 },
    { Date: new Date('2022-12-01'), Close: 44.7, Volume: 1533161602, Open: 44.7, High: 44.8, Low: 41.5 },
    { Date: new Date('2023-01-01'), Close: 45.36, Volume: 1823989418, Open: 45.35, High: 45.4, Low: 42.53 },
    { Date: new Date('2023-02-01'), Close: 45.47, Volume: 1730644867, Open: 45.485, High: 45.55, Low: 42.93 },
    { Date: new Date('2023-03-01'), Close: 44.42, Volume: 1749294085, Open: 44.44, High: 44.44, Low: 42.06 },
    { Date: new Date('2023-04-01'), Close: 46.59, Volume: 1171507724, Open: 46.5, High: 46.6, Low: 43.5 },
    { Date: new Date('2023-05-01'), Close: 47.5, Volume: 1282648621, Open: 47.5, High: 47.52, Low: 45.66 },
    { Date: new Date('2023-06-01'), Close: 47.88, Volume: 1228561577, Open: 47.88, High: 47.92, Low: 46.16 }
];

const randomValue = (max: number): number => Number.parseFloat((Math.random() * max).toFixed(2));

const increaseMonth = (date: Date): Date => {
    const result = new Date(date);
    result.setMonth(result.getMonth() + 1);
    return result;
};

export const generateNextCandlestick = (lastDate: Date): StockDataItem => {
    const open = randomValue(60);
    const close = randomValue(60);
    const high = Math.max(open, close) + randomValue(5);
    const low = Math.min(open, close) - randomValue(5);
    return {
        Date: increaseMonth(lastDate),
        Open: open,
        Close: close,
        High: high,
        Low: Math.max(0, low),
        Volume: Math.floor(Math.random() * 2000000000)
    };
};
