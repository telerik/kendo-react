import React, { useCallback, useMemo } from 'react';
import {
  Grid,
  GridColumn,
  GridToolbar,
  GridToolbarColumnsChooser,
  GridToolbarFilter,
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { gearIcon, plusIcon } from '@progress/kendo-svg-icons';
import MyCommandCell from './MyCommandCell';
import { deleteProductMutation, getProductsQuery } from '../queries/queries';
import { useMutation, useQuery } from '@apollo/client';

const currencyCell = (props) => (
  <td className="product-price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.dataItem.UnitPrice)}</td>
);

export default function GridContainer({ onAddProduct, onNotification, onProductSelect }) {
  const { data, error, loading, refetch } = useQuery(getProductsQuery);
  const [deleteProduct] = useMutation(deleteProductMutation);

  const remove = useCallback(async (dataItem) => {
    try {
      await deleteProduct({
        variables: { ProductID: dataItem.ProductID },
        refetchQueries: [{ query: getProductsQuery }],
      });
      onNotification(`Removed ${dataItem.ProductName}.`);
    } catch (mutationError) {
      onNotification(`Unable to remove ${dataItem.ProductName}. ${mutationError.message}`, 'error');
    }
  }, [deleteProduct, onNotification]);

  const CommandCell = useMemo(() => MyCommandCell(remove), [remove]);
  const products = data?.products ?? [];

  return (
    <section className="products-grid" aria-labelledby="products-grid-title">
      <div className="panel-heading panel-heading--grid">
        <div>
          <p className="panel-heading__eyebrow">Catalog</p>
          <h2 id="products-grid-title">All products</h2>
          <p>{loading ? 'Loading products...' : `${products.length} products available`}</p>
        </div>
        <Button fillMode="outline" svgIcon={plusIcon} onClick={onAddProduct}>Add product</Button>
      </div>

      {error ? (
        <div className="data-state" role="alert">
          <h3>We could not load products</h3>
          <p>{error.message}</p>
          <Button themeColor="primary" onClick={() => refetch()}>Try again</Button>
        </div>
      ) : (
        <Grid
          data={products}
          onRowClick={(event) => onProductSelect(event.dataItem)}
          dataItemKey="ProductID"
          autoProcessData
          navigatable
          pageable={{ buttonCount: 5, pageSizes: true }}
          resizable
        >
          <GridToolbar>
            <GridToolbarFilter svgIcon={gearIcon} />
            <GridToolbarColumnsChooser />
          </GridToolbar>
          <GridColumn field="ProductID" title="ID" width="96px" />
          <GridColumn field="ProductName" title="Product name" />
          <GridColumn field="UnitPrice" title="Unit price" width="136px" cells={{ data: currencyCell }} />
          <GridColumn field="UnitsInStock" title="In stock" width="120px" />
          <GridColumn cells={{ data: CommandCell }} width="112px" />
        </Grid>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="data-state">
          <h3>No products yet</h3>
          <p>Add the first product to begin building the catalog.</p>
          <Button themeColor="primary" onClick={onAddProduct}>Add product</Button>
        </div>
      )}
    </section>
  );
}
