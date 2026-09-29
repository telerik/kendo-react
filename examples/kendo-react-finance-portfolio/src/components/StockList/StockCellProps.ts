export interface StockDataItem {
    symbol: string;
    name?: string;
    selected?: boolean;
    price?: number | string;
    price_open?: number | string;
    day_change?: number | string;
    change_pct?: number | string;
    volume?: number | string;
    volume_avg?: number | string;
    market_cap?: number | string;
    pe?: number | string | null;
    [key: string]: unknown;
}

export interface StockCellProps {
    dataItem: StockDataItem;
    field?: string;
    asCard?: boolean;
}

export const getStockValue = (dataItem: StockDataItem, field?: string) => {
    const value = field ? dataItem[field] : undefined;
    return typeof value === 'number' || typeof value === 'string' ? value : undefined;
};
