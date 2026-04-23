import * as React from 'react';
import { Menu } from '@progress/kendo-react-layout';
import Content from './content';
import { filterSmallIcon, sortAscSmallIcon, sortDescSmallIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        text: 'Order ID',
        items: [
            { text: 'Filter', svgIcon: filterSmallIcon },
            { text: 'Sort Ascending', svgIcon: sortAscSmallIcon },
            { text: 'Sort Descending', svgIcon: sortDescSmallIcon },
        ],
    },
    {
        text: 'Ship Country',
        items: [
            { text: 'Filter', svgIcon: filterSmallIcon },
            { text: 'Sort Ascending', svgIcon: sortAscSmallIcon },
            { text: 'Sort Descending', svgIcon: sortDescSmallIcon },
        ],
    },
    {
        text: 'Ship Address',
        items: [
            { text: 'Filter', svgIcon: filterSmallIcon },
            { text: 'Sort Ascending', svgIcon: sortAscSmallIcon },
            { text: 'Sort Descending', svgIcon: sortDescSmallIcon },
        ],
    },
];

const App = () => {
    const menu = React.useRef<any>(undefined);
    const [chosenFilter, setChosenFilter] = React.useState('');

    const resetMenu = () => {
        // Collapses the menu.
        menu.current.reset();
    }

    const clearFilter = () => {
        setChosenFilter('');
    }

    const showChosenFilter = (itemId, filterValue) => {
        const rootItemIndex = itemId.split('_')[0];
        setChosenFilter(`column: ${items[rootItemIndex].text} filtered with: ${filterValue}`);
    }

    items.forEach(rootItem => {
        // Enhance the filter items with content and a bridging API that can be used by the content.
        Object.assign(rootItem.items[0], {
            contentRender: Content,
            data: {
                resetMenu: resetMenu,
                showChosenFilter: showChosenFilter,
                clearFilter: clearFilter
            }
        });
    });

    return (
        <div>
            <Menu
                items={items}
                // Sets the ids of the items (i.e. the content items) that will be closed via a custom close button.
                customCloseItemIds={['0_0_0', '1_0_0', '2_0_0']}
                ref={menu}
            />
            <div>Filter info:</div>
            <div>{chosenFilter}</div>
        </div>
    );
}

export default App;
