import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from '@progress/kendo-react-buttons';
import FormGrid from './FormGrid';
import products from './../data/products.json';
import {
    KendoInput,
    KendoNumericTextBox,
    KendoDatePicker,
} from './Editors';
import { required, minValue } from './validations';

const minValueZero = minValue(0);

let ReduxProductsForm = props => {
    const { handleSubmit, reset } = props

    return (<div className="col-md-12 col-sm-12 col-xs-12">
        <div className="header">
            <h5>Order</h5>
        </div>
        <form className="k-form" >
            <fieldset>
                <Field
                    name="OrderID"
                    label={"Order ID"}
                    component={KendoInput}
                    disabled={true}
                />
                <Field
                    name="CustomerID"
                    label={"Customer ID"}
                    component={KendoInput}
                    disabled={true}
                />
                <Field
                    name="OrderDate"
                    label={"Order Date"}
                    component={KendoDatePicker}
                    validate={[required]}
                />
                <Field
                    name="Freight"
                    label={"Freight"}
                    component={KendoNumericTextBox}
                    validate={[required, minValueZero]}
                />
                <Field
                    name="ShipName"
                    label={"Ship Name"}
                    component={KendoInput}
                    validate={[required]}
                />
                <h6>Order Products</h6>
                <FieldArray
                    name={'Details'}
                    component={FormGrid}
                    idField={'ProductID'}
                    editField={'isInEdit'}
                    defaultValue={{
                        Quantity: 0,
                        Discount: 0
                    }}
                    columns={[
                        {
                            field: 'Product',
                            title: 'Product',
                            editable: true,
                            editorType: 'dropdownlist',
                            editorOptions: {
                                data: products,
                                textField: 'ProductName',
                                dataItemKey: 'ProductID',
                                style: { width: '260px' }
                            }
                        }, {
                            field: 'Quantity',
                            title: 'Quantity',
                            editable: true
                        }, {
                            field: 'Discount',
                            title: 'Discount',
                            editable: true,
                            editorType: 'numeric'
                        }
                    ]}
                />
                <div className="text-right">
                    <Button type="submit" onClick={handleSubmit} themeColor={"primary"} >
                        Submit
            </Button>
                    <Button onClick={reset} >
                        Reset
            </Button>
                </div>
            </fieldset>
        </form>
    </div>);
}

ReduxProductsForm = reduxForm({
    form: 'order'
})(ReduxProductsForm)

ReduxProductsForm = connect((state, initialProps) => ({
    initialValues: initialProps.initialFormValues ? initialProps.initialFormValues : {}
})
)(ReduxProductsForm);

export default ReduxProductsForm