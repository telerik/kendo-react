import * as React from 'react';

import { Slider } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { volumeDownIcon, volumeUpIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            <SvgIcon icon={volumeDownIcon} />
            <Slider step={1} defaultValue={7} min={1} max={10}></Slider>
            <SvgIcon icon={volumeUpIcon} />
        </div>
    );
};

export default App;
