import * as React from "react";
import { Form, FormElement } from '@progress/kendo-react-form';
import { Switch} from '@progress/kendo-react-inputs';

export const SwitchOptions = () => {
   return <div>
     
      <div className="right">
        <span style={{marginRight: '15px'}}>Toggle all notifications</span>
       <Switch/>
        </div>
       <br/>
       <br/>
       <br/>
        <Form
   render={(formRenderProps) => (
    
     <FormElement
       style={{
         width: '100%',
         background: '#fafafa',
         padding: '16px 0',
         border: '1px solid rgba(0, 0, 0, 0.08)',
       }}
     >
      <br/>
      <br/>
      <br/>
        <div className="mb-3 switch-options">
       <div className="switch-parent">
         <div>
         <p>Communication</p>
         <p className="gray-text">Get news, announcements and product updates.</p>
         </div>
      <Switch  />
    </div>
    
    </div>
    <div className="mb-3">
       <div className="switch-parent switch-options">
       <div>
         <p>Security</p>
         <p className="gray-text">Get important notifications about your account security.</p>

         </div>
      <Switch  />
    </div>
    </div>
    <div className="mb-3" style={{marginTop: '-25px'}}>
       <div className="switch-parent switch-options">
       <div>
         <p>Meetups</p>
         <p className="gray-text">Get an email when a Meetup is posted close to my location.
        </p>
         </div>
      <Switch  />
    </div>
    </div>
     </FormElement>
   )}
 />
   <br/>
   <br/>
   <br/>
   <Form
   render={(formRenderProps) => (
    
     <FormElement
       style={{
         width: '100%',
         background: '#fafafa',
         padding: '16px 0',
         border: '1px solid rgba(0, 0, 0, 0.08)',
       }}
     >
      <br/>

        <div className="mb-3 switch-options">
       <div className="switch-parent">
         <div>
         <p>Photo comments</p>

         </div>
      <Switch  />
    </div>
    
    </div>
    <div className="mb-3">
       <div className="switch-parent switch-options">
       <div>
         <p>Mention on a comment</p>
         </div>
      <Switch  />
    </div>
    </div>
    <div className="mb-3" style={{marginTop: '-25px'}}>
       <div className="switch-parent switch-options">
       <div>
         <p>Reply to my group</p>
         </div>
      <Switch  />
    </div>
    </div>
     </FormElement>
   )}
 />
    <div className="right" style={{
      marginTop: '20px'
   }}>
        <button type={'submit'} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" style={{
       marginRight: '12px'
   }} >
          Cancel
        </button>
       <button type={'submit'} className="k-selected k-button k-button-md k-button-rectangle k-rounded-md k-button-solid k-button-solid-primary k-form-submit">
         Save Changes
        </button>
        </div>
   </div>
}