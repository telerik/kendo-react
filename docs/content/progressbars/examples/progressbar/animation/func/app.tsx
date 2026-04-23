import * as React from 'react';

import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [animation, setAnimation] = React.useState(true);
    const [animatedValue, setAnimatedValue] = React.useState(0);

    const handleAnimation = (e) => {
        setAnimation(!e.target.checked);
    };

    const changeProgress = () => {
        animatedValue === 100 ? setAnimatedValue(0) : setAnimatedValue(100);
    };

    return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm">
          <Checkbox
            id="animation"
            onClick={handleAnimation}
            label="Disable the animation"
            labelPlacement="before"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm">
          <ProgressBar value={animatedValue} animation={animation} />
        </div>
        <div className="col-sm">
          <Button type="button" onClick={changeProgress}>
            {animatedValue === 0 ? 'Start progress' : 'Reset progress'}
          </Button>
        </div>
      </div>
      <style>{`.row { align-items: center; }`}</style>
    </div>
    );
};

export default App;
