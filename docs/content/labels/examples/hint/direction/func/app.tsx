import * as React from 'react';
import { Label, Hint } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent, RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { FormElement } from '@progress/kendo-react-form';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const [direction, setDirection] = React.useState<'end' | 'start' | undefined>('end');
    const editorId = 'firstName';
    const handleDirectionChange = (event: RadioButtonChangeEvent) => {
        setDirection(event.value);
    };
    return (
        <>
            <div className="example-config">
                <div className="col-6 col-md-4 mb-3">
                    <h5>Direction</h5>
                    <div>
                        <RadioButton
                            id="start"
                            name="direction"
                            value={'start'}
                            label="start"
                            onChange={handleDirectionChange}
                        />
                    </div>
                    <div>
                        <RadioButton
                            id="end"
                            name="direction"
                            defaultChecked={true}
                            value={'end'}
                            label="end"
                            onChange={handleDirectionChange}
                        />
                    </div>
                </div>
            </div>
            <FormElement style={{ maxWidth: 400 }}>
                <Label editorId={editorId}>First Name:&nbsp;</Label>
                <Input
                    id={editorId}
                    value={value}
                    ariaDescribedBy={'firstNameHint'}
                    onChange={(e: InputChangeEvent) => setValue(e.value)}
                />
                <Hint id={'firstNameHint'} direction={direction}>
                    e.g.: Peter
                </Hint>
            </FormElement>
        </>
    );
};

export default App;
