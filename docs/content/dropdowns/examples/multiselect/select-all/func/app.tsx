import * as React from 'react';
import {
    MultiSelect,
    MultiSelectChangeEvent,
    MultiSelectFilterChangeEvent,
    MultiSelectPageChangeEvent
} from '@progress/kendo-react-dropdowns';

interface Item {
    id: number;
    text: string;
    category: string;
    selected?: boolean;
}

const categories = ['Electronics', 'Clothing', 'Food', 'Sports', 'Books'];
const total = 5000;
const pageSize = 18;
const itemsPerCategory = total / categories.length;
const initialData: Item[] = [];

for (let catIndex = 0; catIndex < categories.length; catIndex++) {
    for (let i = 0; i < itemsPerCategory; i++) {
        const id = catIndex * itemsPerCategory + i;
        initialData.push({
            id,
            text: 'Item ' + id,
            category: categories[catIndex],
            selected: false
        });
    }
}

const App = () => {
    const [allData, setAllData] = React.useState<Item[]>(initialData);
    const [customValues, setCustomValues] = React.useState<Array<{ text: string }>>([]);
    const [filter, setFilter] = React.useState('');
    const [skip, setSkip] = React.useState(0);

    const filteredData = filter
        ? allData.filter(
              (item) =>
                  item.text.toLowerCase().includes(filter.toLowerCase()) ||
                  item.category.toLowerCase().includes(filter.toLowerCase())
          )
        : allData;

    const subsetData = filteredData.slice(skip, skip + pageSize);
    const listSelections = allData.filter((item) => item.selected);
    const value = [...listSelections, ...customValues];

    const pageChange = (event: MultiSelectPageChangeEvent) => {
        setSkip(event.page.skip);
    };

    const handleFilterChange = (event: MultiSelectFilterChangeEvent) => {
        setFilter(event.filter.value);
        setSkip(0);
    };

    const handleClose = () => {
        setFilter('');
    };

    const handleChange = (event: MultiSelectChangeEvent) => {
        const newValue = event.value as Array<Item | { text: string }>;

        const newCustomValues = newValue.filter((item) => (item as Item).id === undefined);
        const selectedIds = new Set(
            newValue.filter((item) => (item as Item).id !== undefined).map((item) => (item as Item).id)
        );

        setAllData((prev) =>
            prev.map((item) => ({
                ...item,
                selected: selectedIds.has(item.id)
            }))
        );
        setCustomValues(newCustomValues);
    };

    const handleSelectAllChange = (event: { allSelected: boolean }) => {
        const filteredIds = new Set(filteredData.map((item) => item.id));

        setAllData((prev) =>
            prev.map((item) => ({
                ...item,
                selected: filteredIds.has(item.id) ? event.allSelected : item.selected
            }))
        );
    };

    return (
        <div>
            <MultiSelect
                style={{ width: '300px' }}
                data={subsetData}
                value={value}
                textField="text"
                dataItemKey="id"
                groupField="category"
                checkboxes={true}
                allowCustom={true}
                filterable={true}
                filter={filter}
                onFilterChange={handleFilterChange}
                onClose={handleClose}
                selectAll={true}
                label="Select value"
                virtual={{
                    total: filteredData.length,
                    pageSize: pageSize,
                    skip: skip
                }}
                onChange={handleChange}
                onSelectAllChange={handleSelectAllChange}
                onPageChange={pageChange}
                popupSettings={{
                    height: '250px'
                }}
            />
        </div>
    );
};

export default App;
