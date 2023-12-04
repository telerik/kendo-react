import React from 'react';
import * as PropTypes from 'prop-types';

import { Upload as KendoUpload } from '@progress/kendo-react-upload';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label, Error, Hint } from '@progress/kendo-react-labels';
import { Avatar } from '@progress/kendo-react-layout';

import userAvatar from '../../assets/user-avatar.jpg';

export const Upload = (fieldRenderProps) => {
    const {valid, value, id, optional, label, hint, validationMessage, touched, ...others} = fieldRenderProps;
    const imgRef = React.useRef(null);
    const hasImage = value && value.length > 0;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;

    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    const onChangeHandler = (event) => {
        fieldRenderProps.onChange({ value: event.newState });
    };
    const onRemoveHandler = (event) => {
        fieldRenderProps.onChange({ value: event.newState });
    };

    React.useEffect(
        () => {
            if (hasImage) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    imgRef.current.setAttribute('src', e.target.result)
                }

                reader.readAsDataURL(value[0].getRawFile());
            }
        },
        [value, hasImage]
    );

    return (
        <FieldWrapper>
            <Label id={labelId} editorId={id} editorValid={valid} optional={optional}>
                {label}
                <Avatar style={{width: 100, height: 100, flexBasis: 100}} shape={'circle'} type={'image'}>
                    {
                        hasImage ?
                            <img style={{width: 100, height: 100}} ref={imgRef} src={'#'} alt={'User Avatar'} /> :
                            <img style={{width: 100, height: 100}} src={userAvatar} alt="user-avatar"/>
                    }
                </Avatar>
            </Label>
            <div className={'k-form-field-wrap'}>
                <KendoUpload
                    id={id}
                    valid={valid}
                    autoUpload={false}
                    showActionButtons={false}
                    multiple={false}
                    files={value}
                    onAdd={onChangeHandler}
                    onRemove={onRemoveHandler}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    ariaLabelledBy={labelId}
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

Upload.displayName = 'Upload';
Upload.propTypes = {
    valid: PropTypes.bool,
    value: PropTypes.array,
    id: PropTypes.string,
    optional: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    validationMessage: PropTypes.string,
    visited: PropTypes.bool,
};
