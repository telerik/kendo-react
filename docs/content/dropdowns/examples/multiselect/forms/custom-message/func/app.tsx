import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';
import { Label } from '@progress/kendo-react-labels';
import { categories, brands } from './shop';

const requiredValidator = (value: any) => (value && value.length > 0 ? '' : 'This field is required.');

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const CategoriesField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return <MultiSelect data={categories} {...others} />;
    };

    const BrandsField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return <MultiSelect data={brands} {...others} />;
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                    <div className="card-block">
                        <Form
                            onSubmit={handleSubmit}
                            initialValues={{
                                categories: [],
                                brands: []
                            }}
                            render={(formRenderProps) => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Customize Your Shopping Experience</legend>
                                        <Label editorId="categories" className="k-form-field k-mt-4">
                                            Favorite Categories
                                        </Label>
                                        <Field
                                            id="categories"
                                            name="categories"
                                            component={CategoriesField}
                                            style={{ width: '100%' }}
                                            placeholder="Please select..."
                                            validator={requiredValidator}
                                        />
                                        <Label editorId="brands" className="k-form-field k-mt-4">
                                            Favorite Brands
                                        </Label>
                                        <Field
                                            id="brands"
                                            name="brands"
                                            component={BrandsField}
                                            style={{ width: '100%' }}
                                            placeholder="Please select..."
                                            validator={requiredValidator}
                                        />
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} style={{ marginTop: 20 }} type={'submit'}>
                                        Submit
                                    </Button>
                                </FormElement>
                            )}
                        />
                        {success && (
                            <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                                Your shopping preferences have been saved successfully!
                            </Notification>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
