import * as React from 'react';
import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';
import { dataCategories, dataProducts, dataOrders } from './data';

const App = () => {
    const [state, setState] = React.useState({
        category: null,
        product: null,
        order: null,
        orders: dataOrders,
        products: dataProducts
    });

    const categoryChange = (event: ComboBoxChangeEvent) => {
        const category = event.target.value;
        const products = category ? dataProducts.filter((product) => product.categoryId === category.categoryId) : [];

        setState({
            ...state,
            category: category,
            products: products,
            product: null,
            order: null
        });
    };

    const productChange = (event: ComboBoxChangeEvent) => {
        const product = event.target.value;
        const orders = product ? dataOrders.filter((order) => order.productId === product.productId) : [];

        setState({
            ...state,
            product: product,
            orders: orders,
            order: null
        });
    };

    const orderChange = (event: ComboBoxChangeEvent) => {
        setState({ ...state, order: event.target.value });
    };

    const category = state.category;
    const product = state.product;
    const order = state.order;

    const hasCategory = category;
    const hasProduct = product;

    return (
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div>
                Categories
                <br />
                <ComboBox
                    style={{ width: '300px' }}
                    data={dataCategories}
                    textField="categoryName"
                    onChange={categoryChange}
                    placeholder="Select Category ..."
                    value={category}
                />
            </div>
            <div>
                Products
                <br />
                <ComboBox
                    style={{ width: '300px' }}
                    disabled={!hasCategory}
                    data={state.products}
                    textField="productName"
                    onChange={productChange}
                    placeholder="Select Product ..."
                    value={product}
                />
            </div>
            <div>
                Orders
                <br />
                <ComboBox
                    style={{ width: '300px' }}
                    disabled={!hasProduct}
                    data={state.orders}
                    textField="orderName"
                    onChange={orderChange}
                    placeholder="Select Order ..."
                    value={order}
                />
            </div>
        </div>
    );
};

export default App;
