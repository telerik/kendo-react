import * as React from 'react';
import { Splitter } from '@progress/kendo-react-layout';

const SplitterComponent = (props) => {
    const { dir } = props;
    const [panes, setPanes] = React.useState<Array<any>>([
        { size: '20%', min: '20px', collapsible: true },
        {},
        { size: '30%', min: '20px', collapsible: true }
    ]);
    const [nestedPanes, setNestedPanes] = React.useState([
        { size: '40%' },
        {},
        { size: '30%', resizable: false }
    ]);

    const onChange = (event) => {
        setPanes(event.newState);
    }

    const onNestedChange = (event) => {
        setNestedPanes(event.newState);
    }

    return (
      <div  dir={dir}>
        <Splitter
          style={{ height: 350 }}
          panes={nestedPanes}
          orientation={'vertical'}
          onChange={onNestedChange}
            >
          <Splitter
            panes={panes}
            onChange={onChange}
                >
            <div className="pane-content">
              <h3>Inner splitter / left pane</h3>
              <p>Resizable and collapsible.</p>
            </div>
            <div className="pane-content">
              <h3>Inner splitter / center pane</h3>
              <p>Resizable only.</p>
            </div>
            <div className="pane-content">
              <h3>Inner splitter / right pane</h3>
              <p>Resizable and collapsible.</p>
            </div>
          </Splitter>

          <div className="pane-content">
            <h3>Outer splitter / Middle pane</h3>
            <p>Resizable only.</p>
          </div>
          <div className="pane-content">
            <h3>Outer splitter / Bottom pane</h3>
            <p>Non-resizable and non-collapsible.</p>
          </div>
        </Splitter>
        <style>{`
            .pane-content { padding: 0 10px; }
            .pane-content h3 { font-size: 1.2em; margin: 10px 0; padding: 0; }
            .pane-content p { margin: 0; padding: 0; }
            `}</style>
      </div>
    )
};

export default SplitterComponent;
