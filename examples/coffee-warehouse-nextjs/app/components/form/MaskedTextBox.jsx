import React from 'react';
import * as PropTypes from 'prop-types';

import { MaskedTextBox as KendoMaskedTextBox } from '@progress/kendo-react-inputs';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label, Error, Hint } from '@progress/kendo-react-labels';

export const MaskedTextBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, hint, optional, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
            <div className={'k-form-field-wrap'}>
                <KendoMaskedTextBox
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    valid={valid}
                    id={id}
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
MaskedTextBox.displayName = 'MaskedTextBox';
MaskedTextBox.propTypes = {
    valid: PropTypes.bool,
    value: PropTypes.string,
    id: PropTypes.string,
    optional: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    validationMessage: PropTypes.string,
    visited: PropTypes.bool,
};