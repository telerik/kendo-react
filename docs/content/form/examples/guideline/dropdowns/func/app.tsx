import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
    FormDropDownList,
    FormAutoComplete,
    FormComboBox,
    FormDropDownTree,
    FormMultiColumnComboBox
} from './shared-fm-form-components';
import { requiredValidator } from './shared-fm-validators';
import { countries, employees, genders, sizes, equipment } from './shared-fm-data';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'countryselected'}
                        name={'countryselected'}
                        label={'Country'}
                        hint={'Hint: Only Eroupean countries'}
                        component={FormAutoComplete}
                        data={countries}
                        validator={requiredValidator}
                    />
                    <Field
                        id={'genderseleceted'}
                        name={'genderselected'}
                        label={'Gender'}
                        component={FormComboBox}
                        textField={'label'}
                        data={genders}
                        validator={requiredValidator}
                    />
                    <Field
                        id={'name'}
                        name={'name'}
                        label={'Name and Position'}
                        hint={'Hint: Only employees'}
                        component={FormMultiColumnComboBox}
                        data={employees}
                        validator={requiredValidator}
                    />
                    <Field
                        id={'equipment'}
                        name={'equipment'}
                        label={'Home Equipment'}
                        textField={'text'}
                        dataItemKey={'id'}
                        selectField={'selected'}
                        expandField={'expanded'}
                        component={FormDropDownTree}
                        data={equipment}
                        validator={requiredValidator}
                    />
                    <Field
                        id={'size'}
                        name={'size'}
                        label={'T-Shirt Size'}
                        component={FormDropDownList}
                        data={sizes}
                        validator={requiredValidator}
                    />
                    <div className="k-form-buttons">
                        <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                            Submit
                        </Button>
                        <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default App;
