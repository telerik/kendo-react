import * as React from 'react'

import { ColorPalette } from '@progress/kendo-react-inputs';

const App = () => {
    const [logs, setLogs] = React.useState<Array<any>>([]);

    const renderLogs = () => {
        return logs.map((log, index) => {
            return <li key={index}>{log}</li>;
        });
    }

    const handleOnChange = (e) => {
        const localLogs: Array<any> = logs.slice();
        localLogs.unshift(`hex: ${e.value}, rgba: ${e.rgbaValue}`);

        setLogs(localLogs);
    }

    return (
      <div className="row">
        <div className="col-md-6">
          <p>Select color:</p>
          <ColorPalette onChange={handleOnChange} palette='basic' />
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
