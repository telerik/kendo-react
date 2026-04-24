import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Slide, SlideDirection } from '@progress/kendo-react-animation';
import { RadioButton } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState<boolean>(false);
    const [direction, setDirection] = React.useState<SlideDirection>('down');

    const onClick = () => {
        setShow(!show);
    };
    const onChange = (e) => {
        setDirection(e.target.value);
    };

    const children = show ? <div className="content">CONTENT</div> : null;

    return (
        <div className="row">
            <div className="col-md-6">
                <dl>
                    <dt>Slide: {direction}</dt>
                    <dd>
                        <Button type="button" onClick={onClick}>
                            Animate
                        </Button>
                    </dd>
                </dl>

                <Slide direction={direction}>{children}</Slide>
            </div>
            <div className="col-md-6">
                <dl>
                    <dt>Direction:</dt>
                    <dd>
                        <div className="example-config">
                            <RadioButton
                                id="up"
                                name="direction"
                                value="up"
                                defaultChecked={direction === 'up'}
                                onClick={onChange}
                            />
                            <Label editorId="up" className="k-radio-label">
                                &nbsp;Up
                            </Label>
                            <br />
                            <RadioButton
                                id="down"
                                name="direction"
                                value="down"
                                defaultChecked={direction === 'down'}
                                onClick={onChange}
                            />
                            <Label editorId="down" className="k-radio-label">
                                &nbsp;Down
                            </Label>
                            <br />
                            <RadioButton
                                id="left"
                                name="direction"
                                value="left"
                                defaultChecked={direction === 'left'}
                                onClick={onChange}
                            />
                            <Label editorId="left" className="k-radio-label">
                                &nbsp;Left
                            </Label>
                            <br />
                            <RadioButton
                                id="right"
                                name="direction"
                                value="right"
                                defaultChecked={direction === 'right'}
                                onClick={onChange}
                            />
                            <Label editorId="right" className="k-radio-label">
                                &nbsp;Right
                            </Label>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default App;
