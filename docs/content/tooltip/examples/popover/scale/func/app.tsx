import * as React from 'react';
import { Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);
    const popoverContainerRef = React.useRef(null);

    React.useEffect(() => {
        setShow(true);
    }, []);

    const onClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <Button style={{ left: 150, top: 200 }} onClick={onClick} disabled={show} ref={anchor}>
                Show
            </Button>
            <Popover
                show={show}
                anchor={anchor.current && anchor.current.element}
                title={'Please confirm'}
                scale={1.5}
                appendTo={popoverContainerRef.current}
            >
                Are you sure you want to continue?
                <PopoverActionsBar>
                    <Button onClick={onClick} themeColor={'primary'} fillMode={'flat'}>
                        Yes
                    </Button>
                    <Button onClick={onClick} fillMode={'flat'}>
                        No
                    </Button>
                </PopoverActionsBar>
            </Popover>
            <div ref={popoverContainerRef} />
        </div>
    );
};

export default App;
