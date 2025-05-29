import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, GridColumn as Column, GridToolbar, GridToolbarSort, GridToolbarFilter } from '@progress/kendo-react-grid';
import { gearIcon } from '@progress/kendo-svg-icons';
import { change as formChange } from 'redux-form';
import { INDEXFIELD } from './Editors';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        formChange: bindActionCreators(formChange, dispatch)
    };
};

class GridHOC extends React.Component {
    render() {
        const data = this.props.fields.getAll().map((item, index) => {
            return {
                ...item,
                Product: item.Product.ProductName,
                [INDEXFIELD]: index
            };
        });

        return (
            <Grid
            style={{ minWidth: '500px' }}
            adaptive={true}
            dataItemKey="index"
            data={data}
            autoProcessData={true}
            navigatable={true}
            sortable={{ mode: 'multiple' }}
        >
            <GridToolbar>
                <GridToolbarSort icon="gear" />
                <GridToolbarFilter svgIcon={gearIcon} />
            </GridToolbar>
            <Column field="Product" title="Product" />
            <Column field="Quantity" title="Quantity" />
            <Column field="Discount" title="Discount" />
        </Grid>
        );
    }
}

GridHOC = connect(mapStateToProps, mapDispatchToProps)(GridHOC);

export default GridHOC