import * as React from 'react';
import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { InputSuffix, TextBox, TextBoxProps } from '@progress/kendo-react-inputs';
import { FloatingLabel, Hint, Error } from '@progress/kendo-react-labels';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, warningTriangleIcon, xIcon } from '@progress/kendo-svg-icons';

export const CustomTextBox = (props: TextBoxProps & FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, placeholder, ...other } =
        props;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <FloatingLabel
                label={label}
                editorId={id}
                editorValue={props.value}
                editorValid={valid}
                editorDisabled={disabled}
                optional={optional}
            >
                <TextBox
                    {...other}
                    valid={valid}
                    type="text"
                    placeholder={placeholder}
                    suffix={() =>
                        touched ? (
                            <InputSuffix>
                                {valid ? (
                                    <SvgIcon icon={checkIcon} themeColor="success" />
                                ) : (
                                    <SvgIcon icon={xIcon} themeColor="error" />
                                )}
                            </InputSuffix>
                        ) : null
                    }
                    id={id}
                    disabled={disabled}
                    aria-describedby={`${hintId} ${errorId}`}
                />
            </FloatingLabel>
            {showHint && <Hint id={hintId}>{hint}</Hint>}
            {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </FieldWrapper>
    );
};
