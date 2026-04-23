export function generateData(numberOfColumns: number, columnWidth: number, numberOfRows: number, subItemsField: string) {
    const columns: Array<{field: string, width: number, expandable?: boolean}> = [];
    for (let c = 1; c <= numberOfColumns; c++) {
        columns.push({ field: 'Field-' + c.toString(), width: columnWidth });
    }
    columns[0].expandable = true;

    const data: any[] = [];
    const reducer = (acc, cur) => {
        acc[cur[0]] = cur[0] !== 'id' ? 'Sub ' + cur[1] : cur[0];
        return acc;
    };

    for (let r: number = 1; r <= numberOfRows; r++) {
        const row = { id: r };
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = 'R' + r + ':C' + c;
        }

        const subItem = Object.entries(row).reduce(reducer, { });
        row[subItemsField] = [ subItem, { ...subItem }, { ...subItem } ];
        data.push(row);
    }

    return { columns, data };
}
