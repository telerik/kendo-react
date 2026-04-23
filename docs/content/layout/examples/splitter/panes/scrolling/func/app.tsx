import * as React from 'react'

import { Splitter, SplitterOnChangeEvent, SplitterPaneProps } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
    const [panes, setPanes] = React.useState<SplitterPaneProps[]>([
        { size: '20%', scrollable: false },
        {}
    ]);

    const onChange = (event: SplitterOnChangeEvent) => {
        setPanes(event.newState);
    }

    return (
    <div>
      <Splitter
        style={{ height: 200 }}
        panes={panes}
        onChange={onChange}
          >
        <div>
          <h3>Non-scrollable content</h3>
        </div>
        <h3>Main content</h3>
      </Splitter>
    </div>
    );
}
export default App;
