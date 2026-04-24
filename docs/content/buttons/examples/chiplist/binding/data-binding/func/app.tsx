import * as React from 'react';

import { ChipList, Chip, ChipListDataChangeEvent, ChipProps } from '@progress/kendo-react-buttons';

interface Month {
    text: string;
    value: string;
}

const monthsData: Month[] = [
    {
        text: 'December',
        value: '1'
    },
    {
        text: 'January',
        value: '2'
    },
    {
        text: 'February',
        value: '3'
    },
    {
        text: 'June',
        value: '4'
    },
    {
        text: 'July',
        value: '5'
    },
    {
        text: 'August',
        value: '6'
    }
];

const colorMap = {
    '1': '#B4E5F4',
    '2': '#B4E5F4',
    '3': '#B4E5F4',
    '4': '#F0C88B',
    '5': '#F0C88B',
    '6': '#F0C88B'
};

const winterMonths: string[] = ['1', '2', '3'];

const MonthChip = (props: ChipProps) => {
    // Winter!!!!
    return (
        <Chip
            {...props}
            disabled={winterMonths.some((f) => f === props.dataItem.value)}
            style={{ backgroundColor: colorMap[props.dataItem.value] }}
        />
    );
};

const App = () => {
    const [month, setMonth] = React.useState(monthsData);

    const handleMonthChange = (event: ChipListDataChangeEvent) => {
        setMonth(event.value);
    };

    return (
        <div>
            <h4>Choose from the summer months</h4>
            <ChipList selection="multiple" data={month} chip={MonthChip} onDataChange={handleMonthChange} />
        </div>
    );
};

export default App;
