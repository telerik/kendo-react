import * as React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { homeIcon } from '@progress/kendo-svg-icons';

interface DataModel {
    id: string;
    text?: string;
    icon?: React.ReactNode;
    iconClass?: string;
}

const items: DataModel[] = [
    {
        id: 'home',
        text: 'Home',
        icon: <SvgIcon icon={homeIcon} />
    },
    {
        id: 'products',
        text: 'Products'
    },
    {
        id: 'computer',
        text: 'Computer'
    },
    {
        id: 'gaming',
        text: 'Gaming'
    },
    {
        id: 'keyboard',
        text: 'Keyboard'
    }
];

const App = () => {
    return (
        <div>
            <p>Small</p>
            <Breadcrumb size={'small'} data={items} />
            <br />
            <br />
            <p>Medium</p>
            <Breadcrumb size={'medium'} data={items} />
            <br />
            <br />
            <p>Large</p>
            <Breadcrumb size={'large'} data={items} />
        </div>
    );
};

export default App;
