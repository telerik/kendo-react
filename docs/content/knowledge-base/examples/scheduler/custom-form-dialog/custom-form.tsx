import * as React from 'react';
import { SchedulerForm, useSchedulerFieldsContext, SchedulerFormProps } from '@progress/kendo-react-scheduler';

import { SchedulerFormEditor, SchedulerFormEditorProps } from '@progress/kendo-react-scheduler';
import { CustomDialog } from './custom-dialog';

const CustomFormEditor = (props: SchedulerFormEditorProps) => {
    return <SchedulerFormEditor {...props} />;
};

export const FormWithCustomEditor = (props: SchedulerFormProps) => {
    const fields = useSchedulerFieldsContext();

    const requiredValidator = React.useCallback((value) => (!value ? 'Field is required.' : ''), []);

    const customValidator = React.useCallback(
        (_dataItem, formValueGetter) => {
            let result = {};

            result[fields.description] = [requiredValidator(formValueGetter(fields.description))]
                .filter(Boolean)
                .reduce((current, acc) => current || acc, '');

            return result;
        },
        [fields, requiredValidator]
    );

    return (
        <SchedulerForm
            {...props}
            validator={customValidator}
            editor={CustomFormEditor}
            dialog={CustomDialog}
            ignoreModified
        />
    );
};
