import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridDataStateChangeEvent,
    GridDetailExpandChangeEvent,
    GridToolbar,
    GridToolbarColumnsChooser,
    GridToolbarFilter,
    GridToolbarCheckboxFilter,
    GridToolbarSort,
    GridToolbarGroup,
    GridToolbarAIAssistant,
    GridToolbarSeparator,
    GridColumnMenuSort,
    GridColumnMenuFilter,
    GridColumnMenuColumnsChooser,
    GridColumnMenuCheckboxFilter,
    GridPdfExportButton,
    GridItemChangeEvent,
    GridEditChangeEvent,
    GridRowClickEvent
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { DetailExpandDescriptor, EditDescriptor } from '@progress/kendo-react-data-tools';

import { IntlProvider, LocalizationProvider, loadMessages, load } from '@progress/kendo-react-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
import esMessages from './gd-es';
loadMessages(esMessages, 'es-ES');

import { DataResult, process, State } from '@progress/kendo-data-query';
import { saveGridPDF } from '@progress/kendo-react-pdf';
import { plusIcon, pencilIcon, trashIcon } from '@progress/kendo-svg-icons';
import sampleProducts from './gd-sample-products';

// Add FirstOrderedOn dates to the sample data
const enhancedSampleProducts = sampleProducts.map((product, index) => ({
    ...product,
    FirstOrderedOn: new Date(2020 + (index % 4), index % 12, (index % 28) + 1),
    CategoryName: product.Category.CategoryName,
    SupplierName: `Supplier ${product.SupplierID}`,
    inEdit: false
}));

const initialDataState: State = {
    skip: 0,
    take: 7
};

const columnTitles = {
    'en-US': {
        ProductID: 'ID',
        ProductName: 'Product Name',
        FirstOrderedOn: 'First Ordered On',
        UnitPrice: 'Unit Price',
        CategoryName: 'Category'
    },
    'es-ES': {
        ProductID: 'ID',
        ProductName: 'Nombre del producto',
        FirstOrderedOn: 'Primero ordenado en',
        UnitPrice: 'Precio unitario',
        CategoryName: 'Categoría'
    }
};

