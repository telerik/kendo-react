import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { Button } from '@progress/kendo-react-buttons';


const App = () => {
    return (
      <Tooltip anchorElement="target" position="right" parentTitle={true}>
        <Button title="Saves the current document">Save</Button>
      </Tooltip>
    );
}
export default App;
