import React, {Component} from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { graphql } from '@apollo/client/react/hoc';
import flowRight from 'lodash.flowright'; 
import { addProductMutation, getProductsQuery, updateProductMutation} from '../queries/queries';

class ProductsForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ProductName: "",
            UnitPrice: 0,
            UnitsInStock: 0,
            internalUpdate: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static getDerivedStateFromProps(nextProps, state) {
        if(state.internalUpdate){
            state.internalUpdate = false
            return state
        }

        if(nextProps.inEdit){
            return {
                ProductName:nextProps.selectedItem.ProductName,
                UnitPrice:nextProps.selectedItem.UnitPrice,
                UnitsInStock:nextProps.selectedItem.UnitsInStock,
            }
        }
        else{
            return {
                ProductName:"",
                UnitPrice:0,
                UnitsInStock:0,
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.props.inEdit){
            this.props.updateProductMutation({
                variables: {
                    ProductID: this.props.selectedItem.ProductID,
                    ProductName: this.state.ProductName,
                    UnitPrice: this.state.UnitPrice,
                    UnitsInStock: this.state.UnitsInStock
                },
                refetchQueries: [{ query: getProductsQuery }]
            });
        }
        else{
            this.props.addProductMutation({
                variables: {
                    ProductName: this.state.ProductName,
                    UnitPrice: this.state.UnitPrice,
                    UnitsInStock: this.state.UnitsInStock
                },
                refetchQueries: [{ query: getProductsQuery }]
            });
        }
        this.props.addItem()
        this.setState({
            ProductName: "",
            UnitPrice: 0,
            UnitsInStock: 0,
            internalUpdate: true
        })
    }
    render() {
        return (
            <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="header">
                    <h5>Product</h5>
                </div>
                    <form className="k-form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <Label className="k-form-field">
                                <span>Product Name</span>
                                <Input
                                    required
                                    className="k-textbox"
                                    placeholder="Product Name"
                                    value={this.state.ProductName}
                                    onChange={(e) => {
                                    this.setState({ProductName: e.target.value, internalUpdate: true})
                                }}/>
                            </Label>
                            <Label className="k-form-field">
                                <span>Unit Price</span>
                                <NumericTextBox
                                    style={{width: "100%"}}
                                    value={this.state.UnitPrice}
                                    onChange={(e) => {
                                    this.setState({UnitPrice: e.value, internalUpdate: true})
                                }}/>
                            </Label>
                            <Label className="k-form-field">
                                <span>Units in Stock</span>
                                <NumericTextBox
                                    value={this.state.UnitsInStock}
                                    style={{width: "100%"}}
                                    onChange={(e) => {
                                    this.setState({UnitsInStock: e.value, internalUpdate: true})
                                }}/>
                            </Label>
                        </fieldset>
                    <div className="text-right">
                        <Button className="k-button k-primary" type="submit">{!this.props.inEdit
                            ? "Add new product"
                            : "Update"
                            }</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default flowRight(
    graphql(addProductMutation, { name: "addProductMutation" }),
    graphql(getProductsQuery, { name: "getProductsQuery" }),
    graphql(updateProductMutation, { name: "updateProductMutation" })
)(ProductsForm);