import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Input, NumericTextBox, Switch } from '@progress/kendo-react-inputs'
import { DatePicker } from '@progress/kendo-react-dateinputs'
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
}

const formValidation = (values) => {
    const errors = {};

    if (!values.departureCity) {
        errors.departureCity = "Departure city is Required";
    }

    if (!values.arrivalCity) {
        errors.arrivalCity = "Аrrival city is Required";
    }

    if (!values.numberOfPassengers) {
        errors.numberOfPassengers = "Required";
    } else if (values.numberOfPassengers > 40) {
        errors.numberOfPassengers = "The maximun passengers per registration is 40";
    }

    if (!values.departureDate) {
        errors.departureDate = "Please select a departure date";
    }

    if (!values.arrivalDate) {
        errors.arrivalDate = "Please select an arrival date";
    }

    let todaysDate = new Date();

    todaysDate.setHours(0, 0, 0, 0);

    let departureDatevalue = new Date(values.departureDate)
    let arrivalDatevalue = new Date(values.arrivalDate);

    departureDatevalue.setSeconds(departureDatevalue.getSeconds() + 1);
    arrivalDatevalue.setSeconds(arrivalDatevalue.getSeconds() + 2);

    if (departureDatevalue <= todaysDate) {
        errors.departureDate = "The departure date cannot be in the past";
    } else if (departureDatevalue > arrivalDatevalue) {
        errors.arrivalDate = "The arrival cannot be before departure date";
    }

    return errors;
}

const initialValues = {
    departureCity: "",
    arrivalCity: "",
    numberOfPassengers: 1,
    departureDate: new Date(),
    arrivalDate: new Date(),
    class: "Economy",
    directFlight: false
};

const kendoHOC = (type, {input, meta, label, ...rest}) => {
    const Type = type;
    const LabelElement = type !== DropDownList ? 'label' : 'span';
    if (type === NumericTextBox && input.value === '') {
        input.value = null;
    }
    return <LabelElement className="k-form-field">
        <span>{label}</span>
        <Type
            {...input}
            {...rest}
        />
        {meta.error && meta.touched && <span className="k-required">{meta.error}</span>}
    </LabelElement>;
};
const KendoInput = (options) => (kendoHOC(Input, options))
const KendoNumericTextBox = (options) => (kendoHOC(NumericTextBox, options))
const KendoDatePicker = (options) => (kendoHOC(DatePicker, options))
const KendoDropDown = (options) => (kendoHOC(DropDownList, options))
const KendoSwitch = (options) => (kendoHOC(Switch, options))

class FinalForm extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 container mt-3 border border-light active shadow" 
                        style={{ height: '470px' }}>
                    <div className="header mt-3">
                        <h5>Flight Search</h5>
                    </div>
                    <Form
                        validate={formValidation}
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        render={({ handleSubmit, reset, submitting, pristine, values, valid }) => (
                            <form onSubmit={handleSubmit} className="k-form">
                                <fieldset>
                                    <Field name="departureCity" label="Where from?" component={KendoInput} />
                                    <Field name="arrivalCity" label="Where to?" component={KendoInput} />
                                    <Field
                                        name="numberOfPassengers"
                                        component={KendoNumericTextBox}
                                        min={1}
                                        label="Select the number of passengers?" />
                                    <Field
                                        name="departureDate"
                                        component={KendoDatePicker}
                                        label="Departure date" />
                                    <Field
                                        name="arrivalDate"
                                        component={KendoDatePicker}
                                        label="Arrival date" />
                                    <Field
                                        name="class"
                                        component={KendoDropDown}
                                        data={["Economy", "Premium Economy", "Business", "First Class"]}
                                        label="Choose class" />
                                    <Field
                                        name="directFlight"
                                        component={KendoSwitch}
                                        onLabel={"YES"}
                                        offLabel={"NO"}
                                        label="Only direct flights" />
                                    <div className="buttons float-right">
                                        <Button type="submit" themeColor={'primary'} disabled={submitting || !valid}>
                                            Search flights
                                        </Button>
                                        &nbsp;
                                        <Button onClick={reset}>
                                            Reset
                                        </Button>
                                    </div>
                                </fieldset>
                            </form>
                        )} />
                </div>
            </div>
        )
    }
}

export default FinalForm