import * as React from 'react';

import { RangeSlider, SliderLabel } from '@progress/kendo-react-inputs';

const App = () => {
    const [start, setStart] = React.useState<number>(10);
    const [end, setEnd] =  React.useState<number>(100);

    const handleClick = (event: any) => {
        if(event.value) {
            setStart(event.value.start);
            setEnd(event.value.end);
        }
    }

    return (
    <RangeSlider
      defaultValue={{start: start, end: end}}
      step={1}
      min={0}
      max={100}
    >
      {[0, 25, 50, 75, 100].map((perc, i) => (
        <SliderLabel
          key={i}
          position={perc}
          onClick={handleClick}
        >
          {perc.toString()}
        </SliderLabel>
      ))}
    </RangeSlider>
    );
}

export default App;