const App = () => {
    const [dataState, setDataState] = React.useState(initialDataState);
    const [data, setData] = React.useState<DataResult>(process(enhancedSampleProducts, initialDataState));
    const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>({});
    const [editData, setEditData] = React.useState(enhancedSampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [editButton, setEditButton] = React.useState({ enabled: false, id: null });
    const [deleteButton, setDeleteButton] = React.useState({ enabled: false, id: null });

    const [locale, setLocale] = React.useState('en-US');

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        setData(process(editData, event.dataState));
        setDataState(event.dataState);
    };

    const toggleLocale = () => {
        setLocale(locale === 'en-US' ? 'es-ES' : 'en-US');
    };

    const handleDetailExpandChange = (event: GridDetailExpandChangeEvent) => {
        setDetailExpand(event.detailExpand);
    };

    const rowClick = (event: GridRowClickEvent) => {
        const inEditID = event.dataItem.ProductID;
        setEditButton({ enabled: true, id: inEditID });
        setDeleteButton({ enabled: true, id: inEditID });
    };

    const handleItemChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem.ProductID;
        const newData = editData.map((item) => {
            return item.ProductID === inEditID ? { ...item, ...event.dataItem } : item;
        });
        setEditData(newData);
        setData(process(newData, dataState));
    };

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    // Edit functionality using dialog mode
    const addNew = () => {
        const newDataItem = {
            ProductID: Math.max(...editData.map((p) => p.ProductID)) + 1,
            ProductName: '',
            UnitPrice: 0,
            CategoryName: '',
            FirstOrderedOn: new Date(),
            SupplierName: '',
            UnitsInStock: 0,
            UnitsOnOrder: 0,
            Discontinued: false
        };
        const newData = [newDataItem, ...editData];
        setEditData(newData);
        setData(process(newData, dataState));
        setEdit((edit) => ({ ...edit, [String(newDataItem.ProductID)]: true }));
    };

    const editRecord = () => {
        setEdit({ [String(editButton.id)]: true });
    };

    const removeRecord = () => {
        const dataItem = editData.find((item) => item.ProductID === deleteButton.id);
        if (dataItem) {
            const newData = editData.filter((item) => item.ProductID !== deleteButton.id);
            setEditData(newData);
            setData(process(newData, dataState));
            setDeleteButton({ enabled: false, id: null });
            setEditButton({ enabled: false, id: null });
        }
    };

    const handlePdfExport = async (event) => {
        const callBack = () => {
            console.log('PDF Exported');
        };

        // we could load the @progress/kendo-react-pdf module dynamically
        // const { saveGridPDF } = await import('@progress/kendo-react-pdf');
        saveGridPDF(event.target, {}, callBack);
    };

    const DetailComponent = (props: any) => {
        const detailLabels = {
            'en-US': {
                title: 'Product Details',
                productId: 'Product ID:',
                category: 'Category:',
                supplier: 'Supplier:',
                unitsInStock: 'Units in Stock:',
                unitsOnOrder: 'Units on Order:',
                discontinued: 'Discontinued:',
                yes: 'Yes',
                no: 'No'
            },
            'es-ES': {
                title: 'Detalles del Producto',
                productId: 'ID del Producto:',
                category: 'Categoría:',
                supplier: 'Proveedor:',
                unitsInStock: 'Unidades en Stock:',
                unitsOnOrder: 'Unidades en Pedido:',
                discontinued: 'Descontinuado:',
                yes: 'Sí',
                no: 'No'
            }
        };

        const labels = detailLabels[locale];

        return (
            <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
                <h4>{labels.title}</h4>
                <p>
                    <strong>{labels.productId}</strong> {props.dataItem.ProductID}
                </p>
                <p>
                    <strong>{labels.category}</strong> {props.dataItem.CategoryName}
                </p>
                <p>
                    <strong>{labels.supplier}</strong> {props.dataItem.SupplierName}
                </p>
                <p>
                    <strong>{labels.unitsInStock}</strong> {props.dataItem.UnitsInStock}
                </p>
                <p>
                    <strong>{labels.unitsOnOrder}</strong> {props.dataItem.UnitsOnOrder}
                </p>
                <p>
                    <strong>{labels.discontinued}</strong> {props.dataItem.Discontinued ? labels.yes : labels.no}
                </p>
            </div>
        );
    };

    const MyColumnMenu = (props: any) => (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} />
            <GridColumnMenuCheckboxFilter {...props} data={data.data} />
            <GridColumnMenuColumnsChooser {...props} />
        </div>
    );

    const titles = columnTitles[locale];

    return (
        <div>
            <div className="example-config" style={{ marginBottom: '20px' }}>
                <Button onClick={toggleLocale}>
                    {locale === 'en-US' ? 'Translate to Spanish' : 'Translate to English'}
                </Button>
            </div>
            <LocalizationProvider language={locale}>
                <IntlProvider locale={locale === 'es-ES' ? 'es' : 'en'}>
                    <Grid
                        style={{ height: '520px' }}
                        sortable={true}
                        filterable={true}
                        groupable={true}
                        reorderable={true}
                        resizable={true}
                        adaptive={true}
                        detail={DetailComponent}
                        detailExpand={detailExpand}
                        onDetailExpandChange={handleDetailExpandChange}
                        dataItemKey="ProductID"
                        onPdfExport={handlePdfExport}
                        pdf={true}
                        editable={{
                            mode: 'dialog',
                            enabled: true
                        }}
                        edit={edit}
                        onEditChange={handleEditChange}
                        onItemChange={handleItemChange}
                        onRowClick={rowClick}
                        selectable={{
                            enabled: true,
                            mode: 'single'
                        }}
                        pageable={{
                            pageSizes: [5, 7, 10],
                            buttonCount: 5,
                            info: true,
                            type: 'numeric',
                            previousNext: true
                        }}
                        data={data}
                        {...dataState}
                        onDataStateChange={dataStateChange}
                    >
                        <GridToolbar>
                            <GridToolbarAIAssistant />
                            <GridToolbarSeparator />
                            <Button onClick={addNew} svgIcon={plusIcon}>
                                {locale === 'en-US' ? 'Add New' : 'Agregar Nuevo'}
                            </Button>
                            <Button onClick={editRecord} disabled={!editButton.enabled} svgIcon={pencilIcon}>
                                {locale === 'en-US' ? 'Edit' : 'Editar'}
                            </Button>
                            <Button onClick={removeRecord} disabled={!deleteButton.enabled} svgIcon={trashIcon}>
                                {locale === 'en-US' ? 'Remove' : 'Eliminar'}
                            </Button>
                            <GridToolbarSeparator />
                            <GridToolbarSort />
                            <GridToolbarGroup />
                            <GridToolbarFilter />
                            <GridToolbarCheckboxFilter data={data.data} />
                            <GridToolbarSeparator />
                            <GridToolbarColumnsChooser />
                            <GridPdfExportButton />
                        </GridToolbar>

                        <Column field="ProductID" title={titles.ProductID} filterable={false} width="40px" />
                        <Column field="ProductName" title={titles.ProductName} columnMenu={MyColumnMenu} />
                        <Column
                            field="FirstOrderedOn"
                            title={titles.FirstOrderedOn}
                            filter="date"
                            format="{0:D}"
                            columnMenu={MyColumnMenu}
                        />
                        <Column
                            field="UnitPrice"
                            title={titles.UnitPrice}
                            filter="numeric"
                            format="{0:c}"
                            columnMenu={MyColumnMenu}
                        />
                        <Column field="CategoryName" title={titles.CategoryName} columnMenu={MyColumnMenu} />
                    </Grid>
                </IntlProvider>
            </LocalizationProvider>
        </div>
    );
};

export default App;
