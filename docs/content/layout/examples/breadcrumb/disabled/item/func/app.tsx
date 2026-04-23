import * as React from 'react';
import { Breadcrumb, BreadcrumbLinkMouseEvent, BreadcrumbLinkKeyDownEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

interface DataModel {
    id: string;
    text?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
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
        text: 'Computer',
        disabled: true
    },
    {
        id: 'gaming',
        text: 'Gaming',
        disabled: true
    },
    {
        id: 'keyboard',
        text: 'Keyboard'
    }
];

const App = () => {
    const [data, setData] = React.useState<DataModel[]>(items);

    const handleItemSelect = (event: BreadcrumbLinkMouseEvent) => {
        const itemIndex: number = data.findIndex((curValue) => curValue.id === event.id);
        const newData: DataModel[] = data.slice(0, itemIndex + 1);

        setData(newData);
    };

    const handleButtonClick = (event: React.MouseEvent) => {
        if (event) {
            setData(items);
        }
    };

    const handleKeyDown = (event: BreadcrumbLinkKeyDownEvent) => {
        if (event.nativeEvent.keyCode === 13) {
            const itemIndex = data.findIndex((curValue) => curValue.id === event.id);
            const newData = data.slice(0, itemIndex + 1);
    
            setData(newData);
        }
    };

    return (
      <div>
        <Breadcrumb 
          data={data}
          onItemSelect={handleItemSelect}
          onKeyDown={handleKeyDown}
        />
        <br />
        <Button onClick={handleButtonClick}>Refresh Data</Button>
      </div>
    );
};

export default App;
