import * as React from 'react';

import { TileLayout, TileLayoutItem } from '@progress/kendo-react-layout';

const tiles: Array<TileLayoutItem> = [
    {
        defaultPosition: { col: 1, colSpan: 3, rowSpan: 1 },
        header: "Tile 1",
        body: <p>Reorderable and resizable tile.</p>
    },
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 2 },
        header: "Tile 2",
        body: <p>Reorderable and horizontally resizable only tile.</p>,
        resizable: 'horizontal'
    },
    {
        defaultPosition: { col: 4, colSpan: 1, rowSpan: 1 },
        header: "Tile 3",
        body: <p>Reorderable and vertically resizable only tile.</p>,
        resizable: 'vertical'
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        header: "Tile 4",
        body: <p>Resizable only.</p>,
        reorderable: false
    },
    {
        defaultPosition: { col: 3, colSpan: 2, rowSpan: 1 },
        header: "Tile 5",
        body: <p>Non-resizable and non-reorderable.</p>,
        resizable: false,
        reorderable: false
    },
    {
        defaultPosition: { col: 2, colSpan: 3, rowSpan: 1 },
        header: "Tile 6",
        body: <p>Reorderable and resizable tile.</p>
    }
];

const App = () => {
    return (
      <TileLayout
        columns={4}
        columnWidth={240}
        rowHeight={200}
        autoFlow={'column dense'}
        gap={{ rows: 10, columns: 10 }}
        items={tiles}
        />
    );
};

export default App;
