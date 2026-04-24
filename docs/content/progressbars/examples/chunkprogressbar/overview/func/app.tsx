import * as React from 'react';

import { ChunkProgressBar } from '@progress/kendo-react-progressbars';
import { Button } from '@progress/kendo-react-buttons';
import { rewindIcon, forwardIcon } from "@progress/kendo-svg-icons";

const App = () => {
    const [value, setValue] = React.useState(20);

    const handleIncrease = () => {
        if (value < 100) {
            setValue(value + 20);
        }
    };

    const handleDecrease = () => {
        if (value > 0) {
            setValue(value - 20);
        }
    };
    return (
    <div>
      <Button
        disabled={value === 0}
        svgIcon={rewindIcon}
        onClick={handleDecrease}
      ></Button>
      <Button
        disabled={value === 100}
        themeColor={'primary'}
        svgIcon={forwardIcon}
        onClick={handleIncrease}
      ></Button>
      <ChunkProgressBar value={value} />
    </div>
    );
};

export default App;
