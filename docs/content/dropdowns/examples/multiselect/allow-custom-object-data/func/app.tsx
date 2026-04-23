import * as React from 'react';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';

interface Item {
    text: string;
    id: number;
}
const cars: Item[] = [
    { id: 1, text: 'Toyota' },
    { id: 2, text: 'Honda' },
    { id: 3, text: 'Ford' },
    { id: 4, text: 'BMW' },
    { id: 5, text: 'Audi' },
    { id: 6, text: 'Mercedes-Benz' },
    { id: 7, text: 'Tesla' },
    { id: 8, text: 'Chevrolet' },
    { id: 9, text: 'Nissan' },
    { id: 10, text: 'Hyundai' }
];

const App = () => {
    const [value, setValue] = React.useState<Item[]>([]);

    const isCustom = (item: Item) => {
        return item.id === undefined;
    };
    const addKey = (item: Item) => {
        item.id = new Date().getTime();
    };

    const handleChange = (event: MultiSelectChangeEvent) => {
        const values = event.target.value;
        const lastItem = values[values.length - 1];

        if (lastItem && isCustom(lastItem)) {
            values.pop();
            const sameItem = values.find((v) => v.text === lastItem.text);
            if (sameItem === undefined) {
                addKey(lastItem);
                values.push(lastItem);
            }
        }

        setValue(values);
    };

    return (
        <div>
            <div className="example-config">Selected Values: {JSON.stringify(value)}</div>
            <div>Select cars</div>
            <MultiSelect
                data={cars}
                onChange={handleChange}
                value={value}
                textField="text"
                dataItemKey="id"
                allowCustom={true}
                style={{ width: '300px' }}
                placeholder="Type the brands of your cars"
            />
        </div>
    );
};

export default App;
