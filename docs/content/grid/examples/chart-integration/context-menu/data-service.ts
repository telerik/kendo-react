import { sampleData } from './gd-sampleChartData';

let data: any[] = [...sampleData];

export const generateId = (): number => new Date().getTime();

export const getItems = (): any[] => {
    return data;
};
