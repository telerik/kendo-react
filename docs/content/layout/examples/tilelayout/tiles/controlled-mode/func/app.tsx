import * as React from 'react';

import { TileLayout, TileLayoutRepositionEvent } from '@progress/kendo-react-layout';

const styles: React.CSSProperties = {
    fontSize: 24,
    textAlign: 'center',
    margin: 'auto',
    userSelect: 'none'
}

const tiles = [
    { item: <span style={styles}>1</span> },
    { item: <span style={styles}>2</span> },
    { item: <span style={styles}>3</span> },
    { item: <span style={styles}>4</span> },
    { item: <span style={styles}>5</span> }
];

const App = () => {
    const [data, setData] = React.useState<Array<any>>([
        { col: 1, colSpan: 1, rowSpan: 2 },
        { col: 2, colSpan: 2, rowSpan: 2 },
        { col: 1, colSpan: 3, rowSpan: 1 },
        { col: 1, colSpan: 2, rowSpan: 2 },
        { col: 3, colSpan: 1, rowSpan: 2 }
    ]);

    const handleReposition = (e: TileLayoutRepositionEvent) => {
        setData(e.value);
        console.log(e.value);
    }
    return (
      <TileLayout
        columns={3}
        items={tiles}
        positions={data}
        onReposition={handleReposition}
        />
    );
};

export default App;
