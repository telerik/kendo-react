import * as React from 'react'

import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [animatedValue, setAnimatedValue] = React.useState(0);
    const duration = 1000;

    const changeProgress = () => {
        animatedValue === 100 ? setAnimatedValue(0) : setAnimatedValue(100);
    };

    return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm">
          Duration: {duration}ms
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm">
          <ProgressBar
            value={animatedValue}
            animation={{ duration: duration }}
          />
        </div>
        <div className="col-sm">
          <Button type="button" onClick={changeProgress}>
            {animatedValue === 0 ? 'Start progress' : 'Reset progress'}
          </Button>
        </div>
      </div>
      <style>
        {`.row { align-items: center; }`}
      </style>
    </div>
    );
};

export default App;
