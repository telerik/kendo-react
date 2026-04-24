import * as React from 'react';
import { SchedulerForm, SchedulerFormProps, useSchedulerFieldsContext } from '@progress/kendo-react-scheduler';

export const FormWithAdditionalValidation = (props: SchedulerFormProps) => {
    const fields = useSchedulerFieldsContext();

    const requiredValidator = React.useCallback(
        (value) => (!value
            ? 'Field is required.'
            : undefined),
        []
    );

    const descriptionLengthValidator = React.useCallback(
        (description) => {
            return (!description || description.length < 40)
                ? 'The description should be at least 40 characters.'
                : undefined
        },
        [])

    const customValidator = React.useCallback(
        (_dataItem, formValueGetter) => {
            let result = {}

            result[fields.description] = [
                requiredValidator(formValueGetter(fields.description)),
                descriptionLengthValidator(formValueGetter(fields.description))
            ].filter(Boolean).reduce((current, acc) => current || acc, '')

            return result;
        },
        [fields, requiredValidator, descriptionLengthValidator]
    )
    return <SchedulerForm {...props} validator={customValidator} />
}
