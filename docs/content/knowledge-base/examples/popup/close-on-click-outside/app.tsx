import React, { useState, useEffect, useCallback } from 'react';
import { Popup } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const buttonRef = React.useRef<import('@progress/kendo-react-buttons').ButtonHandle | null>(null);
    const [show, setShow] = useState(false);

    const onClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setShow((s) => !s);
    }, []);

    useEffect(() => {
        const handleBodyClick = () => setShow(false);
        document.body.addEventListener('click', handleBodyClick);
        return () => document.body.removeEventListener('click', handleBodyClick);
    }, []);

    return (
        <div>
            <Button onClick={onClick} ref={buttonRef}>
                {show ? 'Hide' : 'Show'}
            </Button>
            <Popup anchor={buttonRef.current?.element} show={show} popupClass={'popup-content'}>
                Popup content.
            </Popup>
        </div>
    );
};

export default App;
