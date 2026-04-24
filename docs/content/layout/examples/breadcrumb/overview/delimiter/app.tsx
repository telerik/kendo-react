import * as React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { divideIcon, connectorIcon, chevronRightIcon } from '@progress/kendo-svg-icons';

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
        iconClass: 'k-i-home'
    },
    {
        id: 'products',
        text: 'Products'
    },
    {
        id: 'computer',
        text: 'Computer'
    }
];

const CustomDividerDelimiter = () => {
    return <SvgIcon icon={divideIcon} />;
};

const CustomConnectorDelimiter = () => {
    return <SvgIcon icon={connectorIcon} />;
};

const CustomChevronDelimiter = () => {
    return <SvgIcon icon={chevronRightIcon} />;
};
const App = () => {
    const [data, setData] = React.useState<DataModel[]>(items);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Breadcrumb data={data} breadcrumbDelimiter={CustomDividerDelimiter} />
            <br />
            <Breadcrumb data={data} breadcrumbDelimiter={CustomConnectorDelimiter} />
            <br />
            <Breadcrumb data={data} breadcrumbDelimiter={CustomChevronDelimiter} />
        </div>
    );
};

export default App;
