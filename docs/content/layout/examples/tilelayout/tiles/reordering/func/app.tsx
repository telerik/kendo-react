import * as React from 'react';

import { TileLayout } from '@progress/kendo-react-layout';

const tiles = [
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
        header: "Tile 1",
        body: <p>Reorderable tile.</p>
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        header: "Tile 2",
        body: <p>Reorderable tile.</p>
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 },
        header: "Tile 3",
        body: <p>Non-reorderable.</p>,
        reorderable: false
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
