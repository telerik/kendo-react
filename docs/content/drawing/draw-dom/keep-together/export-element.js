import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

export function exportElement(element, options) {
    drawDOM(element, options).then((group) => {
        return exportPDF(group);
    }).then((dataUri) => {
        saveAs(dataUri, 'export.pdf');
    });
}

