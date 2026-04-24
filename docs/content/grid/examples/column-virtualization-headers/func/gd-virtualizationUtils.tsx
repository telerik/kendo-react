import * as React from 'react';

import { GridColumn } from '@progress/kendo-react-grid';

export const getData = (skip: number, take: number, numberOfRows: number, numberOfColumns: number) => {
    const page: Array<any> = [];
    for (let r = skip + 1; r <= skip + take && r <= numberOfRows; r++) {
        const row: any = {};
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = 'R' + r + ':C' + c;
        }
        page.push(row);
    }
    return page;
};

export const getColumns = (numberOfColumns: number) => {
    const maxDepth = 3;
    const maxChildCount = 4;

    const cols: Array<any> = [];
    let colIdx = 1;

    const stack: any = [
        {
            column: { field: 'Field-1', width: 150, children: [] },
            isLeaf: true,
            depth: 1
        }
    ];

    while (stack.length > 0) {
        const { column, isLeaf, depth } = stack.pop();

        if (colIdx <= numberOfColumns) {
            const childCount = Math.ceil(Math.random() * maxChildCount);

            if (childCount === 1 || depth > maxDepth || colIdx === numberOfColumns) {
                colIdx++;

                const nextColumn = { field: `Field-${colIdx}`, width: 150, children: [] };

                stack.push({
                    column: nextColumn,
                    isLeaf: true,
                    depth: 1
                });
            } else {
                for (let i = 0; i < childCount; i++) {
                    colIdx++;

                    if (colIdx <= numberOfColumns) {
                        const nextColumn = {
                            field: `Field-${colIdx}`,
                            width: 150,
                            children: []
                        };

                        column.children.push(nextColumn);

                        stack.push({
                            column: nextColumn,
                            isLeaf: false,
                            depth: depth + 1
                        });
                    }
                }
            }

            if (isLeaf) {
                cols.push(column);
            }
        }
    }

    const mapColumns = (columns) => {
        return columns.map((column) => {
            if (column.children) {
                column.children = mapColumns(column.children);
            }

            return <GridColumn key={column.field} {...column} />;
        });
    };

    return mapColumns(cols);
};
