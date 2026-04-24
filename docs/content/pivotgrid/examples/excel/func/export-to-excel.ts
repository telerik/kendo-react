import { Workbook, WorkbookOptions, WorkbookSheet, WorkbookSheetColumn, WorkbookSheetRow, WorkbookSheetRowCell } from '@progress/kendo-ooxml';
import { saveAs, SaveOptions } from '@progress/kendo-file-saver';

import {
    PivotGridHandle, AxisRow, AxisDataItem, PivotDataItem
} from '@progress/kendo-react-pivotgrid';

const cells = (rows: AxisRow[], type: string, callback?: (row: WorkbookSheetRowCell[], index: number) => void): WorkbookSheetRow[] => {
    let result: WorkbookSheetRow[] = [];

    rows.forEach((axisRow: AxisRow, i: number) => {
        let row: WorkbookSheetRowCell[] = [];
        axisRow.cells.forEach((cell: AxisDataItem) => {
            if (cell) {
                row.push({
                    background: '#7a7a7a',
                    color: '#fff',
                    verticalAlign: 'top',
                    value: cell.caption,
                    colSpan: cell.colSpan || 1,
                    rowSpan: cell.rowSpan || 1
                });
            }
        });

        if (callback) {
            callback(row, i);
        }

        result.push({
            cells: row,
            type: type
        });
    });

    return result;
};

const createExcelExportSheet = (
    columnHeaderRows: AxisRow[],
    rowHeaderRows: AxisRow[],
    dataCells: { row: string[]; cells: PivotDataItem[] }[],
    rowHeaderBreadth: number, columnHeaderBreadth: number, columnsWidth: number): WorkbookSheet => {
    const columns: WorkbookSheetColumn[] = [];
    for (let i = 0; i < rowHeaderBreadth; i++) {
        columns.push({ autoWidth: true });
    }

    for (let i = 0; i < columnHeaderBreadth; i++) {
        columns.push({ autoWidth: false, width: columnsWidth });
    }

    const columnRows = cells(columnHeaderRows, 'header');

    if (rowHeaderBreadth && columnRows[0].cells) {
        columnRows[0].cells.splice(0, 0, {
            background: '#7a7a7a',
            color: '#fff',
            value: '',
            colSpan: rowHeaderBreadth,
            rowSpan: columnHeaderRows.length
        });
    }

    const dataCallback = function(row: WorkbookSheetRowCell[], index: number) {
        dataCells[index].cells.forEach((cell: PivotDataItem) => {
            row.push({
                background: '#dfdfdf',
                color: '#333',
                textAlign: 'left',
                value: Number(cell.data.value) || 0,
                colSpan: 1,
                rowSpan: 1
            });
        });
    };

    const rowRows = cells(rowHeaderRows, 'data', dataCallback);
    const rows: WorkbookSheetRow[] = columnRows.concat(rowRows);

    return {
        columns,
        rows,
        frozenColumns: rowHeaderBreadth,
        frozenRows: columnHeaderRows.length
    };
};

export const saveAsExcel = (pivotgridHandle: PivotGridHandle) => {
    const { columnHeaderRows, rowHeaderRows, dataCells, rowHeaderBreadth, columnHeaderBreadth } = pivotgridHandle;
    const columnWidth = 200;
    const sheets: WorkbookSheet[] = [
        createExcelExportSheet(columnHeaderRows, rowHeaderRows, dataCells, rowHeaderBreadth, columnHeaderBreadth, columnWidth)
    ];
    const fileName = 'Kendo React PivotGrid Export.xlsx';
    const expOptions: WorkbookOptions = { sheets };
    const saveOptions: SaveOptions = { };
    const workbook = new Workbook(expOptions);

    workbook.toDataURL().then((dataURL) => {
        saveAs(dataURL, fileName, saveOptions);
    });
};
