import { SECTOR } from "../context/SectorContext";
import { getKendoColor } from "../styles/tokens";

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
        const color = change >= 0
            ? getKendoColor('success')
            : getKendoColor('error');

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
        const symbols = await requestJson<{ data: any[] }>(`${import.meta.env.BASE_URL}data/${sectorMap[sector]}.json`);
        return symbols.data;
    },
    getAllSymbols: async () => {
        const [healthSymbols, techSymbols] = await Promise.all([
            requestJson<{ data: any[] }>(`${import.meta.env.BASE_URL}data/health-symbols.json`),
            requestJson<{ data: any[] }>(`${import.meta.env.BASE_URL}data/tech-symbols.json`)
        ]);

        return healthSymbols.data.concat(techSymbols.data);
    },
    getOneDaySymbol: async (symbol: any) => {
        const data = await requestJson<any>(`${import.meta.env.BASE_URL}data/symbols/${symbol}1D.json`);
        return processData(data);
    },
    getSymbol: async (symbol: any) => {
        const data = await requestJson<any>(`${import.meta.env.BASE_URL}data/symbols/${symbol}5M.json`);

        return processData(data);
    }
}

async function requestJson<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Data request failed (${response.status})`);
    }
    return response.json() as Promise<T>;
}