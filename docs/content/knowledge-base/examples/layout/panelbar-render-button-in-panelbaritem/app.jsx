import * as React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const MyTitle = (props) => {
    return (
    <span>
      <span style={{ width: 400, display: 'inline-block' }}>{props.title}</span>
      <span>
        <Button type="button" onClick={props.buttonClickHandler}>Add </Button>
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

export default App;
