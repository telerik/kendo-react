import * as React from "react";
import { Form, FormElement } from '@progress/kendo-react-form';
import { Switch} from '@progress/kendo-react-inputs';

export const SwitchOptions = () => {
   return <div>

      <div className="notification-toggle">
        <span>Toggle all notifications</span>
       <Switch/>
        </div>
        <Form
   render={(formRenderProps) => (

     <FormElement className="settings-form notification-form">
        <div className="notification-option">
       <div className="switch-parent">
         <div>
         <p>Communication</p>
         <p className="settings-help-text">Get news, announcements and product updates.</p>
         </div>
      <Switch  />
    </div>

    </div>
    <div className="notification-option">
       <div className="switch-parent">
       <div>
         <p>Security</p>
         <p className="settings-help-text">Get important notifications about your account security.</p>

         </div>
      <Switch  />
    </div>
    </div>
    <div className="notification-option">
       <div className="switch-parent">
       <div>
         <p>Meetups</p>
         <p className="settings-help-text">Get an email when a Meetup is posted close to my location.
        </p>
         </div>
      <Switch  />
    </div>
    </div>
     </FormElement>
   )}
 />
   <Form
   render={(formRenderProps) => (

     <FormElement className="settings-form notification-form">

        <div className="notification-option">
       <div className="switch-parent">
         <div>
         <p>Photo comments</p>

         </div>
      <Switch  />
    </div>

    </div>
    <div className="notification-option">
       <div className="switch-parent">
       <div>
         <p>Mention on a comment</p>
         </div>
      <Switch  />
    </div>
    </div>
    <div className="notification-option">
       <div className="switch-parent">
       <div>
         <p>Reply to my group</p>
         </div>
      <Switch  />
    </div>
    </div>
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