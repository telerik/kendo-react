import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';

import { Popup } from '@progress/kendo-react-popup';

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
      <Button type="button" onClick={onClick} ref={anchor}>
        Toggle
      </Button>
      <Popup
        anchor={anchor.current && anchor.current.element}
        collision={{
          horizontal: 'fit',
          vertical: 'flip',
        }}
        show={show}
        popupClass={'popup-content'}
      >
        Popup content.
      </Popup>
    </div>
    );
};

export default AppComponent;
