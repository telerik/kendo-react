import * as React from 'react';

import { Dialog } from '@progress/kendo-react-dialogs';
import { SvgIcon } from '@progress/kendo-react-common';
import { printIcon } from '@progress/kendo-svg-icons';

const CustomTitleBar = () => {
    return (
        <div className="custom-title" style={{ fontSize: '18px', lineHeight: '1.3em' }}>
            <SvgIcon icon={printIcon} /> Print this page
        </div>
    );
};

const App = () => {
    return (
        <Dialog title={<CustomTitleBar />}>
            <p style={{ margin: '30px', textAlign: 'center' }}>A sample print dialog.</p>
        </Dialog>
    );
};
export default App;
