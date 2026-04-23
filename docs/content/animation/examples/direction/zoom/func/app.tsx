import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Zoom, ZoomDirection } from '@progress/kendo-react-animation';
import { RadioButton } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    const [direction, setDirection] = React.useState<ZoomDirection>('out');
    const [index, setIndex] = React.useState<number>(1);

    const onClick = () => {
        setIndex(index + 1);
    };

    const onChange = (e) => {
        setDirection(e.target.value);
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <dl>
                    <dt>Zoom: {direction}</dt>
                    <dd>
                        <Button type="button" onClick={onClick}>
                            Animate
                        </Button>
                    </dd>
                </dl>

                <Zoom direction={direction} stackChildren={true}>
                    <div className="content" key={index}>
                        {index}
                    </div>
                </Zoom>
            </div>
            <div className="col-md-6">
                <dl>
                    <dt>Direction:</dt>
                    <dd>
                        <div className="example-config">
                            <RadioButton
                                id="in"
                                name="direction"
                                value="in"
                                defaultChecked={direction === 'in'}
                                onClick={onChange}
                            />
                            <Label editorId="in" className="k-radio-label">
                                &nbsp;In
                            </Label>
                            <br />
                            <RadioButton
                                id="out"
                                name="direction"
                                value="out"
                                defaultChecked={direction === 'out'}
                                onClick={onChange}
                            />
                            <Label editorId="out" className="k-radio-label">
                                &nbsp;Out
                            </Label>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default App;
