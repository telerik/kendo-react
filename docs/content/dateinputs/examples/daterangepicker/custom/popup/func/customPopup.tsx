import * as React from 'react';

import { Popup, PopupProps } from '@progress/kendo-react-popup';

export const CustomPopup = (props: PopupProps) => {
    return (
        <Popup
            {...props}
            anchorAlign={{
                horizontal: 'center',
                vertical: 'bottom'
            }}
            popupAlign={{
                horizontal: 'center',
                vertical: 'top'
            }}
        />
    );
};
