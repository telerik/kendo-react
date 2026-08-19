export interface MonthlyRevenue {
    month: string;
    revenue: number;
    previousYear: number;
    target: number;
}

export interface ProductCategory {
    category: string;
    value: number;
}

export interface KpiMetric {
    label: string;
    value: string;
    trend: number[];
    change: number;
}

export const monthlyRevenueData: MonthlyRevenue[] = [
    { month: 'Jan', revenue: 142000, previousYear: 128000, target: 135000 },
    { month: 'Feb', revenue: 156000, previousYear: 134000, target: 140000 },
    { month: 'Mar', revenue: 148000, previousYear: 141000, target: 145000 },
    { month: 'Apr', revenue: 172000, previousYear: 152000, target: 155000 },
    { month: 'May', revenue: 165000, previousYear: 148000, target: 160000 },
    { month: 'Jun', revenue: 189000, previousYear: 162000, target: 170000 },
    { month: 'Jul', revenue: 178000, previousYear: 158000, target: 175000 },
    { month: 'Aug', revenue: 195000, previousYear: 171000, target: 180000 },
    { month: 'Sep', revenue: 201000, previousYear: 176000, target: 185000 },
    { month: 'Oct', revenue: 188000, previousYear: 169000, target: 182000 },
    { month: 'Nov', revenue: 215000, previousYear: 185000, target: 195000 },
    { month: 'Dec', revenue: 234000, previousYear: 198000, target: 210000 }
];

export const productCategoryData: ProductCategory[] = [
    { category: 'Electronics', value: 245000 },
    { category: 'Apparel', value: 189000 },
    { category: 'Home & Garden', value: 156000 },
    { category: 'Sports', value: 134000 },
    { category: 'Books & Media', value: 98000 }
];

export interface StockDataPoint {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

function generateStockData(start: Date, end: Date, startPrice: number): StockDataPoint[] {
    const data: StockDataPoint[] = [];
    let price = startPrice;
    const current = new Date(start);

    while (current <= end) {
        const day = current.getDay();
        if (day !== 0 && day !== 6) {
            const drift = Math.sin(data.length * 0.15) * 1.2 + 0.08;
            const volatility = 1.5 + Math.sin(data.length * 0.3) * 0.5;
            const open = price;
            const change = drift + Math.sin(data.length * 0.7 + 3) * volatility;
            const close = open + change;
            const high = Math.max(open, close) + Math.abs(Math.sin(data.length * 0.5)) * 1.8 + 0.5;
            const low = Math.min(open, close) - Math.abs(Math.cos(data.length * 0.4)) * 1.8 - 0.5;
            const volume = 2800000 + Math.round(Math.sin(data.length * 0.6) * 600000);

            data.push({
                date: new Date(current),
                open: Math.round(open * 100) / 100,
                high: Math.round(high * 100) / 100,
                low: Math.round(low * 100) / 100,
                close: Math.round(close * 100) / 100,
                volume
            });

            price = close;
        }
        current.setDate(current.getDate() + 1);
    }

    return data;
}

export const stockPriceData: StockDataPoint[] = generateStockData(new Date(2025, 0, 2), new Date(2025, 2, 7), 142.5);

export const kpiMetrics: KpiMetric[] = [
    {
        label: 'Total Orders',
        value: '12,847',
        trend: [890, 920, 1010, 980, 1050, 1120, 1085, 1140, 1190, 1150, 1230, 1280],
        change: 14.2
    },
    {
        label: 'Revenue',
        value: '$2.38M',
        trend: [142, 156, 148, 172, 165, 189, 178, 195, 201, 188, 215, 234],
        change: 18.1
    },
    {
        label: 'Avg. Order Value',
        value: '$185',
        trend: [162, 170, 147, 176, 157, 169, 164, 171, 169, 163, 175, 183],
        change: 3.4
    },
    {
        label: 'Return Rate',
        value: '4.2%',
        trend: [5.8, 5.2, 4.9, 5.1, 4.7, 4.5, 4.8, 4.3, 4.1, 4.4, 4.0, 4.2],
        change: -27.6
    }
];

export interface SankeyNode {
    id: string;
    label: { text: string };
}

export interface SankeyLink {
    sourceId: string;
    targetId: string;
    value: number;
}

export const revenueFlowData = {
    nodes: [
        { id: 'organic', label: { text: 'Organic Search' } },
        { id: 'paid', label: { text: 'Paid Ads' } },
        { id: 'social', label: { text: 'Social Media' } },
        { id: 'referral', label: { text: 'Referral' } },
        { id: 'electronics', label: { text: 'Electronics' } },
        { id: 'apparel', label: { text: 'Apparel' } },
        { id: 'home', label: { text: 'Home & Garden' } },
        { id: 'completed', label: { text: 'Completed' } },
        { id: 'returned', label: { text: 'Returned' } },
        { id: 'abandoned', label: { text: 'Abandoned' } }
    ] as SankeyNode[],
    links: [
        { sourceId: 'organic', targetId: 'electronics', value: 120 },
        { sourceId: 'organic', targetId: 'apparel', value: 85 },
        { sourceId: 'organic', targetId: 'home', value: 60 },
        { sourceId: 'paid', targetId: 'electronics', value: 95 },
        { sourceId: 'paid', targetId: 'apparel', value: 70 },
        { sourceId: 'paid', targetId: 'home', value: 45 },
        { sourceId: 'social', targetId: 'apparel', value: 65 },
        { sourceId: 'social', targetId: 'electronics', value: 40 },
        { sourceId: 'social', targetId: 'home', value: 30 },
        { sourceId: 'referral', targetId: 'electronics', value: 50 },
        { sourceId: 'referral', targetId: 'apparel', value: 35 },
        { sourceId: 'referral', targetId: 'home', value: 25 },
        { sourceId: 'electronics', targetId: 'completed', value: 245 },
        { sourceId: 'electronics', targetId: 'returned', value: 35 },
        { sourceId: 'electronics', targetId: 'abandoned', value: 25 },
        { sourceId: 'apparel', targetId: 'completed', value: 195 },
        { sourceId: 'apparel', targetId: 'returned', value: 40 },
        { sourceId: 'apparel', targetId: 'abandoned', value: 20 },
        { sourceId: 'home', targetId: 'completed', value: 130 },
        { sourceId: 'home', targetId: 'returned', value: 15 },
        { sourceId: 'home', targetId: 'abandoned', value: 15 }
    ] as SankeyLink[]
};
