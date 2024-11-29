import React, { useState } from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import ThemeChooser from './ThemeChooser';
const FormsPage = (props) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        email: '',
        company: '',
        userName: '',
        password: '',
        twoFactor: false
    });
    const [showDialog, setShowDialog ] = useState(false)
    const clearForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            dateOfBirth: new Date(),
            email: '',
            company: '',
            userName: '',
            password: '',
            twoFactor: false
        });
    }

    const onFormFieldChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    }

    const toggleDialog = () => {
        setShowDialog(!showDialog);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        setShowDialog(!showDialog);
    }

    return (
        <div className="container-fluid">
            <ThemeChooser changeTheme={props.changeTheme} theme={props.theme}/>
            {showDialog && <Dialog onClose={toggleDialog}>
            <p style={{ margin: "25px", textAlign: "center" }}>The form is successfully submitted!</p>
            <DialogActionsBar>
                <button className="k-button" onClick={toggleDialog}>OK</button>
            </DialogActionsBar>
        </Dialog>}
            <div className='row my-4'>
                <div className='col-12 col-lg-8 border-right'>
                    <div className="row example-wrapper">
                        <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                            <form className="k-form" onSubmit={handleSubmit}>
                                <fieldset>
                                    <legend className='m-1'>User Details</legend>

                                    <label className="k-form-field p-2">
                                        <span>First Name</span>
                                        <Input placeholder="Your Name" value={formData.firstName} onChange={(e) => onFormFieldChange(e, "firstName")} />
                                    </label>
                                    <label className="k-form-field p-2">
                                        <span>Last Name</span>
                                        <Input placeholder="Your Last Name" value={formData.lastName} onChange={(e) => onFormFieldChange(e, "lastName")} />
                                    </label>
                                    <div className="k-form-field p-2">
                                        <span>Date of Birth</span>
                                        <DatePicker value={formData.dateOfBirth} onChange={(e) => onFormFieldChange(e, "dateOfBirth")} />
                                    </div>
                                    <label className="k-form-field p-2">
                                        <span>Email <span className="k-required">*</span></span>
                                        <Input type="email" required={true} placeholder="Your Email" value={formData.email} onChange={(e) => onFormFieldChange(e, "email")} />
                                    </label>
                                    <label className="k-form-field p-2">
                                        <span>Company<span className="k-field-info">optional</span></span>
                                        <Input placeholder="Your Company" value={formData.company} onChange={(e) => onFormFieldChange(e, "company")} />
                                    </label>
                                </fieldset>

                                <fieldset>
                                    <legend className='m-1'>Credentials</legend>
                                    <label className="k-form-field p-2">
                                        <span>Username</span>
                                        <Input required={true} placeholder="Your username" value={formData.userName} onChange={(e) => onFormFieldChange(e, "userName")} />
                                    </label>
                                    <label className="k-form-field p-2">
                                        <span>Password</span>
                                        <Input type="password" required={true} placeholder="Your password" value={formData.password} onChange={(e) => onFormFieldChange(e, "password")} />
                                    </label>
                                    <label className="k-form-field p-2">
                                        <input type="checkbox" id="auth-2fa" className="k-checkbox"  checked={formData.twoFactor} onChange={(e)=> setFormData({...formData, twoFactor: e.target.checked})}/>
                                        <label className="k-checkbox-label" htmlFor="auth-2fa">Enable two-factor authentication</label>
                                    </label>
                                </fieldset>

                                <div className="text-right m-2">
                                    <Button type="button" onClick={clearForm}>Clear</Button> &nbsp;
                                    <Button type="submit" themeColor={'primary'}>Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>KendoReact Forms</h3>
                    <p>KendoReact includes a wide offering of UI components that can be used to build forms, including CSS classes to easily create and structure gorgeous forms.</p>
                    <p>The required inputs get validated upon form submission and if the validation fails, the form submission is prevented. Out of the box, KendoReact delivers components which support the HTML5 form validation and also provide props for configuring a set of minimal requirements for a component to be in a valid state.</p>
                    <p>For documentation and demos of the many form-friendly components please visit their documentation (<a href="https://www.telerik.com/kendo-react-ui/components/dateinputs/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-dateinputs">Date Inputs</a>, <a href="https://www.telerik.com/kendo-react-ui/components/dropdowns/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-dropdowns">DropDowns</a>, <a href="https://www.telerik.com/kendo-react-ui/components/inputs/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-inputs">Inputs</a> etc).</p>
                </div>
            </div>
        </div>
    )
}

export default FormsPage;