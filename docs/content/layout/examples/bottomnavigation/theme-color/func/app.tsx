import * as React from 'react';

import {
    BottomNavigation,
    BottomNavigationSelectEvent,
    BottomNavigationThemeColor
} from '@progress/kendo-react-layout';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { envelopeIcon, heartIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';

const items = [
    { svgIcon: envelopeIcon, text: 'Inbox', selected: true },
    { svgIcon: plusIcon, text: 'Contacts' },
    { svgIcon: heartIcon, text: 'Favorites' },
    { svgIcon: trashIcon, text: 'Deleted' }
];

const themeColorOptions = [
    { label: 'Base', value: 'base' },
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Tertiary', value: 'tertiary' },
    { label: 'Inverse', value: 'inverse' }
];

const App = () => {
    const [themeColor, setThemeColor] = React.useState<BottomNavigationThemeColor>('tertiary');
    const [selectedIndex, setSelectedIndex] = React.useState(items.findIndex((x) => x.selected === true));

    const handleThemeColorChange = (e: any) => {
        setThemeColor(e.value);
    };

    const handleSelect = (e: BottomNavigationSelectEvent) => {
        setSelectedIndex(e.itemIndex);
    };

    return (
        <div className="example-wrapper">
            <div className="example-config">
                <p>Choose Theme Color</p>
                <RadioGroup
                    data={themeColorOptions}
                    value={themeColor}
                    onChange={handleThemeColorChange}
                    layout="horizontal"
                />
            </div>
            <BottomNavigation
                items={items.map((item, index) => ({ ...item, selected: index === selectedIndex }))}
                themeColor={themeColor}
                onSelect={handleSelect}
            />
            <style>{`my-app { padding: 0 !important; }
            .example-config { margin: 20px; padding: 20px; background-color: rgba(0, 0, 0, 0.05); border-radius: 4px; }`}</style>
        </div>
    );
};

export default App;
