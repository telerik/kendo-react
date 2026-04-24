import * as React from 'react';
import { TileLayout } from '@progress/kendo-react-layout';

const tiles: Array<any> = [
    {
        defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
        header: "Tile 1",
        body: <p>Reorderable and resizable tile.</p>
    },
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
        header: "Tile 2",
        body: <p>Reorderable and horizontally resizable only tile.</p>,
        resizable: 'horizontal'
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 },
        header: "Tile 3",
        body: <p>Reorderable and vertically resizable only tile.</p>,
        resizable: 'vertical'
    },
    {
        defaultPosition: { col: 2, colSpan: 2, rowSpan: 1 },
        header: "Tile 4",
        body: <p>Resizable only.</p>,
        reorderable: false
    }
];

const TileLayoutComponent = (props: any) => {
    const { dir } = props;

    return (
      <TileLayout
        dir={dir}
        columns={3}
        rowHeight={150}
        gap={{ rows: 10, columns: 10 }}
        items={tiles}
        />
    );
};

export default TileLayoutComponent;
