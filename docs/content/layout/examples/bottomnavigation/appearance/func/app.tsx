import * as React from 'react';

import { BottomNavigation, BottomNavigationProps, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import { chartLineIcon, arrowsSwapIcon, chartPieIcon, gearIcon, moreHorizontalIcon } from '@progress/kendo-svg-icons';
import { useConfigurator, fillModeOptions, themeColorOptions } from '@docs-shared/configurator';

const items = [
    { svgIcon: chartLineIcon, text: 'Revenue', selected: true },
    { svgIcon: arrowsSwapIcon, text: 'Transactions' },
    { svgIcon: chartPieIcon, text: 'Overview' },
    { svgIcon: gearIcon, text: 'Settings' },
    { svgIcon: moreHorizontalIcon, text: 'More' }
];

const App = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(items.findIndex((x) => x.selected === true));

    const config = useConfigurator({
        sections: [
            {
                label: 'Fill Mode',
                controls: [
                    {
                        type: 'segmented',
                        name: 'fillMode',
                        options: fillModeOptions(['solid', 'flat']),
                        defaultValue: 'flat'
                    }
                ]
            },
            {
                label: 'Theme Color',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'themeColor',
                        options: themeColorOptions(['primary', 'secondary', 'tertiary', 'inverse']),
                        defaultValue: 'primary'
                    }
                ]
            }
        ]
    }) as {
        fillMode: BottomNavigationProps['fillMode'];
        themeColor: BottomNavigationProps['themeColor'];
    };

    const handleSelect = (e: BottomNavigationSelectEvent) => {
        setSelectedIndex(e.itemIndex);
    };

    return (
        <div className="example-wrapper-center">
            <BottomNavigation
                items={items.map((item, index) => ({ ...item, selected: index === selectedIndex }))}
                themeColor={config.themeColor}
                fillMode={config.fillMode}
                onSelect={handleSelect}
            />
        </div>
    );
};

export default App;
