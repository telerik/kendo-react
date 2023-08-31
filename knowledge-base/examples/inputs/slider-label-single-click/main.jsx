import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Slider, SliderLabel } from '@progress/kendo-react-inputs';
const App = () => {
  const [value, setValue] = React.useState(7);
  const change = (e) => {
    setValue(e.value);
  };
  const handleClick = (e) => {
    setValue(e.target.innerText);
  };
  return (
    <Slider
      buttons={true}
      step={1}
      defaultValue={7}
      min={1}
      max={10}
      value={value}
      onChange={change}
    >
      <SliderLabel position={1} onClick={handleClick}>
        1
      </SliderLabel>
      <SliderLabel position={3} onClick={handleClick}>
        3
      </SliderLabel>
      <SliderLabel position={5} onClick={handleClick}>
        5
      </SliderLabel>
      <SliderLabel position={7} onClick={handleClick}>
        7
      </SliderLabel>
      <SliderLabel position={10} onClick={handleClick}>
        10
      </SliderLabel>
    </Slider>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
