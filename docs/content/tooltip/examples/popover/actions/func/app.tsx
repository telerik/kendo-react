import * as React from 'react';
import { Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        setShow(true);
    }, []);

    const onClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <div>
                <Button style={{ left: 280, top: 250 }} onClick={onClick} disabled={show} ref={anchor}>
                    Show
                </Button>
                <Popover show={show} anchor={anchor.current && anchor.current.element} title={'Please confirm'}>
                    <div style={{ width: 250 }}>
                        You are trying to leave the page without saving current changes. Are you sure you want to
                        continue?
                    </div>
                    <PopoverActionsBar alignment="start">
                        <Button onClick={onClick} themeColor={'primary'} fillMode={'flat'}>
                            Save
                        </Button>
                        <Button onClick={onClick} fillMode={'flat'}>
                            Discard
                        </Button>
                        <Button onClick={onClick} fillMode={'flat'}>
                            Cancel
                        </Button>
                    </PopoverActionsBar>
                </Popover>
            </div>
        </div>
    );
};

export default App;
