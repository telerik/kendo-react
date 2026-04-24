import * as React from 'react';

import { Popup, PopupPropsContext } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';

const AppComponent = () => {
    const wrapper = React.useRef<HTMLDivElement | null>(null);
    const anchor = React.useRef<HTMLDivElement | null>(null);
    const [show, setShow] = React.useState(false);

    return (
    <div ref={wrapper}>
      <PopupPropsContext.Provider
        value={(props) => ({ ...props, appendTo: wrapper.current })}
      >
        <div ref={anchor}>
          <Button type="button" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </div>
        <Popup show={show} anchor={anchor.current}>
          <div className="p-1">I'm appended based on the PopupPropsContext</div>
        </Popup>
      </PopupPropsContext.Provider>
    </div>
    );
};

export default AppComponent;
