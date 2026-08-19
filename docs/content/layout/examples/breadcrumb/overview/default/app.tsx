import * as React from 'react';
import { Breadcrumb, BreadcrumbLinkMouseEvent, BreadcrumbLinkKeyDownEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { homeIcon } from '@progress/kendo-svg-icons';
import './styles.css';

interface DataModel {
    id: string;
    text?: string;
    icon?: React.ReactNode;
}

const allItems: DataModel[] = [
    { id: 'home', icon: <SvgIcon icon={homeIcon} /> },
    { id: 'shop', text: 'Shop' },
    { id: 'electronics', text: 'Electronics' },
    { id: 'laptops', text: 'Laptops' },
    { id: 'ultrabooks', text: 'Ultrabooks' }
];

const App = () => {
    const [data, setData] = React.useState<DataModel[]>(allItems);

    const handleItemSelect = (event: BreadcrumbLinkMouseEvent) => {
        const index = data.findIndex((item) => item.id === event.id);
        setData(data.slice(0, index + 1));
    };

    const handleKeyDown = (event: BreadcrumbLinkKeyDownEvent) => {
        if (event.nativeEvent.key === 'Enter') {
            const index = data.findIndex((item) => item.id === event.id);
            setData(data.slice(0, index + 1));
        }
    };

    const currentPage = data[data.length - 1];

    return (
        <div className="bc-shell">
            <div className="bc-topbar">
                <Breadcrumb data={data} onItemSelect={handleItemSelect} onKeyDown={handleKeyDown} />
                <Button fillMode="flat" size="small" onClick={() => setData(allItems)}>
                    Reset
                </Button>
            </div>
            <div className="bc-page">
                <h3 className="bc-page-title">{currentPage.text || 'Home'}</h3>
                <p className="bc-page-hint">Click a breadcrumb item to navigate back to that level.</p>
            </div>
        </div>
    );
};

export default App;
