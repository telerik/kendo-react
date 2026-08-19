import * as React from 'react';

import { Slider, SliderChangeEvent, SliderLabel } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const EQ_BANDS = ['60Hz', '250Hz', '1kHz', '4kHz', '16kHz'];
const BALANCE_STEPS = Array.from({ length: 21 }, (_, i) => i - 10);
const EQ_STEPS = Array.from({ length: 41 }, (_, i) => i - 20);

const App = () => {
    const [balance, setBalance] = React.useState(0);
    const [eq, setEq] = React.useState<number[]>([10, 5, 0, 10, 15]);

    const updateEq = (index: number, value: number) => {
        setEq((prev) => prev.map((v, i) => (i === index ? Math.round(value) : v)));
    };

    return (
        <div className="demo-container">
            <div className="balance-section">
                <Label editorId="balance" className="section-label">
                    Balance
                </Label>
                <Slider
                    id="balance"
                    buttons={true}
                    min={-10}
                    max={10}
                    step={1}
                    value={balance}
                    style={{ width: '350px' }}
                    onChange={(e: SliderChangeEvent) => setBalance(Math.round(e.value))}
                >
                    {BALANCE_STEPS.map((tick) => (
                        <SliderLabel key={tick} position={tick} />
                    ))}
                </Slider>
                <div className="current-value">{balance}</div>
            </div>

            <div className="equalizer-section">
                <Label className="section-label">EQUALIZER</Label>
                <div className="eq-bands">
                    {EQ_BANDS.map((band, i) => (
                        <div key={band} className="eq-band">
                            <Slider
                                vertical={true}
                                buttons={false}
                                min={-20}
                                max={20}
                                step={1}
                                largeStep={20}
                                value={eq[i]}
                                onChange={(e: SliderChangeEvent) => updateEq(i, e.value)}
                                ariaLabel={`Equalizer ${band}`}
                            >
                                {EQ_STEPS.map((tick) => (
                                    <SliderLabel key={tick} position={tick} onClick={() => updateEq(i, tick)}>
                                        {tick === -20 || tick === 0 || tick === 20 ? tick.toString() : ''}
                                    </SliderLabel>
                                ))}
                            </Slider>
                            <p className="eq-value">{eq[i]}</p>
                            <p className="eq-band-label">{band}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
