import * as React from 'react';

import { Stepper, StepperChangeEvent } from '@progress/kendo-react-layout';

const App = () => {
    const [step, setStep] = React.useState(0);

    const [steps, setSteps] = React.useState<Array<any>>([
        { label: 'Account Details', isValid: undefined },
        { label: 'Personal Details', isValid: undefined },
        { label: 'Delivery Details', isValid: undefined },
        { label: 'Payment Details', isValid: undefined }
    ]);

    const handleChange = (e: StepperChangeEvent) => {
        const isValid = step % 2 === 0;

        const currentSteps = steps.map((currentStep, index) => ({
            ...currentStep,
            isValid: index === step ? isValid : currentStep.isValid
        }));

        setSteps(currentSteps);
        setStep(e.value);
    };

    return (
      <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 100px)' }}>
        <Stepper
          value={step}
          onChange={handleChange}
          items={steps}
            />
        <Stepper
          value={step}
          onChange={handleChange}
          items={steps}
          mode={'labels'}
            />
      </div>
    );
};

export default App;
