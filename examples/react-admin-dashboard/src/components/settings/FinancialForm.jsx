import * as React from "react";
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import {
  Label
} from "@progress/kendo-react-labels";
import { DateInput } from "@progress/kendo-react-dateinputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

export const FinancialForm = () => {

   const countries = [{
      text: "USA",
      id: 1
    }, {
      text: "United Kingdom",
      id: 2
    }, {
      text: "Bulgaria",
      id: 3
    }];

    const [state, setState] = React.useState({
      value: {
        text: "USA",
        id: 1,
      },
    });

    const handleChange = (event) => {
      setState({
        value: event.target.value,
      });
    };

  return <div>
     <Form
    initialValues={{
    cardHolder: 'Jaxons Danniels',
    cardNumber: 'JX',
    phone: '(+1) 1234-567-89-01'
  }}
   render={(formRenderProps) => (

     <FormElement className="settings-form financial-form">
       <fieldset className={'k-form-fieldset'}>
      <div className="financial-field">
        <div>
        <Label >Card Holder</Label>
        <Field  component={Input} name={"cardHolder"} type={"text"}/>

      </div>
        </div>

      <div className="triple-inputs">

      <div className="financial-field financial-field-card">
        <Label >Card Number</Label>
        <Field  component={Input} name={"cardNumber"} type={"text"}/>

      </div>

      <div className="financial-field financial-field-expiration">
        <Label >Expiration Date</Label>
        <DateInput
        />

      </div>
      <div className="financial-field financial-field-cvc">
        <Label >CVC</Label>
        <Field  component={Input}  type={"password"}/>

      </div>
      </div>

      <div className="financial-secondary-fields">
      <div className="financial-field">
      <div>
        <Label >Country</Label>
        <DropDownList
        data={countries}
        textField="text"
        dataItemKey="id"
        value={state.value}
        onChange={handleChange}
      />
      </div>
   </div>

   <div className="financial-field">
        <div>
        <Label >ZIP/ Postal Code</Label>
        <Field  component={Input}  type={"text"}/>
      </div>
   </div>

      </div>

      <div>

        </div>
       </fieldset>
     </FormElement>
   )}
 />
   <div className="form-actions">
        <button type={'submit'} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base secondary-action" >
          Cancel
        </button>
       <button type={'submit'} className="k-selected k-button k-button-md k-button-rectangle k-rounded-md k-button-solid k-button-solid-primary k-form-submit">
         Save Changes
        </button>
        </div>
  </div>
}