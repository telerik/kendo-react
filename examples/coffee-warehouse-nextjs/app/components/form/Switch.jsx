import React from 'react';
import * as PropTypes from 'prop-types';

import { Switch as KendoSwitch } from '@progress/kendo-react-inputs';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label, Error, Hint } from '@progress/kendo-react-labels';

export const Switch = (fieldRenderProps) => {
    const { validationMessage, touched, label, optional, id, valid, disabled, hint, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
                optional={optional}
            >
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <KendoSwitch
                    ref={editorRef}
                    ariaLabelledBy={labelId}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    valid={valid}
                    id={id}
                    disabled={disabled}
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

Switch.displayName = 'Switch';
Switch.propTypes = {
    valid: PropTypes.bool,
    value: PropTypes.bool,
    id: PropTypes.string,
    labelId: PropTypes.string,
    optional: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    validationMessage: PropTypes.string,
    visited: PropTypes.bool,
};