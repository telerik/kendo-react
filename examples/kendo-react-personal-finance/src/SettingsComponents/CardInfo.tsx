import React, { useEffect, useState } from "react";
import { Card } from "@progress/kendo-react-layout";
import {
  Form,
  Field,
  FieldWrapper,
  FormElement,
} from "@progress/kendo-react-form";
import { Input, MaskedTextBox } from "@progress/kendo-react-inputs";
import {
  Calendar,
  DatePicker,
  CalendarProps,
} from "@progress/kendo-react-dateinputs";
import { Label } from "@progress/kendo-react-labels";
import { Button } from "@progress/kendo-react-buttons";
import { checkLocalStorageData } from "../data/localStorageUtils";
import { DEFAULT_CARD_INFO } from "../data/defaults";

const cardInfoKey = "cardInfo";

export const CustomCalendar = (props: CalendarProps) => {
  return <Calendar {...props} bottomView="year" topView="year" />;
};

export default function CardInfo() {
  const [formData, setFormData] = useState({
    ...checkLocalStorageData(cardInfoKey),
    expiryDate: new Date(checkLocalStorageData(cardInfoKey).expiryDate),
  });

  useEffect(() => {
    const storedData = checkLocalStorageData(cardInfoKey);
    setFormData({ ...storedData, expiryDate: new Date(storedData.expiryDate) });
  }, []); // Load data from localStorage on component mount

  return (
    <Card className="app-card">
      <div className="app-card__content">
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="app-card__title"
        >
          Card Information
        </div>
        <Form
          key={Date.now()} // Use timestamp to force re-render
          initialValues={formData} // Load data from state
          onSubmit={(dataItem) => {
            console.log("Form submitted:", dataItem);
            localStorage.setItem(cardInfoKey, JSON.stringify(dataItem)); // Save updated data to localStorage
          }}
          render={(formRenderProps) => (
            <FormElement className="app-form">
              <div className="app-form-row">
                <FieldWrapper
                  className="app-form-field"
                  style={{ width: "100%" }}
                >
                  <Label className="k-form-label" editorId={"bank"}>
                    Bank
                  </Label>
                  <Field id={"bank"} name="bank" component={Input} />
                </FieldWrapper>
              </div>
              <div className="app-form-row">
                <FieldWrapper
                  className="app-form-field"
                  style={{ width: "100%" }}
                >
                  <Label className="k-form-label" editorId={"expiryDate"}>
                    Expiry Date
                  </Label>
                  <Field
                    id={"expiryDate"}
                    name="expiryDate"
                    format={"MM/yyyy"}
                    component={DatePicker}
                    calendar={CustomCalendar}
                  />
                </FieldWrapper>
              </div>
              <div className="app-form-row">
                <FieldWrapper
                  className="app-form-field"
                  style={{ width: "100%" }}
                >
                  <Label className="k-form-label" editorId={"cardHolder"}>
                    Card Holder
                  </Label>
                  <Field
                    id={"cardHolder"}
                    name="cardHolder"
                    component={Input}
                  />
                </FieldWrapper>
                <FieldWrapper
                  className="app-form-field"
                  style={{ width: "100%" }}
                >
                  <Label className="k-form-label" editorId={"cardNumber"}>
                    Card Number
                  </Label>
                  <Field
                    id={"cardNumber"}
                    name="cardNumber"
                    mask="0000 0000 0000 0000"
                    component={MaskedTextBox}
                  />
                </FieldWrapper>
              </div>

              <div className="app-form-actions">
                <Button
                  type="submit"
                  size={"small"}
                  rounded={"large"}
                  themeColor={"primary"}
                  style={{
                    color: "var(--kendo-color-on-primary)",
                    letterSpacing: "1.25px",
                    fontWeight: "500",
                  }}
                >
                  SAVE
                </Button>
                <Button
                  type="button"
                  size={"small"}
                  rounded={"large"}
                  fillMode={"outline"}
                  style={{
                    color: "var(--kendo-color-primary)",
                    letterSpacing: "1.25px",
                    fontWeight: "500",
                  }}
                  onClick={() => {
                    formRenderProps.onFormReset();
                    localStorage.removeItem(cardInfoKey); // Clear localStorage data
                    setFormData({
                      ...DEFAULT_CARD_INFO,
                      expiryDate: new Date(DEFAULT_CARD_INFO.expiryDate),
                    }); // Reset state to default data
                  }}
                >
                  RESTORE
                </Button>
              </div>
            </FormElement>
          )}
        />
      </div>
    </Card>
  );
}
