import React from 'react';
import * as PropTypes from 'prop-types';

import { Editor as KendoEditor, EditorTools } from '@progress/kendo-react-editor';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label, Error, Hint } from '@progress/kendo-react-labels';

export const Editor = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, hint, optional, value, onChange, ...others } = fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;

    const onChangeHandler = (event) => {
        onChange({value: event.html});
    };

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
            <div className={'k-form-field-wrap'}>
                <KendoEditor
                    id={id}
                    valid={valid}
                    defaultEditMode={'div'}
                    contentStyle={{ height: 150 }}
                    value={value}
                    onChange={onChangeHandler}
                    tools={[
                        [ EditorTools.Bold, EditorTools.Italic, EditorTools.Underline ],
                        [ EditorTools.AlignLeft, EditorTools.AlignCenter, EditorTools.AlignRight ],
                        [ EditorTools.OrderedList, EditorTools.UnorderedList, EditorTools.Indent, EditorTools.Outdent ]
                    ]}
                    {...others}
                />
                {
                    showHint &&
                        <Hint>{hint}</Hint>
                }
                {
                    showValidationMessage &&
                        <Error>{validationMessage}</Error>
                }
            </div>
        </FieldWrapper>
    );
};

Editor.displayName = 'Editor';
Editor.propTypes = {
    valid: PropTypes.bool,
    value: PropTypes.string,
    id: PropTypes.string,
    optional: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    validationMessage: PropTypes.string,
    visited: PropTypes.bool,
    onChange: PropTypes.func
};