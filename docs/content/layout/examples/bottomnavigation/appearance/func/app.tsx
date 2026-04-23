import * as React from 'react';

import {
    BottomNavigation,
    BottomNavigationFill,
    BottomNavigationSelectEvent,
    BottomNavigationThemeColor
} from '@progress/kendo-react-layout';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { chartLineIcon, arrowsSwapIcon, chartPieIcon, gearIcon, moreHorizontalIcon } from '@progress/kendo-svg-icons';

const items = [
    { svgIcon: chartLineIcon, text: 'Revenue', selected: true },
    { svgIcon: arrowsSwapIcon, text: 'Transactions' },
    { svgIcon: chartPieIcon, text: 'Overview' },
    { svgIcon: gearIcon, text: 'Settings' },
    { svgIcon: moreHorizontalIcon, text: 'More' }
];

const themeColorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Tertiary', value: 'tertiary' },
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Error', value: 'error' },
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'light' },
    { label: 'Inverse', value: 'inverse' }
];

const fillOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Flat', value: 'flat' }
];

const App = () => {
    const [themeColor, setThemeColor] = React.useState<BottomNavigationThemeColor>('primary');
    const [fill, setFill] = React.useState<BottomNavigationFill>('flat');
    const [selectedIndex, setSelectedIndex] = React.useState(items.findIndex((x) => x.selected === true));

    const handleThemeColorChange = (e: any) => {
        setThemeColor(e.value);
    };

    const handleFillChange = (e: any) => {
        setFill(e.value);
    };

    const handleSelect = (e: BottomNavigationSelectEvent) => {
        setSelectedIndex(e.itemIndex);
    };

    return (
        <div className="example-wrapper">
            <div className="example-config row">
                <div className="col-12 mb-3">
                    <p>Choose Theme Color</p>
                    <RadioGroup
                        data={themeColorOptions}
                        value={themeColor}
                        onChange={handleThemeColorChange}
                        layout="horizontal"
                    />
                </div>
                <div className="col-12">
                    <p>Choose Fill Mode</p>
                    <RadioGroup data={fillOptions} value={fill} onChange={handleFillChange} layout="horizontal" />
                </div>
            </div>
            <BottomNavigation
                items={items.map((item, index) => ({ ...item, selected: index === selectedIndex }))}
                themeColor={themeColor}
                fillMode={fill}
                onSelect={handleSelect}
            />
            <style>{`my-app { padding: 0 !important; }
            .example-config { margin: 20px; padding: 20px; background-color: rgba(0, 0, 0, 0.05); border-radius: 4px; }`}</style>
        </div>
    );
};

export default App;
