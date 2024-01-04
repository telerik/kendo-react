import { SECTOR } from "../context/SectorContext";

const processData = (data: any) => {
    const result = Object.keys(data.intraday).reduce((acc: any[], current: string) => {
        const other = data.intraday[current];
        const open = Number.parseFloat(other.open);
        const close = Number.parseFloat(other.close);
        const high = Number.parseFloat(other.high);
        const low = Number.parseFloat(other.low);
        const volume = Number.parseFloat(other.volume);
        const formatedDate = `/Date(${new Date(current).getTime()})/`;
        const change = (((close - open) / close) * 1);
        const color = change >= 0 ? '#58B854' : '#D9534F';

        return [...acc, {
            open,
            close,
            high,
            low,
            volume,
            formatedDate,
            change: Math.abs(change),
            color,
            date: new Date(current),
            timestamp: new Date(current).getTime()
        }]
    }, [])

    return result;
}

export const dataService = {
    getSectorSymbol: async (sector: SECTOR) => {
        const sectorMap = {
            [SECTOR.HEALTHCARE]: 'health-symbols',
            [SECTOR.TECHNOLOGY]: 'tech-symbols',
        }
        const resp = await fetch(`${process.env.PUBLIC_URL}/data/${sectorMap[sector]}.json`);
        const symbols = await resp.json();
        return symbols.data;
    },
    getAllSymbols: async () => {
        const health = await fetch(`${process.env.PUBLIC_URL}/data/health-symbols.json`);
        const tech = await fetch(`${process.env.PUBLIC_URL}/data/tech-symbols.json`);

        const healthSymbols = await health.json();
        const techSymbols = await tech.json();

        return healthSymbols.data.concat(techSymbols.data);
    },
    getOneDaySymbol: async (symbol: any) => {
        const resp = await fetch(`${process.env.PUBLIC_URL}/data/symbols/${symbol}1D.json`);
        const data = await resp.json();
        return processData(data);
    },
    getSymbol: async (symbol: any) => {
        const resp = await fetch(`${process.env.PUBLIC_URL}/data/symbols/${symbol}5M.json`);
        const data = await resp.json();

        return processData(data);
    }
}