import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Reveal, RevealDirection } from '@progress/kendo-react-animation';
import { RadioButton } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

const App = () => {
    const [direction, setDirection] = React.useState<RevealDirection>('vertical');
    const [index, setIndex] = React.useState<number>(1);

    const onClick = () => {
        setIndex(index + 1);
    };

    const onChange = (e) => {
        setDirection(e.target.value);
    };

    const children = <div className="content">CONTENT</div>;

    return (
        <div className="row">
            <div className="col-md-6">
                <dl>
                    <dt>Reveal: {direction}</dt>
                    <dd>
                        <Button type="button" onClick={onClick}>
                            Animate
                        </Button>
                    </dd>
                </dl>
                <Reveal direction={direction}>{children}</Reveal>
            </div>
            <div className="col-md-6">
                <dl>
                    <dt>Direction:</dt>
                    <dd>
                        <div className="example-config">
                            <RadioButton
                                id="ver"
                                name="direction"
                                value="vertical"
                                defaultChecked={direction === 'vertical'}
                                onClick={onChange}
                            />
                            <Label editorId="ver" className="k-radio-label">
                                &nbsp;Vertical
                            </Label>
                            <br />
                            <RadioButton
                                id="hor"
                                name="direction"
                                value="horizontal"
                                defaultChecked={direction === 'horizontal'}
                                onClick={onChange}
                            />
                            <Label editorId="hor" className="k-radio-label">
                                &nbsp;Horizontal
                            </Label>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default App;
