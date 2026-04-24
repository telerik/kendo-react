import * as React from 'react';
import { FormElement, Field } from '@progress/kendo-react-form';
import { Label, Error } from '@progress/kendo-react-labels';
import { TextArea } from '@progress/kendo-react-inputs';
import { DatePicker, DateTimePicker } from '@progress/kendo-react-dateinputs';
import {
    TitleEditor,
    TreatmentEditor,
    RoomEditor,
    TherapistEditor,
} from './editors';
import { SchedulerFormEditor } from '@progress/kendo-react-scheduler';
export const CustomFormEditor = (props) => {
    const fields = 'Start';
    const start = props.valueGetter(fields.start) || new Date();
    return (
        <FormElement horizontal={true}>
            <div className="k-form-field">
                <Label>Patient Name</Label>
                <div className="k-form-field-wrap">
                    <Field name={'Patient'} component={TitleEditor} />
                    {props.errors.Patient && <Error>{props.errors.Patient}</Error>}
                </div>
            </div>
            <div className="k-form-field">
                <Label>Therapist</Label>
                <div className="k-form-field-wrap">
                    <Field name={'Therapist'} component={TherapistEditor} />
                </div>
            </div>
            <div className="k-form-field">
                <Label>Treatment</Label>
                <div className="k-form-field-wrap">
                    <Field name={'Treatment'} component={TreatmentEditor} />
                    {props.errors.Treatment && <Error>{props.errors.Treatment}</Error>}
                </div>
            </div>
            <div className="k-form-field">
                <Label>Note</Label>
                <div className="k-form-field-wrap">
                    <Field name={'Note'} component={TextArea} rows={1} />
                </div>
            </div>
            <div className="k-form-field">
                <Label>Start</Label>
                <div className="k-form-field-wrap">
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Field
                            name={'Start'}
                            component={props.startEditor || DatePicker}
                            as={DateTimePicker}
                            rows={1}
                            width={'140px'}
                            format="t"
                        />
                        &nbsp;
                        <Label>End</Label>
                        &nbsp;
                        <Field
                            name={'End'}
                            component={props.endEditor || DatePicker}
                            as={DateTimePicker}
                            rows={1}
                            width={'140px'}
                            format="t"
                        />
                    </div>
                </div>
            </div>
            <div className="k-form-field">
                <Label>Room</Label>
                <div className="k-form-field-wrap">
                    <Field name="Room" component={RoomEditor} />
                </div>
                <div>
                    <Field
                        component={SchedulerFormEditor.defaultProps.recurrenceEditor}
                        field={'RecurrenceRule'}
                        name={'RecurrenceRule'}
                        start={start}
                    />
                </div>
            </div>
        </FormElement>
    );
};
