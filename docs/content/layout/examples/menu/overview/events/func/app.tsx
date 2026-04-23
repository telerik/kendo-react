import * as React from 'react';

import { Menu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';

const App = () => {
    const [logs, setLogs] = React.useState<Array<any>>([]);

    const renderLogs = () => {
        return logs.map((log, index) => {
            return <li key={index}>{log}</li>;
        });
    }

    const handleSelect = (e: MenuSelectEvent) => {
        const newLogs = logs.slice();
        newLogs.unshift(`id: ${e.itemId} text: ${e.item.text}`);

        setLogs(newLogs);
    }
    return (
    <div className="row">
      <div className="col-md-6">
        <Menu onSelect={handleSelect}>
          <MenuItem text="First item">
            <MenuItem text="Child item" />
          </MenuItem>
          <MenuItem text="Second item" />
        </Menu>
      </div>
      <div className="example-config col-md-6" style={{ height: '180px' }}>
        <h5>Log: </h5>
        <ul className="event-log">
          {renderLogs()}
        </ul>
      </div>
    </div>
    );
}
export default App;
