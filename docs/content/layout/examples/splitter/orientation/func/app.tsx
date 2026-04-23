import * as React from 'react'

import { Splitter, SplitterOnChangeEvent, SplitterPaneProps } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    const [verticalPanes, setVerticalPanes] = React.useState<SplitterPaneProps[]>([{},{}]);
    const [horizontalPanes, setHorizontalPanes] = React.useState<SplitterPaneProps[]>([
        { size: '20%', collapsible: true },
        {},
        { size: '20%', collapsible: true }
    ]);
    const onHorizontalChange = (event: SplitterOnChangeEvent) => {
        setHorizontalPanes(event.newState);
    }

    const onVerticalChange = (event: SplitterOnChangeEvent) => {
        setVerticalPanes(event.newState);
    }
    return (
    <div>
      <Splitter
        style={{ height: 200 }}
        panes={horizontalPanes}
        onChange={onHorizontalChange}
          >
        <h3>Left pane</h3>
        <h3>Middle pane</h3>
        <h3>Right pane</h3>
      </Splitter>

      <Splitter
        style={{ height: 200 }}
        panes={verticalPanes}
        orientation={'vertical'}
        onChange={onVerticalChange}
          >
        <h3>Top pane</h3>
        <h3>Bottom pane</h3>
      </Splitter>
    </div>
    );
}
export default App;
