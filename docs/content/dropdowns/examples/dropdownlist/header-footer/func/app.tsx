import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';

const cars: { id: number; name: string }[] = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Honda' },
    { id: 3, name: 'Ford' },
    { id: 4, name: 'BMW' },
    { id: 5, name: 'Audi' },
    { id: 6, name: 'Mercedes-Benz' },
    { id: 7, name: 'Tesla' },
    { id: 8, name: 'Chevrolet' },
    { id: 9, name: 'Nissan' },
    { id: 10, name: 'Hyundai' }
];
const header = <div style={{ backgroundColor: '#dee2e6', textAlign: 'center' }}>Available cars</div>;
const footer = (
    <div
        style={{
            backgroundColor: '#dee2e6',
            padding: ' 0 0.2rem',
            textAlign: 'right'
        }}
    >
        Total: {cars.length}
    </div>
);
const App = () => {
    return (
        <div>
            <DropDownList
                data={cars}
                header={header}
                footer={footer}
                textField="name"
                opened
                label="Select car"
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
