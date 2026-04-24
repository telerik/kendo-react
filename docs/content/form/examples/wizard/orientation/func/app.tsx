import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Stepper, StepProps } from '@progress/kendo-react-layout';
import { Form, FormElement, FormRenderProps, FormSubmitClickEvent, FormSeparator } from '@progress/kendo-react-form';
import { RadioGroup, RadioGroupChangeEvent } from '@progress/kendo-react-inputs';

const stepPages = [
    <div>
        <h3>Step 1 Content</h3>
    </div>,
    <div>
        <h3>Step 2 Content</h3>
    </div>,
    <div>
        <h3>Step 3 Content</h3>
    </div>
];

export const App = () => {
    const [orientation, setOrientation] = React.useState<'horizontal' | 'vertical' | undefined>('vertical');
    const [step, setStep] = React.useState<number>(0);
    const [formState, setFormState] = React.useState<Object>({});
    const [steps, setSteps] = React.useState<Array<StepProps>>([
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' }
    ]);

    const onPositionChange = (ev: RadioGroupChangeEvent) => {
        setOrientation(ev.value);
    };
    const lastStepIndex = steps.length - 1;
    const isLastStep = lastStepIndex === step;

    const onStepSubmit = React.useCallback(
        (event: FormSubmitClickEvent) => {
            const { isValid, values } = event;

            const currentSteps = steps.map((currentStep: StepProps, index: number) => ({
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
        <div>
            <div className="example-config row">
                <div className="col-sm-4 col-xs-12">
                    <h4>Wizard Steps Orientation</h4>
                    <p>
                        <RadioGroup
                            value={orientation}
                            onChange={onPositionChange}
                            data={[
                                { label: 'Vertical', value: 'vertical' },
                                { label: 'Horizontal', value: 'horizontal' }
                            ]}
                        />
                    </p>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: orientation == 'vertical' ? 'row' : 'column',
                    justifyContent: 'center'
                }}
            >
                <div>
                    <Stepper value={step} items={steps} orientation={orientation} />
                </div>
                <div>
                    <div></div>
                    <Form
                        initialValues={formState}
                        onSubmitClick={onStepSubmit}
                        render={(formRenderProps: FormRenderProps) => (
                            <div style={{ alignSelf: 'center' }}>
                                <FormElement style={{ padding: 20 }}>
                                    {stepPages[step]}
                                    <FormSeparator style={{ marginBlock: '20px' }} />
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignContent: 'center'
                                        }}
                                    >
                                        <span style={{ alignSelf: 'center' }}>Step {step + 1} of 3</span>
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
                </div>
            </div>
        </div>
    );
};
export default App;
