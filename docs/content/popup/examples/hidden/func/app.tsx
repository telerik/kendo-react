import * as React from 'react';

import { Popup } from '@progress/kendo-react-popup';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';

import './styles.css';

const AppComponent = () => {
    const anchor = React.useRef<ButtonHandle | null>(null);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        setShow(true);
    }, []);

    const onClick = () => {
        setShow(!show);
    };

    return (
    <div>
      <Button ref={anchor} type="button" onClick={onClick}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <Popup
        anchor={anchor.current && anchor.current.element}
        show={show}
        popupClass={'popup-content'}
      >
        Popup content.
      </Popup>
    </div>
    );
};
export default AppComponent;
