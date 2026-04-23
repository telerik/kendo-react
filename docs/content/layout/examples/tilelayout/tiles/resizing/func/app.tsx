import * as React from 'react';

import { TileLayout, TileLayoutItem } from '@progress/kendo-react-layout';

const tiles: Array<TileLayoutItem> = [
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
        header: "Tile 1",
        body: <p>Resizable tile.</p>
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        header: "Tile 2",
        body: <p>Non-resizable.</p>,
        resizable: false
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 2 },
        header: "Tile 3",
        body: <p>Vertically resizable only tile.</p>,
        resizable: 'vertical'
    },
    {
        defaultPosition: { col: 1, colSpan: 2, rowSpan: 1 },
        header: "Tile 4",
        body: <p>Horizontally resizable only tile.</p>,
        resizable: 'horizontal'
    }

];

const App = () => {
    return (
      <TileLayout
        columns={3}
        rowHeight={200}
        gap={{ rows: 10, columns: 10 }}
        items={tiles}
        />
    );
};

export default App;
