import * as React from 'react';
import { Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);
    const [callout, setCallout] = React.useState<boolean>(true);

    React.useEffect(() => {
        setShow(true);
    }, []);

    const onClick = () => {
        setShow(!show);
    };

    return (
      <div>
        <div className={'example-config'}>
          <Checkbox
            label={'Enable Callout'}
            value={callout}
            onChange={(e) => setCallout(e.value)}
        />
        </div>
        <div style={{width: 1000, height: 1000}}>
          <Button style={{left: 250, top: 100}} onClick={onClick} disabled={show} ref={anchor}>
            Show
          </Button>
          <Popover
            show={show}
            anchor={anchor.current && anchor.current.element}
            callout={callout}
            margin={callout ? undefined : {vertical: 0, horizontal: 0}}
            title={'Please confirm'}
            onPosition={(e) => console.log(e)}
          >
            Are you sure you want to continue?
            <PopoverActionsBar>
              <Button onClick={onClick} themeColor={'primary'} fillMode={'flat'}>Yes</Button>
              <Button onClick={onClick} fillMode={'flat'}>No</Button>
            </PopoverActionsBar>
          </Popover>
        </div>
      </div>
    );
};


export default App;
