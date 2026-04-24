import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const wrapper = React.useRef<HTMLDivElement | null>(null);
    const firstElement = React.useRef<HTMLAnchorElement | null>(null);
    const secondElement = React.useRef<HTMLAnchorElement | null>(null);

    const [open, setOpen] = React.useState<boolean>(false);
    const [targetElement, setTargetElement] = React.useState<HTMLDivElement | null>(null);

    const showTooltip = (element) => {
        setOpen(true);
        setTargetElement(element.current);
    }

    return (
    <Tooltip anchorElement="target" open={open} targetElement={targetElement} openDelay={1} appendTo={wrapper.current}>
      <div ref={wrapper}>
        <p>
          Click the button to show the tooltip with&nbsp;
          <a ref={firstElement} href="http://example.com/first" title="http://example.com/first">first link</a>&nbsp;
          as an anchor.
          <Button type="button" onClick={() => showTooltip(firstElement)}>Show Tooltip</Button>
        </p>
        <p>
          Click the button to show the tooltip with&nbsp;
          <a ref={secondElement} href="http://example.com/second" title="http://example.com/second">second link</a>&nbsp;
          as an anchor.
          <Button type="button" onClick={() => showTooltip(secondElement)}>Show Tooltip</Button>
        </p>
        <hr />
        <Button type="button" onClick={() => {
          setOpen(false);
          setTargetElement(null);
        }}>Hide Tooltip</Button>
      </div>
    </Tooltip>
    );
}

export default App;
