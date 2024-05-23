import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const MyTitle = (props) => {
  return (
    <span>
      <span style={{ width: 400, display: 'inline-block' }}>{props.title}</span>
      <span>
        <button onClick={props.buttonClickHandler}>Add </button>
      </span>
    </span>
  );
};

const App = () => {
  const [count, setCount] = React.useState(1);

  const addButtonClick = (e) => {
    //prevent the propagation of the click event, so the PanelBarItem does not get selected or expanded/collapsed
    e.preventDefault();
    e.stopPropagation();
    setCount(count + 1);
  };
  return (
    <PanelBar style={{ width: 500 }}>
      <li>Count: {count}</li>
      <li style={{ float: 'right' }}></li>
      <PanelBarItem
        expanded={true}
        title={
          <MyTitle title={'Test title'} buttonClickHandler={addButtonClick} />
        }
      >
        {">> Content"}
      </PanelBarItem>
    </PanelBar>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
