import * as React from 'react';

import { TileLayout, TileLayoutAutoFlow } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const autoFlows = ["column", "column dense", "row", "row dense", "unset"];

const styles: React.CSSProperties = {
    fontSize: 24,
    textAlign: 'center',
    margin: 'auto',
    userSelect: 'none'
}

const tiles: any = [
    {
        defaultPosition: { row: 3, colSpan: 1, rowSpan: 1 },
        resizable: false,
        reorderable: false,
        item: <span style={styles}>Tile 1</span>
    },
    {
        defaultPosition: { colSpan: 1, rowSpan: 1 },
        resizable: false,
        reorderable: false,
        item: <span style={styles}>Tile 2</span>
    },
    {
        defaultPosition: { colSpan: 1, rowSpan: 1 },
        resizable: false,
        reorderable: false,
        item: <span style={styles}>Tile 3</span>
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        resizable: false,
        reorderable: false,
        item: <span style={styles}>Tile 4</span>
    },
    {
        defaultPosition: { colSpan: 1, rowSpan: 1 },
        resizable: false,
        reorderable: false,
        item: <span style={styles}>Tile 5</span>
    }
];

const App = () => {
    const [flow, setFlow] = React.useState<TileLayoutAutoFlow>("column");

    const handleChange = (e:DropDownListChangeEvent) => {
        setFlow(e.value);
    }
    return (
      <div className="example">
        <div className="example-wrap">
          <div className='row' style={{ marginBottom: 30 }}>
            <div className='col'>
              <DropDownList
                data={autoFlows}
                value={flow}
                onChange={handleChange}
                        />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <TileLayout
                autoFlow={flow}
                columns={3}
                rowHeight={100}
                gap={{ rows: 10, columns: 10 }}
                items={tiles}
                        />
            </div>
          </div>
        </div>
      </div>

    );
};

export default App;
