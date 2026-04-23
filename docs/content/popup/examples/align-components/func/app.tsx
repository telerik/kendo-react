import * as React from 'react';

import { Popup } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const AppComponent = () => {
    const anchor = React.useRef<any>(undefined);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        setShow(true);
    }, []);

    const onClick = () => {
        setShow(!show);
    };

    return (
    <div ref={anchor}>
      <Button type="button" onClick={onClick} >
        {show ? 'Hide' : 'Show'}
      </Button>
      <Popup anchor={anchor.current} show={show} popupClass={'popup-content'}>
        Popup content.
      </Popup>
    </div>
    );
};

export default AppComponent;
