import React from 'react';
import * as PropTypes from 'prop-types';

import { Input as KendoInput } from '@progress/kendo-react-inputs';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label, Error, Hint } from '@progress/kendo-react-labels';

export const Input = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
            <div className={'k-form-field-wrap'}>
                <KendoInput
                    valid={valid}
                    type={type}
                    id={id}
                    disabled={disabled}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    {...others}
                />
                {
                    showHint &&
                        <Hint id={hintId}>{hint}</Hint>
                }
                {
                    showValidationMessage &&
                        <Error id={errorId}>{validationMessage}</Error>
                }
            </div>
        </FieldWrapper>
    );
};

Input.displayName = 'Input';
Input.propTypes = {
    valid: PropTypes.bool,
    value: PropTypes.string,
    id: PropTypes.string,
    optional: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    validationMessage: PropTypes.string,
    visited: PropTypes.bool,
};