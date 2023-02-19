import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';

class ProductNameCell extends React.Component {
    render() {
        return (
            <td title={this.props.dataItem.ProductName}>
                {this.props.dataItem.ProductName}
            </td>
        );
    }
}
class ProductNameHeader extends React.Component {
    render() {
        return (
            <a className="k-link" onClick={this.props.onClick}>
            <span title={this.props.title}>{this.props.title}</span>
                {this.props.children}
            </a>
        );
    }
  }
class App extends React.Component {
    render() {
        return (
            <div>
                <Tooltip openDelay={100} position="right" anchorElement="target">
                    <Grid
                        style={{ height: '400px' }}
                        data={products}
                    >
                        <GridColumn field="ProductID" title="ID" width="40px" />
                        <GridColumn field="ProductName" title="Product Name" width="250px" cell={ProductNameCell} headerCell={ProductNameHeader}/>
                        <GridColumn field="Category.CategoryName" title="CategoryName" />
                        <GridColumn field="UnitPrice" title="Price" width="80px" />
                        <GridColumn field="UnitsInStock" title="In stock" width="80px" />
                    </Grid>
                </Tooltip>
            </div>
        );
    }
}
ReactDOM.render(
    <App/>, document.querySelector('my-app'));
