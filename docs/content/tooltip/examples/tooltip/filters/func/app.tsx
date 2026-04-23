import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';

const App = () => {
    const filterElements = (element: HTMLElement) => {
        if (element.tagName === 'STRONG') {
            return true;
        }
        return false;
    }
    return (
      <Tooltip filter={filterElements} anchorElement="target" parentTitle={true}>
        <div>
          <p title="test">
            <span>In this demo, the</span>
            <strong title="this is the tooltip">&nbsp;KendoReact Tooltip&nbsp;</strong>
            will show only when you hover
            &nbsp;<code>&lt;strong&gt;</code>&nbsp;
            <strong title="because the 'filter' property is set">
              elements
            </strong>.
          </p>
          <p>
            Other elements, like
            <a href="#" title="Default browser tooltip">&nbsp;this link</a>, will only show the default browser tooltip, even though they have a specified
            <code>&nbsp;title&nbsp;</code>
            attribute.
          </p>
        </div>
      </Tooltip>
    );
}
export default App;
