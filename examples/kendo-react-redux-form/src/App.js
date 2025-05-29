import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from './data/order.json';
import ReduxProductsForm from './components/ReduxForm'
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

class App extends Component {
    onSubmit = (data) => {
        alert('Form submitted, please check browser console');
        console.log(data);
    }

    render() {
        const { OrderDate, RequiredDate, ShippedDate, ...rest } = data;
        const parsedData = {
            OrderDate: new Date(OrderDate),
            RequiredDate: new Date(RequiredDate),
            ShippedDate: new Date(ShippedDate),
            ...rest
        };

        return (
            <div className="App row m-2">
                <ReduxProductsForm
                    onSubmit={this.onSubmit}
                    initialFormValues={parsedData} />
            </div>
        );
    }
}

export default connect()(App);
