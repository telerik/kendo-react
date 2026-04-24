import { drawDOM, DrawOptions, exportPDF } from '@progress/kendo-drawing';
import { PDFOptions } from '@progress/kendo-drawing/pdf';
import { saveAs, SaveOptions } from '@progress/kendo-file-saver';

export const saveAsPDF = (
    element: HTMLElement) => {
    const shadow = element.ownerDocument.createElement('div');
    const clone = element.cloneNode(true) as HTMLElement;
    shadow.appendChild(clone);
    if (element.parentNode) {
        element.parentNode.insertBefore(shadow, element);
    }

    shadow.className = 'k-pdf-export-shadow';
    shadow.style.overflow = 'visible';
    shadow.style.width = element.clientWidth + 'px';

    const valuesWrapper = clone.querySelector<HTMLDivElement>('.k-pivotgrid-values');

    if (valuesWrapper) {
        valuesWrapper.style.overflow = 'visible';
    }

    const columnsTable = clone.querySelector<HTMLTableElement>('.k-pivotgrid-column-headers .k-pivotgrid-table');
    if (columnsTable) {
        columnsTable.style.paddingInlineEnd = '0';
    }

    const rowsTable = clone.querySelector<HTMLTableElement>('.k-pivotgrid-row-headers .k-pivotgrid-table');
    if (rowsTable) {
        rowsTable.style.paddingBottom = '0';
    }

    const onFinish = () => {
        if (shadow.parentNode) {
            shadow.parentNode.removeChild(shadow);
        }
    };

    const drawOptions: DrawOptions = { };
    const pdfOptions: PDFOptions  = { paperSize: 'auto' };
    const saveOptions: SaveOptions = { };
    const fileName = 'KendoReact-PivotGrid.pdf';

    drawDOM(clone, drawOptions)
        .then(group => exportPDF(group, pdfOptions))
        .then(dataUri => saveAs(dataUri, fileName, saveOptions))
        .then(onFinish, onFinish);
};
