import * as React from 'react';

import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { FieldProps } from '@progress/kendo-react-form';

import { patients, treatments, rooms, therapists } from './data';

export const TitleEditor = (props: FieldProps) => {
    const handleChange = (event: DropDownListChangeEvent) => {
        if (props.onChange) {
            props.onChange.call(undefined, { value: event.value.id });
        }
    };

    return (
      <DropDownList
        onChange={handleChange}
        value={patients.find((p) => p.id === props.value)}
        data={patients}
        dataItemKey={'id'}
        textField={'name'}
        />
    );
};

export const TreatmentEditor = (props: FieldProps) => {
    const handleChange = (event: DropDownListChangeEvent) => {
        if (props.onChange) {
            props.onChange.call(undefined, { value: event.value.value });
        }
    };

    return (
      <DropDownList
        onChange={handleChange}
        value={treatments.find(t => t.value === props.value)}
        data={treatments}
        dataItemKey={'value'}
        textField={'text'}
        />
    );
};

export const TherapistEditor = (props: FieldProps) => {
    const handleChange = (event: DropDownListChangeEvent) => {
        if (props.onChange) {
            props.onChange.call(undefined, { value: event.value.value });
        }
    };

    return (
      <DropDownList
        disabled={true}
        onChange={handleChange}
        value={therapists.find(t => t.value === props.value)}
        data={therapists}
        dataItemKey={'value'}
        textField={'name'}
        />
    );
};

export const RoomEditor = (props: FieldProps) => {
    const handleChange = (event: DropDownListChangeEvent) => {
        if (props.onChange) {
            props.onChange.call(undefined, { value: event.value.id });
        }
    };

    return (
      <DropDownList
        onChange={handleChange}
        value={rooms.find(r => r.id === props.value)}
        data={rooms}
        dataItemKey={'id'}
        textField={'title'}
        />
    );
};
