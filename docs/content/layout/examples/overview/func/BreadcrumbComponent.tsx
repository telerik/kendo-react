import * as React from 'react';
import { Breadcrumb } from '@progress/kendo-react-layout';

const BreadcrumbComponent = () => {
    const items = [
        {
            id: 'home',
            title: 'Home',
            iconClass: 'k-i-home'
        },
        {
            id: 'products',
            title: 'Products'
        },
        {
            id: 'computer',
            title: 'Computer'
        },
        {
            id: 'mouse',
            title: 'Mouse'
        },
        {
            id: 'keyboard',
            title: 'Keyboard'
        },
        {
            id: 'gaming',
            title: 'Gaming'
        }
    ];

    const [data, setData] = React.useState(items);

    const handleItemSelect = (event) => {
        const itemIndex = data.findIndex((curValue) => curValue.id === event.target.props.id);
        const newData = data.slice(0, itemIndex + 1);

        setData(newData);
    };

    return (
      <Breadcrumb 
        data={data}
        textField={'title'}
        onItemSelect={handleItemSelect}
        />
    );
};
    
export default BreadcrumbComponent;
