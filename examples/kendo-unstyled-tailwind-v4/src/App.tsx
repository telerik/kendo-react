import { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { UnstyledContext } from "@progress/kendo-react-common";
import {
  Field,
  FieldWrapper,
  Form,
  FormElement,
  type FormRenderProps,
} from "@progress/kendo-react-form";
import { tailwindForm } from "./tailwind-preset";

import { requiredValidator } from "./components/validators";
import { FormComboBox } from "./components/fields/FormComboBox";
import { FormDropDownList } from "./components/fields/FormDropDownList";
import { FormDateTimePicker } from "./components/fields/FormDateTimePicker";
import { FormRadioGroup } from "./components/fields/FormRadioGroup";
import { FormMaskedTextBox } from "./components/fields/FormMaskedTextBox";
import { FormTextBox } from "./components/fields/FormTextBox";
import { featureCategories, priorityLevels, updateMethodData } from "./data";

const App = () => {
  const [selectedUpdateMethod, setSelectedUpdateMethod] =
    useState<string>("email");
  const handleSubmit = (dataItem: { [name: string]: any }) => {
    alert(JSON.stringify(dataItem, null, 2));
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
            {/* Form Section */}
            <div className="p-6 lg:p-8">
              {/* Header */}
              <div className="mb-8 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Request a New Feature
                </h1>
                <p className="text-lg text-gray-600">
                  Tell us what you'd like to see improved or added to our
                  platform.
                </p>
              </div>

              {/* Form */}
              <UnstyledContext.Provider value={tailwindForm}>
                <Form
                  onSubmit={handleSubmit}
                  initialValues={{ updateMethod: selectedUpdateMethod }}
                  render={(formRenderProps: FormRenderProps) => {
                    return (
                      <FormElement className="space-y-6">
                        {/* Feature Category */}
                        <FieldWrapper>
                          <Field
                            name="featureCategory"
                            label="Feature Category"
                            data={featureCategories}
                            component={FormComboBox}
                            placeholder="Select a category..."
                            validator={requiredValidator}
                          />
                        </FieldWrapper>
                        {/* Priority Level */}
                        <FieldWrapper>
                          <Field
                            name="priorityLevel"
                            label="Priority Level"
                            data={priorityLevels}
                            component={FormDropDownList}
                            placeholder="Select a priority level..."
                          />
                        </FieldWrapper>
                        {/* Requested Deadline */}
                        <FieldWrapper>
                          <Field
                            name="requestedDeadline"
                            label="Requested Deadline"
                            component={FormDateTimePicker}
                          />
                        </FieldWrapper>
                        {/* Preferred Update Method */}
                        <FieldWrapper>
                          <Field
                            name="updateMethod"
                            label="Preferred Update Method"
                            data={updateMethodData}
                            component={FormRadioGroup}
                            value={selectedUpdateMethod}
                            onChange={(e: any) =>
                              setSelectedUpdateMethod(e.value)
                            }
                          />
                        </FieldWrapper>{" "}
                        {/* Contact Information - Conditional */}
                        {selectedUpdateMethod === "email" && (
                          <FieldWrapper>
                            <Field
                              name="emailAddress"
                              label="Email Address"
                              component={FormTextBox}
                              placeholder="Enter your email address"
                            />
                          </FieldWrapper>
                        )}
                        {selectedUpdateMethod === "slack" && (
                          <FieldWrapper>
                            <Field
                              name="slackUsername"
                              label="Slack Username"
                              component={FormTextBox}
                              placeholder="Enter your Slack username (e.g., @john.doe)"
                            />
                          </FieldWrapper>
                        )}
                        {selectedUpdateMethod === "portal" && (
                          <FieldWrapper>
                            <Field
                              name="portalUserId"
                              label="Portal User ID"
                              component={FormTextBox}
                              placeholder="Enter your portal user ID"
                            />
                          </FieldWrapper>
                        )}
                        {/* Contact Number - Conditional */}
                        {(selectedUpdateMethod === "phone" ||
                          selectedUpdateMethod === "sms") && (
                          <FieldWrapper>
                            <Field
                              name="contactNumber"
                              label="Contact Number"
                              mask="(999) 000-0000"
                              component={FormMaskedTextBox}
                              placeholder="Enter your phone number"
                            />
                          </FieldWrapper>
                        )}
                        {/* Additional Comments */}
                        <FieldWrapper>
                          {" "}
                          <Field
                            name="additionalComments"
                            label="Additional Comments"
                            component={FormTextBox}
                            placeholder="Please provide additional context or details about your feature request..."
                          />
                        </FieldWrapper>
                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                          <Button
                            className="flex-1"
                            themeColor="primary"
                            fillMode="solid"
                            type="submit"
                          >
                            Submit Request
                          </Button>
                          <Button
                            className="flex-1"
                            themeColor="secondary"
                            fillMode="solid"
                            onClick={() =>
                              formRenderProps.onFormReset &&
                              formRenderProps.onFormReset()
                            }
                          >
                            Reset
                          </Button>
                        </div>
                      </FormElement>
                    );
                  }}
                />
              </UnstyledContext.Provider>
            </div>

            {/* Image Section - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat bg-blend-multiply bg-blue-500"
                style={{
                  backgroundImage: `url(https://demos.telerik.com/kendo-react-ui/assets/unstyled/cf.png)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
