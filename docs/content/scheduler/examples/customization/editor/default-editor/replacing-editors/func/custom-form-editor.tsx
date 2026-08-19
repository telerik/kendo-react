import * as React from 'react';

import { SchedulerFormEditor, SchedulerFormEditorProps } from '@progress/kendo-react-scheduler';
import { Input, InputChangeEvent, TextArea, TextAreaChangeEvent } from '@progress/kendo-react-inputs';

const MAX_TITLE_LENGTH = 50;

const CustomTitleEditor = (props: any) => {
    const { value, onChange, ...rest } = props;
    const charCount = (value || '').length;
    const isOverLimit = charCount > MAX_TITLE_LENGTH;

    const handleChange = (e: InputChangeEvent) => {
        if (onChange) {
            onChange({ value: e.value });
        }
    };

    return (
        <>
            <Input
                {...rest}
                value={value}
                onChange={handleChange}
                placeholder="Enter event title..."
                maxLength={MAX_TITLE_LENGTH}
            />
            <span style={{ fontSize: '12px', color: isOverLimit ? 'red' : '#888', marginTop: 4, display: 'block' }}>
                {charCount}/{MAX_TITLE_LENGTH} characters
            </span>
        </>
    );
};

const CustomDescriptionEditor = (props: any) => {
    const { value, onChange, ...rest } = props;

    return (
        <TextArea
            {...rest}
            value={value}
            onChange={(e: TextAreaChangeEvent) => onChange?.({ value: e.value })}
            placeholder="Add a detailed description for this event..."
        />
    );
};

export const CustomFormEditor = (props: SchedulerFormEditorProps) => {
    return (
        <SchedulerFormEditor {...props} titleEditor={CustomTitleEditor} descriptionEditor={CustomDescriptionEditor} />
    );
};
