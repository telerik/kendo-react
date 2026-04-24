import { useRef, useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import type {
  FormRenderProps,
  FieldRenderProps,
} from "@progress/kendo-react-form";
import { TextBox } from "@progress/kendo-react-inputs";
import { Label, Error as FormError } from "@progress/kendo-react-labels";
import { uploadIcon } from "@progress/kendo-svg-icons";

const emailValidator = (value: string) =>
  /\S+@\S+\.\S+/.test(value) ? "" : "Please enter a valid email address.";

const requiredValidator = (value: string) =>
  value ? "" : "This field is required.";

const FormTextBox = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, visited, label, id, ...others } = fieldRenderProps;
  return (
    <FieldWrapper>
      <Label className="form-label" editorId={id}>
        {label}
      </Label>
      <TextBox
        id={id}
        {...others}
        aria-required={others["required"]}
        aria-invalid={visited && Boolean(validationMessage)}
      />
      {visited && validationMessage && (
        <FormError>{validationMessage}</FormError>
      )}
    </FieldWrapper>
  );
};

interface ProfileDialogProps {
  profile: {
    fullName: string;
    email: string;
    phone: string;
    image: string;
  };
  onSave: (values: {
    fullName: string;
    email: string;
    phone: string;
    image?: string;
  }) => void;
  onClose: () => void;
}

export default function ProfileDialog({
  profile,
  onSave,
  onClose,
}: Readonly<ProfileDialogProps>) {
  const [pendingImage, setPendingImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialProfileValues = {
    fullName: profile.fullName,
    email: profile.email,
    phone: profile.phone,
    profileImage: profile.image,
  };

  return (
    <Dialog
      title="Profile Management"
      onClose={() => {
        onClose();
        setPendingImage(null);
      }}
      width={480}
      className="profile-management-dialog"
    >
      <Form
        initialValues={initialProfileValues}
        onSubmit={(values) => {
          onSave({
            fullName: String(values.fullName ?? ""),
            email: String(values.email ?? ""),
            phone: String(values.phone ?? ""),
            ...(pendingImage ? { image: pendingImage } : {}),
          });
          setPendingImage(null);
        }}
        render={(formRenderProps: FormRenderProps) => (
          <FormElement>
            <div className="profile-dialog-content">
              <div className="profile-dialog-section">
                <Label className="form-label">Profile Image</Label>
                <div className="profile-image-container">
                  <img
                    src={pendingImage ?? profile.image}
                    alt={`Dr. ${profile.fullName}`}
                    className="profile-image-preview"
                  />
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif,.webp"
                  aria-label="Upload profile image"
                  className="profile-file-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        if (ev.target?.result) {
                          const dataUrl = ev.target.result as string;
                          setPendingImage(dataUrl);
                          formRenderProps.onChange("profileImage", {
                            value: dataUrl,
                          });
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                    e.target.value = "";
                  }}
                />
                <Button
                  svgIcon={uploadIcon}
                  themeColor="primary"
                  type="button"
                  className="profile-upload-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Upload Image
                </Button>
              </div>

              <div className="profile-dialog-section">
                <Label className="form-label">Personal Information</Label>

                <div className="profile-password-policy">
                  <h4>Password Policy</h4>
                  <ul>
                    <li>Please change your password every two weeks</li>
                  </ul>
                </div>

                <Field
                  id="profile-fullName"
                  name="fullName"
                  label="Full Name"
                  component={FormTextBox}
                  validator={requiredValidator}
                />
                <Field
                  id="profile-email"
                  name="email"
                  label="Email Address"
                  type="email"
                  component={FormTextBox}
                  validator={emailValidator}
                />
                <Field
                  id="profile-phone"
                  name="phone"
                  label="Phone Number"
                  component={FormTextBox}
                  validator={requiredValidator}
                />
              </div>
            </div>

            <DialogActionsBar layout="end">
              <Button
                fillMode="flat"
                rounded="full"
                type="button"
                onClick={() => {
                  formRenderProps.onFormReset();
                  setPendingImage(null);
                }}
              >
                Clear
              </Button>
              <Button
                themeColor="primary"
                rounded="full"
                type="submit"
                disabled={!formRenderProps.allowSubmit}
              >
                Save Changes
              </Button>
            </DialogActionsBar>
          </FormElement>
        )}
      />
    </Dialog>
  );
}
