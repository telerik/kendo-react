import * as React from 'react';

import { Window } from '@progress/kendo-react-dialogs';
import { SvgIcon } from '@progress/kendo-react-common';
import { printIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const TitleComponent = () => {
    return (
        <div style={{ fontSize: 18, lineHeight: '1.3em' }}>
            <SvgIcon icon={printIcon} /> Print this page
        </div>
    );
};

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-window">
                Open Window
            </Button>
            {visible && <Window title={<TitleComponent />} onClose={toggleDialog} />}
        </div>
    );
};
export default App;
