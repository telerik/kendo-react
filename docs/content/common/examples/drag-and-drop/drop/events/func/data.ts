export interface DataItem {
    id: number | string;
    name?: string;
    type: 'employee' | 'developer';
}
export const sampleData: DataItem[] = [
    {
        id: 1,
        name: 'Steven White',
        type: 'employee'
    },
    {
        id: 2,
        name: 'Nancy King',
        type: 'employee'
    },
    {
        id: 3,
        name: 'Nancy Davolio',
        type: 'developer'
    },
    {
        id: 4,
        name: 'Robert Davolio',
        type: 'employee'
    },
    {
        id: 5,
        name: 'Michael Leverling',
        type: 'developer'
    },
    {
        id: 6,
        name: 'Andrew Callahan',
        type: 'developer'
    },
    {
        id: 7,
        name: 'Michael Suyama',
        type: 'employee'
    }
];
