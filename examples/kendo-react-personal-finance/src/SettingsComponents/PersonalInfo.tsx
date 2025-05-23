import React, { useEffect, useState } from "react";
import { Card } from "@progress/kendo-react-layout";
import {
  Form,
  Field,
  FieldWrapper,
  FormElement,
} from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Label } from "@progress/kendo-react-labels";
import { Button } from "@progress/kendo-react-buttons";
import { checkLocalStorageData } from "../data/localStorageUtils";
import { DEFAULT_PERSONAL_INFO } from "../data/defaults";

const personalInfoKey = "personalInfo";

interface PersonalInfoFormData {
  name: string;
  surname: string;
  email: string;
  tag: string;
  birthday: Date;
  country: string;
  address: string;
  postcode: string;
}

export default function PersonalInfo() {
  const [formData, setFormData] = useState<PersonalInfoFormData>({
    ...checkLocalStorageData(personalInfoKey),
    birthday: new Date(checkLocalStorageData(personalInfoKey).birthday),
  });

  useEffect(() => {
    const storedData = checkLocalStorageData(personalInfoKey);
    setFormData({ ...storedData, birthday: new Date(storedData.birthday) });
  }, []); // Load data from localStorage on component mount

  return (
    <Card className="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
      <div className={"k-d-grid k-gap-2"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="k-gap-2"
        >
          Personal Information{" "}
        </div>
          <Form
            key={Date.now()} // Use timestamp to force re-render
            initialValues={formData} // Load data from state
            onSubmit={(dataItem) => {
              console.log("Form submitted:", dataItem);
              localStorage.setItem(personalInfoKey, JSON.stringify(dataItem)); // Save updated data to localStorage
            }}
            render={(formRenderProps) => (
              <FormElement className="k-d-grid k-gap-4">
                <div className="k-d-grid k-grid-cols-4 k-gap-4 k-gap-lg-10 k-overflow-hidden k-mb-4">
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"name"}>
                      Name
                    </Label>
                    <Field id={"name"} name="name" component={Input} />
                  </FieldWrapper>
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"surname"}>
                      Surname
                    </Label>
                    <Field id={"surname"} name="surname" component={Input} />
                  </FieldWrapper>
                </div>
                <div className="k-d-grid k-grid-cols-4 k-gap-4 k-gap-lg-10 k-overflow-hidden k-mb-4">
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"email"}>
                      Email
                    </Label>
                    <Field id={"email"} name="email" component={Input} />
                  </FieldWrapper>
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"tag"}>
                      Tag
                    </Label>
                    <Field id={"tag"} name="tag" component={Input} />
                  </FieldWrapper>
                </div>
                <div className="k-d-grid k-grid-cols-4 k-gap-4 k-gap-lg-10 k-overflow-hidden k-mb-4">
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"birthday"}>
                      Birthday
                    </Label>
                    <Field
                      id={"birthday"}
                      name="birthday"
                      component={DatePicker}
                    />
                  </FieldWrapper>
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"country"}>
                      Country
                    </Label>
                    <Field
                      id={"country"}
                      name="country"
                      component={DropDownList}
                      data={[
                        "United States",
                        "Canada",
                        "United Kingdom",
                        "Germany",
                        "France",
                      ]}
                    />
                  </FieldWrapper>
                </div>
                <div className="k-d-grid k-grid-cols-4 k-gap-4 k-gap-lg-10 k-overflow-hidden k-mb-4">
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"address"}>
                      Address
                    </Label>
                    <Field id={"address"} name="address" component={Input} />
                  </FieldWrapper>
                  <FieldWrapper
                    style={{ width: "100%" }}
                    className={"k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"}
                  >
                    <Label className="k-form-label k-pt-1" editorId={"postcode"}>
                      Post Code
                    </Label>
                    <Field id={"postcode"} name="postcode" component={Input} />
                  </FieldWrapper>
                </div>
                <div className="k-mt-6 k-d-flex k-gap-4">
                  <Button
                    type="submit"
                    size={"small"}
                    rounded={"large"}
                    themeColor={"primary"}
                    style={{
                      color: "#131524",
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
                      color: "#E0E0E0",
                      letterSpacing: "1.25px",
                      fontWeight: "500",
                    }}
                    onClick={() => {
                      formRenderProps.onFormReset();
                      localStorage.removeItem(personalInfoKey); // Clear localStorage data
                      setFormData({
                        ...DEFAULT_PERSONAL_INFO,
                        birthday: new Date(DEFAULT_PERSONAL_INFO.birthday),
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
