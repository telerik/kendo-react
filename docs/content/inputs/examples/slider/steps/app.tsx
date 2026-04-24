import * as React from 'react';

import { Slider, SliderChangeEvent, SliderLabel } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState(7);

    const handleChange = (event: SliderChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            <Slider
                style={{ width: '400px' }}
                buttons={true}
                step={1}
                largeStep={20}
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
            >
                {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].map((label, i) =>
                    label % 5 === 0 && label % 2 === 0 ? (
                        <SliderLabel
                            key={i}
                            position={label}
                            onClick={() => {
                                setValue(label);
                            }}
                        >
                            {label.toString()}
                        </SliderLabel>
                    ) : (
                        <SliderLabel key={i} position={label}></SliderLabel>
                    )
                )}
            </Slider>
        </div>
    );
};

export default App;
