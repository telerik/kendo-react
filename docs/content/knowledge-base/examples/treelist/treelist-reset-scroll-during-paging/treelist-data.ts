interface Column {
    field: string;
    width: number;
    expandable?: boolean;
}

interface DataRow {
    id: number;
    [key: string]: any;
}

interface GeneratedData {
    columns: Column[];
    data: DataRow[];
}

export function generateData(
    numberOfColumns: number,
    columnWidth: number,
    numberOfRows: number,
    subItemsField: string
): GeneratedData {
    const columns: Column[] = [];
    for (let c = 1; c <= numberOfColumns; c++) {
        columns.push({
            field: 'Field-' + c.toString(),
            width: columnWidth
        });
    }
    columns[0].expandable = true;

    const data: DataRow[] = [];
    const reducer = (acc: Record<string, any>, cur: [string, any]) => {
        acc[cur[0]] = cur[0] !== 'id' ? 'Sub ' + cur[1] : cur[0];
        return acc;
    };

    for (let r = 1; r <= numberOfRows; r++) {
        const row: DataRow = {
            id: r
        };
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = 'R' + r + ':C' + c;
        }
        const subItem = Object.entries(row).reduce(reducer, {} as Record<string, any>);
        row[subItemsField] = [
            subItem,
            {
                ...subItem
            },
            {
                ...subItem
            }
        ];
        data.push(row);
    }

    return {
        columns,
        data
    };
}
