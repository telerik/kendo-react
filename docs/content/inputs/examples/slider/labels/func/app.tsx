import * as React from 'react';

import { Slider, SliderChangeEvent, SliderLabel } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState(7);

    const handleChange = (event: SliderChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            <Slider buttons={true} step={1} min={1} max={10} value={value} onChange={handleChange}>
                {[1, 5.5, 8, 10].map((perc, i) => (
                    <SliderLabel
                        key={i}
                        position={perc}
                        onClick={() => {
                            setValue(perc);
                        }}
                    >
                        {perc.toString()}
                    </SliderLabel>
                ))}
            </Slider>
        </div>
    );
};

export default App;
