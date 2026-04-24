import * as React from 'react';

import { BottomNavigation, BottomNavigationFill, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { envelopIcon, heartIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';

const items = [
    { svgIcon: envelopIcon, text: 'Inbox', selected: true },
    { svgIcon: plusIcon, text: 'Contacts' },
    { svgIcon: heartIcon, text: 'Favorites' },
    { svgIcon: trashIcon, text: 'Deleted' }
];

const fillOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Flat', value: 'flat' }
];

const App = () => {
    const [fill, setFill] = React.useState<BottomNavigationFill>('solid');
    const [selectedIndex, setSelectedIndex] = React.useState(items.findIndex((x) => x.selected === true));

    const handleFillChange = (e: any) => {
        setFill(e.value);
    };

    const handleSelect = (e: BottomNavigationSelectEvent) => {
        setSelectedIndex(e.itemIndex);
    };

    return (
        <div className="example-wrapper">
            <div className="example-config">
                <p>Choose Fill Mode</p>
                <RadioGroup data={fillOptions} value={fill} onChange={handleFillChange} layout="horizontal" />
            </div>
            <BottomNavigation
                items={items.map((item, index) => ({ ...item, selected: index === selectedIndex }))}
                fillMode={fill}
                onSelect={handleSelect}
            />
            <style>{`my-app { padding: 0 !important; }
            .example-config { margin: 20px; padding: 20px; background-color: rgba(0, 0, 0, 0.05); border-radius: 4px; }`}</style>
        </div>
    );
};

export default App;
