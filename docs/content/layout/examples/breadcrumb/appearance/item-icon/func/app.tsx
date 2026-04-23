import * as React from 'react';
import { Breadcrumb, BreadcrumbLinkMouseEvent, BreadcrumbLinkKeyDownEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
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
        icon: <SvgIcon icon={homeIcon} />,
    },
    {
        id: 'user1',
        text: 'Favorites',
        icon: <img src="https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png" alt="KendoReact BreadCrumb Star Icon" className="k-image" />
    },
    {
        id: 'user2',
        icon: <img src="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/baseball.png" alt="KendoReact BreadCrumb BaseBall Icon" className="k-image" />
    },
    {
        id: 'user3',
        icon: <img src="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/golf.png" alt="KendoReact BreadCrumb Golf Icon" className="k-image" />
    },
    {
        id: 'user4',
        icon: <img src="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/swimming.png" alt="KendoReact BreadCrumb Swimming Icon" className="k-image" />
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
