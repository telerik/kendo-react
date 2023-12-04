'use client';
import * as React from 'react';

import { useLocalization } from '@progress/kendo-react-intl';
//import { useNavigate } from "react-router-dom";
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import { Input } from '../../components/form/Input';
import { MaskedTextBox } from '../../components/form/MaskedTextBox';
import { DropDownList } from '../../components/form/DropDownList';
import { Editor } from '../../components/form/Editor';
import { Upload } from '../../components/form/Upload';
import { RadioGroup } from '../../components/form/RadioGroup';
import { Switch } from '../../components/form/Switch';

//import { AppContext } from './../AppContext'

import { countries } from '../../resources/countries';
import { teams } from '../../resources/teams';

import { requiredValidator, emailValidator, phoneValidator, biographyValidator } from '../../validators'

const countriesData = countries.map(country => country.name);
const teamsData = teams.map(team => ({
    value: team.teamID,
    label: team.teamName
}));

const noMessage = 'message not defined';

export default function Profile() {
    //const {languageId, onLanguageChange, onProfileChange, ...formValues} = React.useContext(AppContext);
    const localizationService = useLocalization();
    //const history = useNavigate();

    const onSubmit = React.useCallback(
        (dataItem) => {
            //onProfileChange({dataItem});

            //history('/');
        },
        []
    );

    const onCancelClick = React.useCallback(
        () => {
            //history('/');
        },
        []
    );

    return (
        <div id="Profile" className="profile-page main-content">
            <div className="card-container">
                <div className="card-component">
                    <Form
                        onSubmit={onSubmit}
                        initialValues={{
                            ///...formValues
                        }}
                        render={(formRenderProps) => (
                            <FormElement horizontal={true} style={{ maxWidth: 700 }}>
                                <Field
                                    id={'avatar'}
                                    name={'avatar'}
                                    label={''}
                                    validator={requiredValidator}
                                    component={Upload}
                                />
                                <Field
                                    id={'firstName'}
                                    name={'firstName'}
                                    label={localizationService.toLanguageString('custom.firstName', noMessage)}
                                    validator={requiredValidator}
                                    component={Input}
                                />
                                <Field
                                    id={'middleName'}
                                    name={'middleName'}
                                    label={localizationService.toLanguageString('custom.middleName', noMessage)}
                                    optional={true}
                                    component={Input}
                                />
                                <Field
                                    id={'lastName'}
                                    name={'lastName'}
                                    label={localizationService.toLanguageString('custom.lastName', noMessage)}
                                    validator={requiredValidator}
                                    component={Input}
                                />
                                <Field
                                    id={'email'}
                                    name={'email'}
                                    type={'email'}
                                    placeholder={'e.g.: peter@gmail.com'}
                                    label={localizationService.toLanguageString('custom.email', noMessage)}
                                    validator={emailValidator}
                                    component={Input}
                                />
                                <Field
                                    id={'phoneNumber'}
                                    name={'phoneNumber'}
                                    label={localizationService.toLanguageString('custom.phoneNumber', noMessage)}
                                    mask={'(+9) 0000-000-00-00'}
                                    validator={phoneValidator}
                                    component={MaskedTextBox}
                                />
                                <Field
                                    id={'country'}
                                    name={'country'}
                                    label={localizationService.toLanguageString('custom.country', noMessage)}
                                    data={countriesData}
                                    component={DropDownList}
                                />
                                <Field
                                    id={'biography'}
                                    name={'biography'}
                                    label={localizationService.toLanguageString('custom.biography', noMessage)}
                                    validator={biographyValidator}
                                    component={Editor}
                                />
                                <Field
                                    labelId={'isInPublicDirectoryLabel'}
                                    name={'isInPublicDirectory'}
                                    label={localizationService.toLanguageString('custom.public', noMessage)}
                                    component={Switch}
                                />
                                <Field
                                    labelId={'teamlabel'}
                                    name={'teamId'}
                                    layout={'horizontal'}
                                    label={localizationService.toLanguageString('custom.team', noMessage)}
                                    component={RadioGroup}
                                    data={teamsData}
                                />
                                <hr />
                                <div className={'k-form-buttons'}>
                                    <Button
                                        onClick={onCancelClick}
                                    >
                                        {localizationService.toLanguageString('custom.cancel', noMessage)}
                                    </Button>
                                    <Button
                                        themeColor={"primary"}
                                        type={'submit'}
                                        disabled={!formRenderProps.allowSubmit}
                                    >
                                        {localizationService.toLanguageString('custom.saveChanges', noMessage)}
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}