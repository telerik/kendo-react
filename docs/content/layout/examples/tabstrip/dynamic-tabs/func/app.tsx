import * as React from 'react';

import {
    TabStrip,
    TabStripSelectEventArguments,
    TabStripTab
} from '@progress/kendo-react-layout';

import { Button } from '@progress/kendo-react-buttons';

interface tab {
    title: string;
    content: string;
    id: number;
}

const tabs: tab[] = [
    {
        id: 0,
        title: 'Tab 1',
        content: 'Tab 1 content'
    },
    {
        id: 1,
        title: 'Tab 2',
        content: 'Tab 2 content'
    },
    {
        id: 2,
        title: 'Tab 3',
        content: 'Tab 3 content'
    }
];

const App = () => {
    const [selected, setSelected] = React.useState<number>(0);
    const [count, setCount] = React.useState<number>(3);
    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };
    const addTab = () => {
        let newCount: number = count + 1;
        tabs.push({
            id: newCount - 1,
            title: `Tab ${newCount}`,
            content: `Tab ${newCount} content`
        });
        setCount(newCount);
    };

    return (
    <React.Fragment>
      <div className="example-config" style={{ textAlign: 'center' }}>
        <Button onClick={addTab} style={{ width: '50%', height: '50px' }}>
          Add Tab
        </Button>
      </div>
      <TabStrip selected={selected} onSelect={handleSelect}>
        {tabs.map((tab) => (
          <TabStripTab title={tab.title} key={tab.id}>
            <div>
              <p>{tab.content}</p>
            </div>
          </TabStripTab>
        ))}
      </TabStrip>
    </React.Fragment>
    );
};

export default App;
