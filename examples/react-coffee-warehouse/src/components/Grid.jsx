
import React from 'react';
import * as PropTypes from 'prop-types';

import { Grid as KendoGrid, GridColumn, GridColumnMenuSort, GridColumnMenuFilter, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons'
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Input } from '@progress/kendo-react-inputs';
import { useLocalization } from '@progress/kendo-react-intl';
import { fileExcelIcon, filePdfIcon } from '@progress/kendo-svg-icons';
import { filterBy } from '@progress/kendo-data-query';

export const Column = GridColumn;

export const ColumnMenu = (props) => {
    return (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} />
        </div>
    );
}

export const Grid = (props) => {
    const { data, onDataChange, defaultFilter, ...others } = props;

    const excelExportRef = React.useRef(null);
    const pdfExportRef = React.useRef(null);

    const [isPdfExporting, setIsPdfExporting] = React.useState(false);
    const [filter, setFilter] = React.useState(defaultFilter);
    const filteredData = filterBy(data, filter);
    const [select, setSelect] = React.useState({});
    const localizationService = useLocalization();

    const onExcelExport = React.useCallback(
        () => {
            if (excelExportRef.current) {
                excelExportRef.current.save();
            }
        },
        []
    );

    const onPdfExportDone = React.useCallback(
        () => {
            setIsPdfExporting(false);
        },
        []
    );

    const handleFilterChange = React.useCallback(
        (event) => {
            let filter = {
                logic: 'or',
                filters: [
                    { field: 'contactName', operator: 'contains', value: event.value },
                    { field: 'jobTitle', operator: 'contains', value: event.value },
                    { field: 'budget', operator: 'contains', value: event.value },
                    { field: 'phone', operator: 'contains', value: event.value },
                    { field: 'address', operator: 'contains', value: event.value }
                ]
            };
            setFilter(filter);
        },
        [setFilter]
    );

    const onSelectionChange = React.useCallback((event) => {
        setSelect(event.select);
    }, []);

    const onHeaderSelectionChange = React.useCallback((event) => {
        setSelect(event.select);
    }, []);

    const onPdfExport = React.useCallback(
        () => {
            if (pdfExportRef.current) {
                setIsPdfExporting(true);
                pdfExportRef.current.save(data, onPdfExportDone);
            }
        },
        [data, onPdfExportDone]
    );

    const GridElement = (
        <KendoGrid
            {...others}
            rowHeight={40}
            pageable
            defaultSkip={0}
            defaultTake={10}
            sortable
            groupable
            filter={filter}

            data={filteredData}
            dataItemKey={'id'}
            autoProcessData={true}
            selectable={{
                enabled: true,
                drag: false,
                cell: false,
                mode: 'single'
            }}
            select={select}
            onSelectionChange={onSelectionChange}
            onHeaderSelectionChange={onHeaderSelectionChange}
        >
            <GridToolbar>
                <Input
                    onChange={handleFilterChange}
                    placeholder={localizationService.toLanguageString('custom.gridSearch')}
                />
                <Button
                    svgIcon={fileExcelIcon}
                    onClick={onExcelExport}
                >
                    {localizationService.toLanguageString('custom.exportExcel')}
                </Button>
                <Button
                    svgIcon={filePdfIcon}
                    onClick={onPdfExport}
                    disabled={isPdfExporting}
                >
                    {localizationService.toLanguageString('custom.exportPdf')}
                </Button>
            </GridToolbar>
            <Column columnType="checkbox" />
            {props.children}
        </KendoGrid>
    );

    return (
        <>
            <ExcelExport data={data} ref={excelExportRef}>
                { GridElement }
            </ExcelExport>
            <GridPDFExport ref={pdfExportRef}>
                { GridElement }
            </GridPDFExport>
        </>

    );
};

Grid.displayName = 'Grid';
Grid.propTypes = {
    data: PropTypes.array,
    onDataChange: PropTypes.func,
    style: PropTypes.object
};
