import * as React from 'react';
import { SchedulerForm, useSchedulerFieldsContext, SchedulerFormProps } from '@progress/kendo-react-scheduler';
import { CustomFormEditor } from './custom-form-editor';

export const FormWithCustomEditor = (props: SchedulerFormProps) => {
    const fields = useSchedulerFieldsContext();

    const requiredValidator = React.useCallback(
        (value) => (!value
            ? 'Field is required.'
            : undefined),
        []
    );

    const titleLengthValidator = React.useCallback(
        (title) => {
            return (!title || title.length < 40)
                ? 'The title should be at least 40 characters.'
                : undefined
        },
        [])

    const customValidator = React.useCallback(
        (_dataItem, formValueGetter) => {
            let result = {}

            result[fields.title] = [
                requiredValidator(formValueGetter(fields.title)),
                titleLengthValidator(formValueGetter(fields.title))
            ].filter(Boolean).reduce((current, acc) => current || acc, '')

            result[fields.description] = [
                requiredValidator(formValueGetter(fields.description))
            ].filter(Boolean).reduce((current, acc) => current || acc, '')

            return result;
        },
        [fields, requiredValidator, titleLengthValidator]
    )

    return (
      <SchedulerForm
        {...props}
        validator={customValidator}
        editor={CustomFormEditor}
    />)
}
