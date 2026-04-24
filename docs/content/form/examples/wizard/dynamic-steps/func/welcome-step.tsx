import * as React from 'react';

import { Field } from '@progress/kendo-react-form';
import { FormCheckbox } from './shared-fm-form-components';
import { WizardContext } from './app';

export const WelcomeStep = () => {
    const { setAnonymous } = React.useContext<any>(WizardContext);
    const onAnonymousChange = (ev: any) => {
        console.log(ev.value);
        setAnonymous(ev.value);
    };

    return (
        <div>
            <Field
                key={'anonymous'}
                id={'anonymous'}
                name={'anonymous'}
                onChange={onAnonymousChange}
                label={'Continue without registration'}
                component={FormCheckbox}
            />
            <i>* If you continue with registration you will have to enter account details</i>
        </div>
    );
};
