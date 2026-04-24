import * as React from 'react';

import { Form, FormElement, FormRenderProps, FormSubmitClickEvent, FormSeparator } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';

import { AccountDetails } from './shared-fm-account-details';
import { PersonalDetails } from './shared-fm-personal-details';
import { PaymentDetails } from './shared-fm-payment-details';

const stepPages = [AccountDetails, PersonalDetails, PaymentDetails];

interface stepsInterface {
    isValid: boolean | undefined;
    label: string;
}

export const App = () => {
    const [step, setStep] = React.useState<number>(0);
    const [formState, setFormState] = React.useState<Object>({});
    const [steps, setSteps] = React.useState<Array<stepsInterface>>([
        { label: 'Account Details', isValid: undefined },
        { label: 'Personal Details', isValid: undefined },
        { label: 'Payment Details', isValid: undefined }
    ]);

    const lastStepIndex = steps.length - 1;
    const isLastStep = lastStepIndex === step;

    const onStepSubmit = React.useCallback(
        (event: FormSubmitClickEvent) => {
            const { isValid, values } = event;

            const currentSteps = steps.map((currentStep: stepsInterface, index: number) => ({
                ...currentStep,
                isValid: index === step ? isValid : currentStep.isValid
            }));

            setSteps(currentSteps);

            if (!isValid) {
                return;
            }

            setStep(() => Math.min(step + 1, lastStepIndex));
            setFormState(values);

            if (isLastStep) {
                alert(JSON.stringify(values));
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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', direction: 'rtl' }}>
            <Stepper value={step} items={steps} />
            <Form
                initialValues={formState}
                onSubmitClick={onStepSubmit}
                render={(formRenderProps: FormRenderProps) => (
                    <div style={{ alignSelf: 'center' }}>
                        <FormElement style={{ width: 480 }}>
                            {stepPages[step]}
                            <FormSeparator style={{ marginBlock: '20px' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                <span style={{ alignSelf: 'center' }}>Step {step + 1} of 3</span>
                                <div>
                                    {step !== 0 ? (
                                        <Button style={{ marginRight: '16px' }} onClick={onPrevClick}>
                                            Previous
                                        </Button>
                                    ) : undefined}
                                    <Button
                                        themeColor={'primary'}
                                        disabled={!formRenderProps.allowSubmit}
                                        onClick={formRenderProps.onSubmit}
                                    >
                                        {isLastStep ? 'Submit' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </FormElement>
                    </div>
                )}
            />
        </div>
    );
};
export default App;
