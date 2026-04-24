import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { Button } from '@progress/kendo-react-buttons';


const App = () => {
    const tooltip = React.useRef<Tooltip>(null);
    return (
    <div>
      <div>
        <Button type="button" title="Tooltip message">I have the browser tooltip</Button>
      </div>
      <hr className="k-hr" />
      <div>
        <Button>I do not have a tooltip</Button>
      </div>
      <hr className="k-hr" />
      <div
        onMouseOver={event => tooltip.current && tooltip.current.handleMouseOver(event)}
        onMouseOut={event => tooltip.current && tooltip.current.handleMouseOut(event)}
      >
        <Button type="button" title="Tooltip message">I have a KendoReact Tooltip</Button>
      </div>
      <hr className="k-hr" />
      <div
        onMouseOver={event => tooltip.current && tooltip.current.handleMouseOver(event)}
        onMouseOut={event => tooltip.current && tooltip.current.handleMouseOut(event)}
      >
        <Button type="button" title="Tooltip message">I also the same KendoReact Tooltip</Button>
        <Tooltip ref={tooltip} anchorElement="target" position="right" openDelay={300} />
      </div>
    </div>
    );
}
export default App;
