import { createSankeyData, SankeyData } from '@progress/kendo-react-charts';

interface TrafficDataItem {
    gender: string;
    device: string;
    age: string;
    value: number;
}

const trafficData: TrafficDataItem[] = [
    { gender: 'Female', device: 'Tablet', age: '< 18', value: 4 },
    { gender: 'Female', device: 'Tablet', age: '> 40', value: 8 },
    { gender: 'Female', device: 'Mobile', age: '< 18', value: 4 },
    { gender: 'Female', device: 'Mobile', age: '18-26', value: 24 },
    { gender: 'Female', device: 'Mobile', age: '27-40', value: 10 },
    { gender: 'Female', device: 'Mobile', age: '> 40', value: 2 },
    { gender: 'Female', device: 'Desktop', age: '18-26', value: 11 },
    { gender: 'Female', device: 'Desktop', age: '27-40', value: 28 },
    { gender: 'Female', device: 'Desktop', age: '> 40', value: 9 },
    { gender: 'Male', device: 'Mobile', age: '< 18', value: 4 },
    { gender: 'Male', device: 'Mobile', age: '18-26', value: 11 },
    { gender: 'Male', device: 'Mobile', age: '27-40', value: 28 },
    { gender: 'Male', device: 'Mobile', age: '> 40', value: 9 },
    { gender: 'Male', device: 'Desktop', age: '18-26', value: 11 },
    { gender: 'Male', device: 'Desktop', age: '27-40', value: 28 },
    { gender: 'Male', device: 'Desktop', age: '> 40', value: 9 }
];

const dimensions = [
    { value: (item: object) => (item as TrafficDataItem).gender },
    { value: (item: object) => (item as TrafficDataItem).device },
    { value: (item: object) => 'Age ' + (item as TrafficDataItem).age }
];

const measure = { value: (item: object) => (item as TrafficDataItem).value };

const data: SankeyData = createSankeyData(trafficData, dimensions, measure);

export { data };
