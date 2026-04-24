import { ShapeOptions } from '@progress/kendo-react-diagram';

export interface ShapeDataItem {
    type: string;
    name?: string;
    role?: string;
    department?: string;
    image?: string;
    backgroundColor?: string;
    strokeColor?: string;
}

export const shapes: ShapeOptions[] = [
    {
        id: 'employee1',
        x: 50,
        y: 100,
        dataItem: {
            type: 'employee',
            name: 'Sarah Johnson',
            role: 'Senior Developer',
            department: 'Engineering',
            image: './assets/diagram/jane.png',
            backgroundColor: '#e3f2fd',
            strokeColor: '#1976d2'
        }
    },
    {
        id: 'star1',
        x: 380,
        y: 125,
        dataItem: {
            type: 'star',
            backgroundColor: '#fff8e1',
            strokeColor: '#ffc107'
        }
    },
    {
        id: 'arrow1',
        x: 480,
        y: 125,
        dataItem: {
            type: 'arrow',
            backgroundColor: '#e3f2fd',
            strokeColor: '#2196f3'
        }
    }
];
