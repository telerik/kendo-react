import * as React from "react";
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input, Switch} from '@progress/kendo-react-inputs';
import {
  Label
} from "@progress/kendo-react-labels";
import { DateInput } from "@progress/kendo-react-dateinputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";


export const UserForm = () => {
  const handleSubmit = (dataItem) => alert('Data submitted');

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
  
   return   <div>
       <Form
   initialValues={{
    username: 'Jaxons',
    email: 'jaxons@gmail.com',
    nickname: 'JX',
    phone: '(+1) 1234-567-89-01'
  }}
   render={(formRenderProps) => (
    
     <FormElement
       style={{
         width: '100%',
         background: '#fafafa',
         padding: '16px 0',
         border: '1px solid rgba(0, 0, 0, 0.08)',
       }}
     >
       <fieldset className={'k-form-fieldset'}>    
   <div className="left col-12 col-md-6 example-col">
        <div>
        <Label >Username</Label>
        <Field  component={Input} name={"username"} type={"text"} />
      </div>
        </div> 

        <div className="right col-12 col-md-6 example-col">
      <div>
        <Label >Email Address</Label>
        <Field  component={Input} name={"email"} type={"email"}/>
      </div>
        </div>
      

        <div className="bottom-side">
        <div className="left col-12 col-md-6 example-col">
        <div>
        <Label >Nickname</Label>
        <Field  component={Input} name={"nickname"} type={"text"}/>
      </div>
        </div> 

        <div className="right col-12 col-md-6 example-col">
      <div>
        <Label >Phone Number</Label>
        <Field  component={Input} name={"phone"} type={"text"} />
      </div>
      </div>

        </div>
 
       </fieldset>
     </FormElement>
   )}
 />

 <br></br>
 <br></br>
 <br></br>

 <Form
   initialValues={{
    website: 'jxnss.com',
    phone: '(+1) 1234-567-89-01'
  }}
   render={(formRenderProps) => (
    
     <FormElement
       style={{
         width: '100%',
         background: '#fafafa',
         padding: '16px 0',
         border: '1px solid rgba(0, 0, 0, 0.08)',
       }}
     >
       <fieldset className={'k-form-fieldset'}>

   <div className="left col-12 col-md-6 example-col">
        <div>
        <Label >Birth Date</Label>
        <DateInput
         width="100%"
         name={"birthdate"}
        />
      </div>
        </div> 

        <div className="right col-12 col-md-6 example-col">
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
      
        <div className="bottom-side">
        <div className="left col-12 col-md-6 example-col">
        <div>
        <Label >Website</Label>
        <Field  component={Input} name={"website"} type={"text"}/>
      </div>
        </div> 

        <div className="right col-12 col-md-6 example-col">
      <div>
        <Label >Phone Number</Label>
        <Field  component={Input} name={"phone"} type={"text"} />
      </div>
      </div>
        </div>
       </fieldset>
     </FormElement>
   )}
 />

  <br></br>
  <br></br>
  <br></br>

  <Form
   initialValues={{
    password: 'password'
  }}
  onSubmit={handleSubmit}

   render={(formRenderProps) => (
    
     <FormElement
       style={{
         width: '100%',
         background: '#fafafa',
         padding: '16px 0',
         border: '1px solid rgba(0, 0, 0, 0.08)',
       }}
     >
       <fieldset className={'k-form-fieldset'}>

   <div className="col-12 col-md-6 example-col">
     <br></br>
        <Label >Current Password</Label>
        <Field  component={Input} name={"password"} type="password" />
       </div>

      <br/>
       <div className="col-12 col-md-6 example-col">
        <Label >New Password</Label>
        <Field  component={Input}  type="password" />
       </div>
       
     <div className="mb-3">
       <div className="switch-parent">
      <p>Enable 2-step authentication</p>
      <Switch  />
    </div>
    </div>

    <div className="mb-3">
       <div className="switch-parent">
      <p>Enable 2-step authentication</p>
      <Switch  />
    </div>
    </div>
 
 
       </fieldset>

       <div className="k-form-buttons f-buttons">
        <div>
        <span>Public Profile</span>

       <Switch className="switch"/>
        </div>

        <div>
        <button type={'submit'} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" disabled={!formRenderProps.allowSubmit} style={{marginRight: 10}}>
          Cancel
        </button>
       <button type={'submit'} className="k-selected k-button k-button-md k-button-rectangle k-rounded-md k-button-solid k-button-solid-primary k-form-submit" disabled={!formRenderProps.allowSubmit}>
         Save Changes
        </button>
        </div>
        </div>
     </FormElement>
   )}
 /> 
 
   </div>
   }