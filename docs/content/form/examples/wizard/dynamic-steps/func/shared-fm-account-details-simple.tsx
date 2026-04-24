import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormInput } from './shared-fm-form-components';
import { userNameValidator, passwordValidator } from './shared-fm-validators';

export const AccountDetails = () => (
    <div>
        <Field
            key={'userName'}
            id={'userName'}
            name={'userName'}
            label={'Username'}
            component={FormInput}
            validator={userNameValidator}
        />
        <Field
            key={'password'}
            id={'password'}
            name={'password'}
            label={'Password'}
            type={'password'}
            component={FormInput}
            validator={passwordValidator}
        />
    </div>
);
