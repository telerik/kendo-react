import * as React from 'react'

import { Offset, Popup } from '@progress/kendo-react-popup';

import './styles.css';

const AppComponent = () => {
    /* Change left or top value to reposition the popup */
    const offset: Offset = { left: 150, top: 50 };

    return (
      <Popup
        offset={offset}
        show={true}
        popupClass={'popup-content'}
        >
        Popup content.
      </Popup>
    );
}

export default AppComponent;
