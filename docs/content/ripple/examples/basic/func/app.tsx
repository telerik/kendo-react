import * as React from 'react';
import { Ripple } from '@progress/kendo-react-ripple';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox, RadioButton } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div className="example-wrapper">
            <Ripple>
                <div className="row">
                    <div className="col-xs-12 col-sm-4 example-col">
                        <p>Ripple on Buttons</p>
                        <Button type="button" className="mt-3 mb-1">
                            Default Button
                        </Button>
                        <br />
                        <Button type="button" themeColor={'primary'} className="mt-1 mb-1">
                            Primary Button
                        </Button>
                        <br />
                        <Button type="button" fillMode="flat" className="mt-1 mb-1">
                            Flat Button
                        </Button>
                    </div>
                    <div className="col-xs-12 col-sm-4 example-col">
                        <p>Ripple on Checkboxes</p>
                        <p style={{ lineHeight: '2.5em' }}>
                            <Checkbox id="c1" label="Checkbox 1" />
                            <Checkbox id="c2" label="Checkbox 2" />
                            <Checkbox id="c3" label="Checkbox 3" />
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-4 example-col">
                        <p>Ripple on Radio Buttons</p>
                        <p style={{ lineHeight: '2.5em' }}>
                            <RadioButton id="r1" name="rg" defaultChecked={true} label="Radio 1" />
                            <br />
                            <RadioButton id="r2" name="rg" label="Radio 2" />
                            <br />
                            <RadioButton id="r3" name="rg" label="Radio 3" />
                        </p>
                    </div>
                </div>
            </Ripple>
        </div>
    );
};

export default App;
