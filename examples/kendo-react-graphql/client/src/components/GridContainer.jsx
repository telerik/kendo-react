import React, { useCallback, useMemo } from 'react';
import { Grid, GridColumn, GridToolbar, GridToolbarFilter, GridToolbarColumnsChooser } from '@progress/kendo-react-grid';
import { gearIcon } from '@progress/kendo-svg-icons';
import MyCommandCell from './MyCommandCell'
import { getProductsQuery, deleteProductMutation } from '../queries/queries';
import { useMutation, useQuery } from '@apollo/client';

const GridContainer = ({ changeRowSelection }) => {
    const { data, loading } = useQuery(getProductsQuery);
    const [deleteProduct] = useMutation(deleteProductMutation);

    const remove = useCallback((dataItem) => {
        deleteProduct({
            variables: {
                ProductID: dataItem.ProductID,
            },
            refetchQueries: [{ query: getProductsQuery }]
        });
    }, [deleteProduct]);

    const CommandCell = useMemo(() => MyCommandCell(remove), [remove]);

    return (
        <section className="products-grid">
            <div className="section-header">
                <h5>Data</h5>
            </div>
            <Grid data={loading ? [] : data?.products ?? []}
                onRowClick={(event) => changeRowSelection(event.dataItem)}
                style={{ maxHeight: "600px" }}
                adaptive={true}
                dataItemKey="ProductID"
                autoProcessData={true}
                navigatable={true}
            >
                <GridToolbar>
                    <GridToolbarFilter svgIcon={gearIcon} />
                    <GridToolbarColumnsChooser />
                </GridToolbar>
                <GridColumn field="ProductID" title="ID" width="100px" />
                <GridColumn field="ProductName" title="Product Name"/>
                <GridColumn field="UnitPrice" title="Unit Price" width="150px" />
                <GridColumn field="UnitsInStock" title="Units in Stock" width="150px"/>
                <GridColumn cells={{ data: CommandCell }} width="120px" />
            </Grid>
        </section>
    );
};

export default GridContainer;