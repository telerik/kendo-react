import * as React from 'react';
import { SchedulerForm, useSchedulerFieldsContext, SchedulerFormProps } from '@progress/kendo-react-scheduler';
import { CustomFormEditor } from './custom-form-editor';

export const FormWithCustomEditor = (props: SchedulerFormProps) => {
    const fields = useSchedulerFieldsContext();

    const descriptionValidator = React.useCallback((description) => {
        return !description || description.length < 40
            ? 'The description should be at least 40 characters.'
            : undefined;
    }, []);

    const customValidator = React.useCallback(
        (_dataItem, formValueGetter) => {
            let result = {};

            result[fields.description] = descriptionValidator(formValueGetter(fields.description));

            return result;
        },
        [fields, descriptionValidator]
    );

    return <SchedulerForm {...props} validator={customValidator} editor={CustomFormEditor} />;
};
