import * as React from 'react'

import { PanelBar, PanelBarItem, PanelBarSelectEventArguments } from '@progress/kendo-react-layout';

const App = () => {
    const [logs, setLogs] = React.useState<Array<any>>([]);

    const renderLogs = () => {
        return logs.map((log, index) => {
            return (<li key={index}>{log}</li>)
        })
    };

    const handleSelect = (e: PanelBarSelectEventArguments) => {
        const calls = logs.slice();

        calls.unshift(`${e.target.props.title}`);

        setLogs(calls);
    };

    return (
    <div className="row">
      <div className="col-md-6">
        <PanelBar onSelect={handleSelect}>
          <PanelBarItem title="First item">
            <div
              className="custom-template"
              style={{ padding: '30px', textAlign: 'center' }}
                      >
              <h4>Custom template: </h4>
              <p>Item content</p>
            </div>
          </PanelBarItem>
          <PanelBarItem title={"Second item"}>
            <PanelBarItem title={"Child item"} />
          </PanelBarItem>
        </PanelBar>
      </div>
      <div className="example-config col-md-6" style={{ height: '180px' }}>
        <h5>Log: </h5>
        <ul className="event-log">
          {renderLogs()}
        </ul>
      </div>
    </div>
    )
}
export default App;
