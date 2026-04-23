import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';


const App = () => {
    return (
      <div>
        <Tooltip openDelay={100} position="right" anchorElement="target">
          <div style={{ textAlign: 'center' }}>
            <span title="This is with position right">
              This is the first Tooltip with position right.
            </span>
          </div>
        </Tooltip>
        <br/>
        <Tooltip openDelay={100} position="left" anchorElement="target">
          <div style={{ textAlign: 'center' }}>
            <span title="This is with position left">
              This is the second Tooltip with position left.
            </span>
          </div>
        </Tooltip>
      </div>
    );
}
export default App;
