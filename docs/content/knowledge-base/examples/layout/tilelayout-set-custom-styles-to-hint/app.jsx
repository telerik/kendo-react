import React, { useState } from 'react';
import { TileLayout } from '@progress/kendo-react-layout';

const App = () => {
    const [dataItems, setDataItems] = useState([
        { col: 1, colSpan: 2, rowSpan: 1 },
        { col: 3, colSpan: 1, rowSpan: 2 },
    ]);

    const tiles = [
        {
            header: 'Tile 1',
            body: (
        <div>
          <h3>Tile 1 Content</h3>
          <p>This is the content for tile 1.</p>
        </div>
            ),
            hintStyle: {
                backgroundColor: '#E3F2FD'
            },
        },
        {
            header: 'Tile 2',
            body: (
        <div>
          <h3>Tile 2 Content</h3>
          <p>This is the content for tile 2.</p>
        </div>
            ),
            hintStyle: {
                backgroundColor: '#FFF8E1'

            },
        },
    ];

    const handleReposition = (e) => {
        setDataItems(e.value);
        console.log(e.value);
    };

    return (
    <TileLayout
      columns={4}
      rowHeight={255}
      positions={dataItems}
      gap={{ rows: 10, columns: 10 }}
      items={tiles}
      onReposition={handleReposition}
    />
    );
};

export default App;
