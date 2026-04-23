import * as React from 'react';
import {
    Grid,
    GridCustomCellProps,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridDetailRowProps
} from '@progress/kendo-react-grid';
import { process, State } from '@progress/kendo-data-query';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';
import { Product } from './gd-interfaces';
import { GridToolbar } from './toolbar';
import { Checkbox } from '@progress/kendo-react-inputs';

const DetailComponent = (props: GridDetailRowProps) => {
    const dataItem = props.dataItem;
    return (
        <section>
            <p>
                <strong>In Stock:</strong> {dataItem.UnitsInStock} units
            </p>
            <p>
                <strong>On Order:</strong> {dataItem.UnitsOnOrder} units
            </p>
            <p>
                <strong>Reorder Level:</strong> {dataItem.ReorderLevel} units
            </p>
            <p>
                <strong>Discontinued:</strong> {dataItem.Discontinued}
            </p>
            <p>
                <strong>Category:</strong> {dataItem.Category.CategoryName} - {dataItem.Category.Description}
            </p>
        </section>
    );
};

const initialDataState: State = {
    sort: [{ field: 'code', dir: 'asc' }],
    take: 10,
    skip: 0
};

const App = () => {
    const [data, setData] = React.useState<Product[]>(products);
    const [dataState, setDataState] = React.useState<State>(initialDataState);

    let gridPDFExport: GridPDFExport | null;
    let excelExport: ExcelExport | null;

    const exportPDF = () => {
        if (gridPDFExport !== null) {
            gridPDFExport.save();
        }
    };

    const grid = (
        <Grid
            pageable={true}
            sortable={true}
            reorderable={true}
            data={process(data, dataState)}
            dataItemKey="ProductID"
            {...dataState}
            onDataStateChange={(e: GridDataStateChangeEvent) => {
                setDataState(e.dataState);
            }}
            detail={DetailComponent}
            style={{ height: '600px' }}
            navigatable={true}
        >
            <GridToolbar>
                <Button onClick={exportPDF}>Export PDF</Button>
                <Button onClick={() => excelExport?.save()}>Export to Excel</Button>
            </GridToolbar>
            <Column field="ProductID" title="ID" width="80px" filterable={false} />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="UnitPrice" title="Price" filter="numeric" width="150px" />
            <Column field="UnitsInStock" title="In stock" filter="numeric" width="150px" />
            <Column
                field="Discontinued"
                filter="boolean"
                cells={{
                    data: (props: GridCustomCellProps) => (
                        <td {...props.tdProps}>
                            <Checkbox disabled={true} checked={props.dataItem[props.field || '']} />
                        </td>
                    )
                }}
            />
        </Grid>
    );

    return (
        <div>
            <GridPDFExport
                ref={(pdfExport) => {
                    gridPDFExport = pdfExport;
                }}
            >
                {grid}
            </GridPDFExport>
            <ExcelExport
                data={products}
                ref={(excelExporter) => {
                    excelExport = excelExporter;
                }}
            >
                {grid}
            </ExcelExport>
        </div>
    );
};

export default App;
