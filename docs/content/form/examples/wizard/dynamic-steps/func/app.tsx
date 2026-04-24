import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Stepper, StepProps } from '@progress/kendo-react-layout';
import { Form, FormElement, FormRenderProps, FormSubmitClickEvent, FormSeparator } from '@progress/kendo-react-form';

import { WelcomeStep } from './welcome-step';
import { AccountDetails } from './shared-fm-account-details-simple';
import { FinalStep } from './shared-fm-final-step';

interface stepsInterface {
    isValid: boolean | undefined;
    label: string;
    component: any;
    visible: boolean | undefined;
}

export const WizardContext = React.createContext({});

export const App = () => {
    const [step, setStep] = React.useState<number>(0);
    const [formState, setFormState] = React.useState<Object>({
        anonymous: true
    });
    const [steps, setSteps] = React.useState<Array<stepsInterface>>([
        { label: 'Welcome', component: <WelcomeStep />, isValid: true, visible: true },
        { label: 'Account Details', component: <AccountDetails />, visible: false, isValid: true },
        { label: 'Final step', component: <FinalStep />, isValid: true, visible: true }
    ]);

    const lastStepIndex = steps.filter((s) => s.visible != false).length - 1;
    const isLastStep = lastStepIndex === step;

    const onStepSubmit = React.useCallback(
        (event: FormSubmitClickEvent) => {
            const { isValid, values } = event;

            const currentSteps = steps.map(
                (currentStep: StepProps, index: number) =>
                    ({
                        ...currentStep,
                        isValid: index === step ? isValid : currentStep.isValid
                    } as stepsInterface)
            );

            setSteps(currentSteps);

            if (!isValid) {
                return;
            }

            setStep(() => Math.min(step + 1, lastStepIndex));

            setFormState(values);

            if (isLastStep) {
                let finalValues = { ...values };
                //removing userName and password if the "anonymous" checkbox state was changed
                if (finalValues.anonymous) {
                    delete finalValues.userName;
                    delete finalValues.password;
                }
                alert(JSON.stringify(finalValues));
            }
        },
        [steps, isLastStep, step, lastStepIndex]
    );

    const onPrevClick = React.useCallback(
        (event) => {
            event.preventDefault();
            setStep(() => Math.max(step - 1, 0));
        },
        [step, setStep]
    );

    const setAnonymous = (value: boolean) => {
        const currentSteps = steps.map(
            (currentStep: StepProps) =>
                ({
                    ...currentStep,
                    visible: currentStep.label == 'Account Details' && value ? false : true
                } as stepsInterface)
        );
        setSteps(currentSteps);
    };

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <div>
                    <Stepper
                        value={step}
                        items={steps
                            .filter((s) => s.visible != false)
                            .map((s) => {
                                return {
                                    label: s.label,
                                    isValid: s.isValid
                                };
                            })}
                    />
                </div>
                <div>
                    <WizardContext.Provider value={{ setAnonymous }}>
                        <Form
                            initialValues={formState}
                            onSubmitClick={onStepSubmit}
                            render={(formRenderProps: FormRenderProps) => (
                                <div style={{ alignSelf: 'center' }}>
                                    <FormElement style={{ padding: 20 }}>
                                        {steps.filter((s) => s.visible != false)[step].component}
                                        <FormSeparator style={{ marginBlock: '20px' }} />
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignContent: 'center'
                                            }}
                                        >
                                            <span style={{ alignSelf: 'center' }}>
                                                Step {step + 1} of {steps.filter((s) => s.visible != false).length}
                                            </span>
                                            <div>
                                                {step !== 0 ? (
                                                    <Button style={{ marginRight: '16px' }} onClick={onPrevClick}>
                                                        Previous
                                                    </Button>
                                                ) : undefined}
                                                <Button themeColor={'primary'} onClick={formRenderProps.onSubmit}>
                                                    {isLastStep ? 'Submit' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </FormElement>
                                </div>
                            )}
                        />
                    </WizardContext.Provider>
                </div>
            </div>
        </div>
    );
};
export default App;
