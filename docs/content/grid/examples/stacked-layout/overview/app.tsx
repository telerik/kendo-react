import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridToolbarSort,
    GridToolbarFilter,
    GridToolbarColumnsChooser,
    GridToolbarSpacer
} from '@progress/kendo-react-grid';
import { Avatar } from '@progress/kendo-react-layout';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { products } from './products';
import { countryImages } from './countries';

import './styles.css';

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
};

const getAvatar = (id: number): string => {
    return `https://demos.telerik.com/kendo-react-ui/assets/listview/products/${id}.jpg`;
};

const getFlagURL = (countryCode: string): string => {
    const code = countryCode.toUpperCase();
    return countryImages[code] || '';
};

/**
 * Custom cell for Product Name - displays Avatar with product image and name
 */
const ProductNameCell = (props) => {
    const { dataItem, stackedCellProps } = props;
    if (!dataItem) return null;

    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{props.title}</div>
            <div className="k-grid-stack-content">
                <div className="wrapper">
                    <Avatar type="image" size="medium">
                        <img src={getAvatar(dataItem.ProductID)} alt={dataItem.ProductName} />
                    </Avatar>
                    <span className="product-name">{dataItem.ProductName}</span>
                </div>
            </div>
        </div>
    );
};

/**
 * Custom cell for Unit Price - displays formatted currency
 */
const UnitPriceCell = (props) => {
    const { dataItem, stackedCellProps } = props;
    if (!dataItem) return null;

    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{props.title}</div>
            <div className="k-grid-stack-content">
                <span className="price-text">{formatCurrency(dataItem.UnitPrice)}</span>
            </div>
        </div>
    );
};

/**
 * Custom cell for In Stock status - displays colored badge
 */
const InStockCell = (props) => {
    const { dataItem, stackedCellProps } = props;
    if (!dataItem) return null;

    const isAvailable = !dataItem.Discontinued;
    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{props.title}</div>
            <div className="k-grid-stack-content">
                <span className={`badge ${isAvailable ? 'badge-success' : 'badge-danger'}`}>
                    {isAvailable ? 'available' : 'not available'}
                </span>
            </div>
        </div>
    );
};

/**
 * Custom cell for Target Sales - displays ProgressBar
 */
const TargetSalesCell = (props) => {
    const { dataItem, stackedCellProps } = props;
    if (!dataItem) return null;

    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{props.title}</div>
            <div className="k-grid-stack-content">
                <ProgressBar value={dataItem.TargetSales} style={{ width: '95%' }} />
            </div>
        </div>
    );
};

/**
 * Custom cell for Country - displays flag image
 */
const CountryCell = (props) => {
    const { dataItem, stackedCellProps } = props;
    if (!dataItem?.Country) return null;

    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{props.title}</div>
            <div className="k-grid-stack-content">
                <img
                    className="flag"
                    src={getFlagURL(dataItem.Country.CountryNameShort)}
                    alt={dataItem.Country.CountryNameLong}
                    height="15"
                    width="22"
                />
            </div>
        </div>
    );
};

/**
 * Custom cell for Units - displays styled text
 */
const UnitsCell = (props) => {
    const { dataItem, stackedCellProps } = props;
    if (!dataItem) return null;

    return (
        <div {...stackedCellProps}>
            <div className="k-grid-stack-header">{props.title}</div>
            <div className="k-grid-stack-content">
                <span className="units-text">{dataItem.UnitsInStock}</span>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Grid
            data={products}
            dataItemKey="ProductID"
            dataLayoutMode="stacked"
            stackedLayoutSettings={{ cols: ['3fr', '1fr', '1fr'] }}
            style={{ height: '620px' }}
            pageable={true}
            defaultSkip={0}
            defaultTake={5}
            autoProcessData={true}
            selectable={{
                enabled: true,
                mode: 'single'
            }}
            sortable={true}
            navigatable={true}
            editable={{ enabled: true, mode: 'incell' }}
        >
            <GridToolbar>
                <GridToolbarSort />
                <GridToolbarFilter />
                <GridToolbarSpacer />
                <GridToolbarColumnsChooser />
            </GridToolbar>
            <Column field="ProductName" title="Product Name" cells={{ stackedData: ProductNameCell }} editable={true} />
            <Column field="UnitPrice" title="Unit Price" cells={{ stackedData: UnitPriceCell }} editable={true} />
            <Column field="Discontinued" title="In Stock" cells={{ stackedData: InStockCell }} />
            <Column field="TargetSales" title="Target Sales" cells={{ stackedData: TargetSalesCell }} />
            <Column field="Country.CountryNameLong" title="Country" cells={{ stackedData: CountryCell }} />
            <Column field="UnitsInStock" title="Units" cells={{ stackedData: UnitsCell }} editable={true} />
        </Grid>
    );
};

export default App;
