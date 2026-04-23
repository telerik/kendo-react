import * as React from 'react';
import { FloatingLabel, Label, Hint, Error } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

type Direction = 'ltr' | 'rtl';

const App = () => {
    const [direction, setDirection] = React.useState<Direction | undefined>('ltr');
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const editorId = 'firstName';

    const toggleDirection = () => {
        setDirection(direction == 'ltr' ? 'rtl' : 'ltr');
    };
    const handleChange = (event: InputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <>
            <div className="example-config">
                <Button onClick={toggleDirection}>
                    {direction === 'ltr' ? 'Change to Right-to-Left' : 'Change to Left-to-Right'}
                </Button>
            </div>
            <div className="row example-wrapper">
                <div className="col-12 col-md-6 example-col">
                    <FloatingLabel
                        label={'Floating label:'}
                        editorId={editorId}
                        editorValue={value}
                        dir={direction}
                        style={{ width: '100%', marginTop: '0.5rem' }}
                    >
                        <Input id={editorId} value={value} onChange={handleChange} />
                    </FloatingLabel>
                </div>
                <div className="col-12 col-md-6 example-col">
                    <Label
                        editorId={editorId}
                        style={{ direction: direction, float: direction == 'rtl' ? 'right' : undefined }}
                    >
                        Label:
                    </Label>
                    <Input id={editorId} value={value} onChange={handleChange} />
                </div>
                <div className="col-12 col-md-6 example-col">
                    <Input id={editorId} value={value} ariaDescribedBy={'firstNameHint'} onChange={handleChange} />
                    <Hint style={{ direction: direction }} id={'firstNameHint'}>
                        Hint:
                    </Hint>
                </div>
                <div className="col-12 col-md-6 example-col">
                    <Input id={editorId} value={value} ariaDescribedBy={'firstNameError'} onChange={handleChange} />
                    {!value && (
                        <Error style={{ direction: direction }} id={'firstNameError'}>
                            Error:
                        </Error>
                    )}
                </div>
            </div>
        </>
    );
};

export default App;
