import { PivotGridProps, PivotDataItem, dataCells } from '@progress/kendo-react-pivotgrid';

export const chartData = (pivotProps: PivotGridProps) => {
    const cells: { row: string[]; cells: PivotDataItem[] }[] = dataCells(pivotProps.rows, pivotProps.columns, pivotProps.data);

    const series: any[] = [];
    const stacks = new Set();

    if (cells.length > 1) {
        cells.pop();
    }
    cells.forEach((m) => {
        if (m.cells.length > 1) {
            m.cells.pop();
        }
        const rows: string[] = m.row
            .filter((x: string) => x.includes('&'))
            .map((v: string) => v.substring(v.indexOf('&') + 1));

        if (rows.length === 1 && stacks.has(rows[0])) {
            return;
        } else if (rows.length > 1) {
            stacks.add(rows[0]);
        }

        series.push({
            name: rows[rows.length - 1],
            stack: rows.length > 1 ? rows[0] : rows.join('-'),
            data: m.cells.map((d: PivotDataItem) => parseFloat(d.data && d.data.value))
        });
    });

    let categories: string[] = [];
    if (cells[0]) {
        categories = cells[0].cells.map((c: PivotDataItem) =>
            c.columnTuple.members
                .map((m) => m.caption)
                .join('/')
        );
    }

    return { series, categories };
};
