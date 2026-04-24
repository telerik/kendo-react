import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Stepper, StepProps, StepperChangeEvent } from '@progress/kendo-react-layout';
import { Form, FormElement, FormRenderProps, FormSubmitClickEvent, FormSeparator } from '@progress/kendo-react-form';
import { AccountDetails } from './shared-fm-account-details-simple';
import { FinalStep } from './shared-fm-final-step';
import './styles.css';

interface stepsInterface {
    isValid?: boolean | undefined;
    label: string;
    component: any;
    visible?: boolean | undefined;
}

export const App = () => {
    const submitButton = React.useRef<any>(null);
    const wizardWrapperRef = React.useRef<any>(null);
    const [step, setStep] = React.useState<number>(0);
    const [formState, setFormState] = React.useState<Object>({});
    const [steps, setSteps] = React.useState<Array<stepsInterface>>([
        {
            label: 'Step 1',
            component: <h3>Press Ctrl + LeftArrow to move to next step</h3>
        },
        { label: 'Step 2', component: <AccountDetails /> },
        { label: 'Step 3', component: <FinalStep /> }
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

    const onWrapperKeyDown = (event: any) => {
        if (event.ctrlKey) {
            if (event.code == 'ArrowRight') {
                event.preventDefault();
                if (submitButton.current) {
                    submitButton.current.element.click();
                }
            } else if (event.code == 'ArrowLeft') {
                event.preventDefault();
                let newStep = Math.max(step - 1, 0);
                setStep(newStep);
            }
        }
    };

    //Focusing the wrapping DIV element when the step is changed
    React.useEffect(() => {
        if (wizardWrapperRef.current) {
            setTimeout(wizardWrapperRef.current.focus());
        }
    }, [step]);

    const onStepperChange = (e: StepperChangeEvent) => {
        if (e.value > step) {
            submitButton.current.element.click();
        } else {
            setStep(e.value);
        }
    };

    return (
        <div tabIndex={0} className={'wizard-wrapper'} onKeyDown={onWrapperKeyDown} ref={wizardWrapperRef}>
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
                        onChange={onStepperChange}
                        items={steps
                            .filter((s) => s.visible != false)
                            .map((s, index) => {
                                return {
                                    label: s.label,
                                    isValid: s.isValid,
                                    current: index == step
                                };
                            })}
                    />
                </div>
                <div>
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
                                            <Button
                                                ref={submitButton}
                                                themeColor={'primary'}
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
            </div>
        </div>
    );
};
export default App;
