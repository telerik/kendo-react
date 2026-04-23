import * as React from 'react';
import { Popover, PopoverPosition, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { DropDownList }  from '@progress/kendo-react-dropdowns';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';

const positions = ['top', 'left', 'bottom', 'right'];

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);
    const [position, setPosition] = React.useState<PopoverPosition>('top');

    React.useEffect(() => {
        setShow(true);
    }, []);

    const onClick = () => {
        setShow(!show);
    };

    return (
      <div>
        <div className={'example-config'}>
          <DropDownList label={'Position'} data={positions} onChange={e => setPosition(e.value)} value={position}/><br />
        </div>
        <div style={{width: 1000, height: 1000}}>
          <Button style={{left: 250, top: 100}} onClick={onClick} disabled={show} ref={anchor}>
            Show
          </Button>
          <Popover
            show={show}
            anchor={anchor.current && anchor.current.element}
            position={position}
            title={'Please confirm'}
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
