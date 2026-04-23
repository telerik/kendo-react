import * as React from 'react';

import { DropDownButton } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { exportIcon, fileExcelIcon, filePdfIcon, fileWordIcon, SVGIcon } from '@progress/kendo-svg-icons';

interface Item {
    text: string;
    icon?: string;
}

const itemRender = (props: { item: any; itemIndex: number }) => {
    let fileIcon: SVGIcon;

    if (props.item.icon === 'pdf') {
        fileIcon = filePdfIcon;
    } else if (props.item.icon === 'excel') {
        fileIcon = fileExcelIcon;
    } else {
        fileIcon = fileWordIcon;
    }

    return (
        <div>
            {props.item.icon && <SvgIcon icon={fileIcon} className="k-mr-2" />}
            {`action #${props.itemIndex}: ${props.item.text}`}
        </div>
    );
};

const items: Item[] = [
    { text: 'To PDF', icon: 'pdf' },
    { text: 'To Excel', icon: 'excel' },
    { text: 'To Word', icon: 'word' }
];
const App = () => {
    return (
        <div>
            <DropDownButton itemRender={itemRender} items={items} svgIcon={exportIcon} text="Export" />
        </div>
    );
};
export default App;
