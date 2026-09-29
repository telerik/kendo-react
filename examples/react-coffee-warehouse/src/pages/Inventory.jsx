import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Badge } from '@progress/kendo-react-indicators';
import { useInternationalization, useLocalization } from '@progress/kendo-react-intl';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { KpiCard } from '../components/KpiCard';

const createLocalDate = (year, month, day) => new Date(year, month - 1, day);

const inventory = [
    { id: 1, sku: 'BEAN-ETH-01', descriptionKey: 'inventoryItem1Description', onHand: 18, reserved: 6, location: 'A-01-04', supplierKey: 'supplierHighlandOrigins', movement: createLocalDate(2026, 8, 24) },
    { id: 2, sku: 'BEAN-COL-22', descriptionKey: 'inventoryItem2Description', onHand: 7, reserved: 5, location: 'A-03-02', supplierKey: 'supplierSierraVerde', movement: createLocalDate(2026, 8, 25) },
    { id: 3, sku: 'BAG-12OZ-KR', descriptionKey: 'inventoryItem3Description', onHand: 0, reserved: 0, location: 'P-02-11', supplierKey: 'supplierPacificPack', movement: createLocalDate(2026, 8, 19) },
    { id: 4, sku: 'BEAN-BRA-15', descriptionKey: 'inventoryItem4Description', onHand: 42, reserved: 8, location: 'A-02-08', supplierKey: 'supplierFazendaDirect', movement: createLocalDate(2026, 8, 23) },
    { id: 5, sku: 'LID-12OZ-BK', descriptionKey: 'inventoryItem5Description', onHand: 196, reserved: 24, location: 'P-04-01', supplierKey: 'supplierPacificPack', movement: createLocalDate(2026, 8, 22) }
];

const stockStatus = (item) => {
    if (item.onHand === 0) return { key: 'outOfStock', themeColor: 'error' };
    if (item.onHand - item.reserved <= 4) return { key: 'lowStock', themeColor: 'warning' };
    if (item.onHand > 150) return { key: 'overstock', themeColor: 'info' };
    return { key: 'inStock', themeColor: 'success' };
};

const StatusCell = (props) => {
    const localizationService = useLocalization();
    if (props.rowType !== 'data') return null;
    const status = stockStatus(props.dataItem);
    return <td><Badge themeColor={status.themeColor} shape="rounded">{localizationService.toLanguageString(`custom.${status.key}`)}</Badge></td>;
};

const AvailableCell = (props) => {
    if (props.rowType !== 'data') return null;
    return <td className="numeric-cell">{props.dataItem.onHand - props.dataItem.reserved}</td>;
};

const Inventory = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = React.useState(() => searchParams.get('query') || '');
    const localizationService = useLocalization();
    const intlService = useInternationalization();
    const localizedInventory = inventory.map(item => ({
        ...item,
        description: localizationService.toLanguageString(`custom.${item.descriptionKey}`),
        supplier: localizationService.toLanguageString(`custom.${item.supplierKey}`),
        movement: intlService.formatDate(item.movement, 'MMM d, yyyy')
    }));
    const filteredInventory = localizedInventory.filter((item) =>
        [item.sku, item.description, item.location, item.supplier]
            .some((value) => value.toLowerCase().includes(query.toLowerCase()))
    );
    React.useEffect(() => {
        setQuery(searchParams.get('query') || '');
    }, [searchParams]);

    const clearSearch = React.useCallback(() => {
        setQuery('');
        setSearchParams({});
    }, [setSearchParams]);

    return (
        <main className="main-content inventory-page">
            <PageHeader
                title={localizationService.toLanguageString('custom.inventoryTitle')}
                description={localizationService.toLanguageString('custom.inventoryDescription')}
                meta={localizationService.toLanguageString('custom.inventoryLastUpdated')}
            />
            <section className="kpi-grid" aria-label={localizationService.toLanguageString('custom.inventorySummary')}>
                <KpiCard label={localizationService.toLanguageString('custom.totalSkus')} value={intlService.formatNumber(1248)} detail={localizationService.toLanguageString('custom.totalSkusDetail')} />
                <KpiCard label={localizationService.toLanguageString('custom.lowStockItems')} value={intlService.formatNumber(12)} detail={localizationService.toLanguageString('custom.lowStockItemsDetail')} status="warning" />
                <KpiCard label={localizationService.toLanguageString('custom.inventoryValue')} value={intlService.formatNumber(486240, 'c')} detail={localizationService.toLanguageString('custom.inventoryValueDetail')} status="error" />
            </section>
            <section className="data-section" aria-labelledby="inventory-grid-title">
                <div className="widget-header">
                    <div>
                        <h2 id="inventory-grid-title">{localizationService.toLanguageString('custom.inventoryOverview')}</h2>
                        <p>{localizationService.toLanguageString('custom.inventoryExplanation')}</p>
                    </div>
                    <Button themeColor="primary">{localizationService.toLanguageString('custom.createPurchaseOrder')}</Button>
                </div>
                <div className="inventory-filter">
                    <Input aria-label={localizationService.toLanguageString('custom.searchInventory')} placeholder={localizationService.toLanguageString('custom.searchInventoryPlaceholder')} value={query} onChange={(event) => setQuery(event.value)} />
                </div>
                {filteredInventory.length > 0 ? (
                        <Grid data={filteredInventory} dataItemKey="id" sortable pageable resizable style={{ height: 430 }}>
                            <Column field="sku" title={localizationService.toLanguageString('custom.sku')} width="150px" />
                            <Column field="description" title={localizationService.toLanguageString('custom.itemDescription')} />
                            <Column field="onHand" title={localizationService.toLanguageString('custom.onHand')} width="105px" className="numeric-cell" />
                            <Column field="reserved" title={localizationService.toLanguageString('custom.reserved')} width="105px" className="numeric-cell" />
                            <Column title={localizationService.toLanguageString('custom.available')} width="105px" cells={{ data: AvailableCell }} />
                            <Column field="location" title={localizationService.toLanguageString('custom.bin')} width="110px" />
                            <Column field="supplier" title={localizationService.toLanguageString('custom.supplier')} width="150px" />
                            <Column title={localizationService.toLanguageString('custom.stockStatus')} width="130px" cells={{ data: StatusCell }} />
                            <Column field="movement" title={localizationService.toLanguageString('custom.lastMovement')} width="140px" />
                        </Grid>
                    ) : (
                        <div className="inventory-empty-state" role="status">
                            <h3>{localizationService.toLanguageString('custom.inventoryEmptyTitle')}</h3>
                            <p>{localizationService.toLanguageString('custom.inventoryEmptyDescription')}</p>
                            <Button fillMode="flat" onClick={clearSearch}>
                                {localizationService.toLanguageString('custom.clearInventorySearch')}
                            </Button>
                        </div>
                )}
            </section>
        </main>
    );
};

export default Inventory;
