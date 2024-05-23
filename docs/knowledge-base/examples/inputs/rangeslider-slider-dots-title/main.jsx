import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RangeSlider, SliderLabel } from '@progress/kendo-react-inputs';

const App = () => {
  const sliderRef = React.useRef(null);
  const [start, setStart] = React.useState(10);
  const [end, setEnd] = React.useState(100);

  const onChange = (ev) => {
    setStart(ev.value.start);
    setEnd(ev.value.end);
  };

  React.useEffect(() => {
    let sliderEl = sliderRef.current.element;
    let sliderDots = sliderEl.querySelectorAll('.k-slider-track .k-draghandle');
    sliderDots[0].title = start;
    sliderDots[1].title = end;
  }, [start, setStart, end, setEnd]);

  return (
    <RangeSlider
      ref={sliderRef}
      defaultValue={{
        start: start,
        end: end,
      }}
      onChange={onChange}
      step={1}
      min={0}
      max={100}
    >
      {[0, 25, 50, 75, 100].map((perc, i) => (
        <SliderLabel key={i} position={perc}>
          {perc.toString()}
        </SliderLabel>
      ))}
    </RangeSlider>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
