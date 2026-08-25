import React from 'react';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Badge } from '@progress/kendo-react-indicators';
import { PageHeader } from '../components/PageHeader';
import { KpiCard } from '../components/KpiCard';

const inventory = [
    { id: 1, sku: 'BEAN-ETH-01', description: 'Ethiopia Yirgacheffe, washed 60 kg', onHand: 18, reserved: 6, location: 'A-01-04', supplier: 'Highland Origins', movement: 'Aug 24, 2026' },
    { id: 2, sku: 'BEAN-COL-22', description: 'Colombia Huila, honey process 60 kg', onHand: 7, reserved: 5, location: 'A-03-02', supplier: 'Sierra Verde', movement: 'Aug 25, 2026' },
    { id: 3, sku: 'BAG-12OZ-KR', description: 'Kraft valve bags, 12 oz', onHand: 0, reserved: 0, location: 'P-02-11', supplier: 'Pacific Pack', movement: 'Aug 19, 2026' },
    { id: 4, sku: 'BEAN-BRA-15', description: 'Brazil Cerrado, natural 60 kg', onHand: 42, reserved: 8, location: 'A-02-08', supplier: 'Fazenda Direct', movement: 'Aug 23, 2026' },
    { id: 5, sku: 'LID-12OZ-BK', description: 'Compostable black lids, 1,000 units', onHand: 196, reserved: 24, location: 'P-04-01', supplier: 'Pacific Pack', movement: 'Aug 22, 2026' }
];

const stockStatus = (item) => {
    if (item.onHand === 0) return { label: 'Out of stock', themeColor: 'error' };
    if (item.onHand - item.reserved <= 4) return { label: 'Low stock', themeColor: 'warning' };
    if (item.onHand > 150) return { label: 'Overstock', themeColor: 'info' };
    return { label: 'In stock', themeColor: 'success' };
};

const StatusCell = (props) => {
    if (props.rowType !== 'data') return null;
    const status = stockStatus(props.dataItem);
    return <td><Badge themeColor={status.themeColor} shape="rounded">{status.label}</Badge></td>;
};

const AvailableCell = (props) => {
    if (props.rowType !== 'data') return null;
    return <td className="numeric-cell">{props.dataItem.onHand - props.dataItem.reserved}</td>;
};

const Inventory = () => {
    const [query, setQuery] = React.useState('');
    const filteredInventory = inventory.filter((item) =>
        [item.sku, item.description, item.location, item.supplier]
            .some((value) => value.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <main className="main-content inventory-page">
            <PageHeader title="Inventory management" description="Track coffee, packaging, and warehouse supplies across every active bin." meta="Last updated: just now" />
            <section className="kpi-grid" aria-label="Inventory summary">
                <KpiCard label="TOTAL SKUS" value="1,248" detail="▲ 34 added this quarter" />
                <KpiCard label="LOW-STOCK ITEMS" value="12" detail="▲ 3 need review today" status="warning" />
                <KpiCard label="INVENTORY VALUE" value="$486,240" detail="▼ 2.1% vs last month" status="error" />
            </section>
            <section className="data-section" aria-labelledby="inventory-grid-title">
                <div className="widget-header">
                    <div>
                        <h2 id="inventory-grid-title">Inventory overview</h2>
                        <p>Available stock equals on-hand quantity less committed orders.</p>
                    </div>
                    <Button themeColor="primary">Create purchase order</Button>
                </div>
                <Grid data={filteredInventory} dataItemKey="id" sortable pageable resizable style={{ height: 430 }}>
                    <GridToolbar>
                        <Input aria-label="Search inventory" placeholder="Search SKU, supplier, or bin" value={query} onChange={(event) => setQuery(event.value)} />
                    </GridToolbar>
                    <Column field="sku" title="SKU" width="150px" />
                    <Column field="description" title="Item description" />
                    <Column field="onHand" title="On hand" width="105px" className="numeric-cell" />
                    <Column field="reserved" title="Reserved" width="105px" className="numeric-cell" />
                    <Column title="Available" width="105px" cells={{ data: AvailableCell }} />
                    <Column field="location" title="Bin" width="110px" />
                    <Column field="supplier" title="Supplier" width="150px" />
                    <Column title="Stock status" width="130px" cells={{ data: StatusCell }} />
                    <Column field="movement" title="Last movement" width="140px" />
                </Grid>
            </section>
        </main>
    );
};

export default Inventory;
