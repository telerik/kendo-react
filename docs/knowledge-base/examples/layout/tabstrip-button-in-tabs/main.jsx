import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

const App = () => {
  const [selected, setSelected] = React.useState(-1);

  const handleSelect = (e) => {
    console.log('Select');
    setSelected(e.selected);
  };
  const buttonClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    console.log('Button clicked');
  };
  const FirstTab = (props) => {
    return (
      <div>
        <button onClick={buttonClick}>Click me</button>Tab 1 title
      </div>
    );
  };
  return (
    <TabStrip selected={selected} onSelect={handleSelect}>
      <TabStripTab title={<FirstTab />}>
        <p>Tab 1 Content</p>
      </TabStripTab>
      <TabStripTab title="Tab 2 Title">
        <p>Tab 2 Content</p>
      </TabStripTab>
      <TabStripTab title="Tab 3 Title">
        <p>Tab 3 Content</p>
      </TabStripTab>
    </TabStrip>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
