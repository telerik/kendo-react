import * as React from 'react';
import { Slider, SliderLabel } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            <Slider buttons={true} step={5} min={1} max={10}>
                <SliderLabel position={1}>1</SliderLabel>
                <SliderLabel position={3}>3</SliderLabel>
                <SliderLabel position={5}>5</SliderLabel>
                <SliderLabel position={7}>7</SliderLabel>
                <SliderLabel position={10}>10</SliderLabel>
            </Slider>
        </div>
    );
};

export default App;
