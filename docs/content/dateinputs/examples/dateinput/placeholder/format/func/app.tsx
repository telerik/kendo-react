import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet } from '@progress/kendo-react-form';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';

const customFormatPlaceholder = {
    year: 'y',
    month: 'M',
    day: 'd',
    hour: 'h',
    minute: 'm',
    second: 's'
};

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };
    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card-block">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={{ name: 'John Doe' }}
                        render={(formRenderProps) => (
                            <FormElement>
                                <FormFieldSet>
                                    <legend>Reserve Your Stay:</legend>
                                    <Label className="k-form-field">
                                        <span>Full Name</span>
                                        <Field name="name" component={Input} />
                                    </Label>
                                    <Label className="k-form-field">
                                        <span>Date of Birth</span>
                                        <Field name="birthday" component={DateInput} formatPlaceholder="short" />
                                    </Label>
                                    <Label className="k-form-field">
                                        <span>Check-In</span>
                                        <Field
                                            name="checkin"
                                            component={DateInput}
                                            format="MM/dd/yyyy"
                                            formatPlaceholder="formatPattern"
                                        />
                                    </Label>
                                    <Label className="k-form-field">
                                        <span>Check-Out</span>
                                        <Field
                                            name="checkout"
                                            component={DateInput}
                                            format="G"
                                            formatPlaceholder={customFormatPlaceholder}
                                        />
                                    </Label>
                                </FormFieldSet>
                                <Button themeColor="primary" onClick={formRenderProps.onSubmit}>
                                    Reserve
                                </Button>
                            </FormElement>
                        )}
                    />
                </div>
                {success && (
                    <Notification style={{ marginTop: '1rem' }} type={{ style: 'success', icon: true }}>
                        Reservation successfully made!
                    </Notification>
                )}
            </div>
        </div>
    );
};

export default App;
