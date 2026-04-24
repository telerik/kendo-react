import * as React from 'react';

import { Field } from '@progress/kendo-react-form';
import { CardSelector } from './shared-fm-card-selector';
import { FormInput, FormMaskedTextBox, FormDateInput } from './shared-fm-form-components';
import { requiredValidator, cardValidator, cvcValidator } from './shared-fm-validators';

export const PaymentDetails = (
    <div>
        <Field key={'cardType'} name={'cardType'} component={CardSelector} validator={requiredValidator} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '75%', marginRight: '25px' }}>
                <Field
                    key={'cardNumber'}
                    id={'cardNumber'}
                    name={'cardNumber'}
                    label={'Card Number'}
                    hint={'Hint: Your Credit Card Number'}
                    mask={'0000-0000-0000-0000'}
                    component={FormMaskedTextBox}
                    validator={cardValidator}
                />
            </div>
            <Field
                key={'cvc'}
                id={'cvc'}
                name={'cvc'}
                label={'CVC Number'}
                hint={'Hint: The last 3 digids on the back of the Card'}
                mask={'000'}
                component={FormMaskedTextBox}
                validator={cvcValidator}
            />
        </div>
        <Field
            key={'expireDate'}
            id={'expireDate'}
            name={'expireDate'}
            label={'Expiration Date'}
            component={FormDateInput}
            validator={requiredValidator}
        />
        <Field
            key={'cardHolder'}
            id={'cardHolder'}
            name={'cardHolder'}
            label={'Card Holder Name'}
            component={FormInput}
            validator={requiredValidator}
        />
    </div>
);
