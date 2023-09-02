import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { patients, treatments, rooms, therapists } from './data';
export const TitleEditor = props => {
    const handleChange = event => {
        if (props.onChange) {
            props.onChange.call(undefined, {
                value: event.value.id
            });
        }
    };
    return <DropDownList onChange={handleChange} value={patients.find(p => p.id === props.value)} data={patients} dataItemKey={'id'} textField={'name'} />;
};
export const TreatmentEditor = props => {
    const handleChange = event => {
        if (props.onChange) {
            props.onChange.call(undefined, {
                value: event.value.value
            });
        }
    };
    return <DropDownList onChange={handleChange} value={treatments.find(t => t.value === props.value)} data={treatments} dataItemKey={'value'} textField={'text'} />;
};
export const TherapistEditor = props => {
    const handleChange = event => {
        if (props.onChange) {
            props.onChange.call(undefined, {
                value: event.value.value
            });
        }
    };
    return <DropDownList disabled={true} onChange={handleChange} value={therapists.find(t => t.value === props.value)} data={therapists} dataItemKey={'value'} textField={'name'} />;
};
export const RoomEditor = props => {
    const handleChange = event => {
        if (props.onChange) {
            props.onChange.call(undefined, {
                value: event.value.id
            });
        }
    };
    return <DropDownList onChange={handleChange} value={rooms.find(r => r.id === props.value)} data={rooms} dataItemKey={'id'} textField={'title'} />;
};