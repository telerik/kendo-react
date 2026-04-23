import * as React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { homeIcon, sparklesIcon, heartIcon } from '@progress/kendo-svg-icons';

interface DataModel {
    id: string;
    text?: string;
    icon?: React.ReactNode;
}

const items: DataModel[] = [
    {
        id: 'home',
        text: 'Home',
        icon: <SvgIcon icon={homeIcon} />
    },
    {
        id: 'kendo-react',
        text: 'KendoReact',
        icon: <SvgIcon icon={sparklesIcon} />
    },
    {
        id: 'breadcrumb',
        text: 'Breadcrumb',
        icon: <SvgIcon icon={heartIcon} />
    }
];

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
            <Breadcrumb data={data} />
        </div>
    );
};

export default App;
