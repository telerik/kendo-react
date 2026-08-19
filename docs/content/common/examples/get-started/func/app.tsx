import * as React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import { paletteIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div className="example-wrapper-center">
            <SvgIcon icon={paletteIcon} size="xlarge" themeColor="primary" />
        </div>
    );
};

export default App;
