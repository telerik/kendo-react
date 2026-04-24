import * as React from 'react';

import { RangeSlider, SliderLabel } from '@progress/kendo-react-inputs';

const App = () => {
    const [start, setStart] = React.useState(10);
    const [end, setEnd] = React.useState(100);
    const [value, setValue] = React.useState({
        start: start,
        end: end,
    });

    return (
    <RangeSlider
      style={{ width: '400px' }}
      step={1}
      largeStep={20}
      min={0}
      max={100}
      defaultValue={value}
    >
      {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].map((label, i) =>
        (label % 5 === 0 && label % 2 === 0) ? (
          <SliderLabel
            key={i}
            position={label}
          >
            {label.toString()}
          </SliderLabel>
        ) : (
          <SliderLabel key={i} position={label}></SliderLabel>
        )
      )}
    </RangeSlider>
    );
}

export default App;
