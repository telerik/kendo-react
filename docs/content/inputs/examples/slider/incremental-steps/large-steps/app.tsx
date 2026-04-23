import * as React from 'react';
import { Slider, SliderLabel } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Label className="k-display-block">Large Steps: 2</Label>
            <Slider min={0} max={12} step={2} largeStep={2} buttons={true}>
                <SliderLabel position={0}>0</SliderLabel>
                <SliderLabel position={2}>2</SliderLabel>
                <SliderLabel position={4}>4</SliderLabel>
                <SliderLabel position={6}>6</SliderLabel>
                <SliderLabel position={8}>8</SliderLabel>
                <SliderLabel position={10}>10</SliderLabel>
                <SliderLabel position={12}>12</SliderLabel>
            </Slider>

            <br />
            <br />
            <Label className="k-display-block">Large Steps: 4</Label>
            <Slider min={0} max={12} step={4} largeStep={4} buttons={true}>
                <SliderLabel position={0}>0</SliderLabel>
                <SliderLabel position={4}>4</SliderLabel>
                <SliderLabel position={8}>8</SliderLabel>
                <SliderLabel position={12}>12</SliderLabel>
            </Slider>

            <br />
        </div>
    );
};

export default App;
