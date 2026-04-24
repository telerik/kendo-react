import * as React from 'react';

import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Label, Error, Hint } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);

export const nameValidator = (value: string) =>
    !value
        ? "Full Name is required"
        : value.length < 7
            ? "Full Name should be at least 7 characters long."
            : "";

export const emailValidator = (value: string) =>
    !value
        ? "Email field is required."
        : emailRegex.test(value)
            ? ""
            : "Email is not in a valid format.";

export const FormInput = (fieldRenderProps: FieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        type,
        optional,
        ...others
    } = fieldRenderProps;

    const showValidationMessage: string | false | null =
    touched && validationMessage;
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";

    return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={"k-form-field-wrap"}>
        <Input
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          ariaDescribedBy={`${hintId} ${errorId}`}
          {...others}
        />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
    );
};
