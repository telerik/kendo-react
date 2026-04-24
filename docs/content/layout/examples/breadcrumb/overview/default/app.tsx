import * as React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';

interface DataModel {
    id: string;
    text?: string;
    icon?: React.ReactNode;
    iconClass?: string;
}

const items: DataModel[] = [
    {
        id: 'dashboard',
        text: 'Dashboard',
        iconClass: 'k-i-dashboard'
    },
    {
        id: 'patients',
        text: 'Patients'
    },
    {
        id: 'john-doe',
        text: 'John Doe'
    },
    {
        id: 'medical-history',
        text: 'Medical History'
    },
    {
        id: 'lab-reports',
        text: 'Lab Reports'
    }
];

const App = () => {
    const [data, setData] = React.useState<DataModel[]>(items);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'
            }}
        >
            <Breadcrumb data={data} />
        </div>
    );
};

export default App;
