import * as React from 'react';

import { Input, InputHandle, Rating, RangeSlider, RatingHandle, RangeSliderHandle } from '@progress/kendo-react-inputs';

const setAttribute = (componentRef: React.RefObject<any>, attr: string, value: string) => {
    if (componentRef && componentRef.current && componentRef.current.element) {
        componentRef.current.element. setAttribute(`${attr}`, `${value}`);
    }
}

const App = () => {
    const inputRef  = React.useRef<InputHandle>(null);
    const ratingRef = React.useRef<RatingHandle>(null);
    const sliderRef = React.useRef<RangeSliderHandle>(null);

    React.useEffect(() => {
        setAttribute(inputRef, 'form', 'inputForm');
        setAttribute(ratingRef, 'form', 'ratingForm');
        setAttribute(sliderRef, 'form', 'sliderForm');
    });

    return (
      <div className="row">
        <div className="m-2">
          <p>Input</p>
          <Input
            ref={inputRef}
            id={'input-id'}
            />
        </div>
        <div className="m-2">
          <p>Rating</p>
          <Rating
            ref={ratingRef}
            id={'rating-id'}
            defaultValue={3}
            />
        </div>
        <div className="m-2">
          <p>RangeSlider</p>
          <RangeSlider
            ref={sliderRef}
            id={'range-slider-id'}
            defaultValue={{start: 30, end: 70}}
            step={1}
            min={0}
            max={100}
            />
        </div>
      </div >
    );
}

export default App;
