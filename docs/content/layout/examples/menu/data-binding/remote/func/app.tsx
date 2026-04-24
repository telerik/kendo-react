import * as React from 'react';
import { Menu } from '@progress/kendo-react-layout';

const url = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories?$expand=Products';

// convert the received data to menu items.
function mapItems(items: any) {
    return items.map((item: { CategoryName: any; Products: any[]; }) => {
        const result: any = { text: item.CategoryName };

        // convert the children data to menu items.
        if (item.Products) {
            result.items = item.Products.map(childItem => { return { text: childItem.ProductName }; });
        }

        return result;
    });
}

const App = () => {
    const [items, setItems] = React.useState<Array<any>>([])

    React.useEffect(() =>{
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setItems(mapItems(json.value));
            });
    },[])

    return (
      <div>
        <Menu items={items} />
      </div>
    );
}

export default App;
