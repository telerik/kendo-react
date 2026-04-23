import * as React from 'react';

import { Stepper, Step, StepperChangeEvent } from '@progress/kendo-react-layout';
import { eyeIcon, fileAddIcon, gearIcon, zoomActualSizeIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const stepsWithEmoji = [
    { label: 'Happy', emoji: '😀' },
    { label: 'Angry', emoji: '😠' },
    { label: 'Cool', emoji: '😎' },
    { label: 'Love', emoji: '😍' }
];

const customSteps: any[] = [
    { label: 'Configuration', svgIcon: <SvgIcon icon={gearIcon} /> },
    { label: 'Sizing', svgIcon: <SvgIcon icon={zoomActualSizeIcon} /> },
    { label: 'Preview', svgIcon: <SvgIcon icon={eyeIcon} /> },
    { label: 'Submit', svgIcon: <SvgIcon icon={fileAddIcon} /> },
];

const StepWithEmoji = (props: any) => {
    return (
      <Step {...props}>
        <span className="k-step-indicator" aria-hidden="true" >
          <span className="emoji">{props.emoji}</span>
        </span>
        <span className="k-step-label">
          <span className="k-step-text">{props.label}</span>
        </span>
      </Step>
    );
};

const CustomStep = (props: any) => {
    return (
      <Step {...props}>
        <div className="custom-step">
          <span>{props.svgIcon}</span>
        </div>
        <span className="step-label">{props.label}</span>
      </Step>
    );
};

const App = () => {
    const [value, setValue] = React.useState<number>(2);

    const handleChange = (e: StepperChangeEvent) => {
        setValue(e.value);
    };

    return (
      <React.Fragment>
        <div className="mb-5">
          <Stepper className="emoji-stepper" value={value} onChange={handleChange} items={stepsWithEmoji} item={StepWithEmoji} />
        </div>
        <div className="mb-1">
          <Stepper className="custom-stepper" value={value} onChange={handleChange} items={customSteps} item={CustomStep} />
        </div>
        <style>{`
            .emoji-stepper .emoji {
                height: 100%;
                line-height: 30px;
                font-size: 24px;
            }
            .custom-stepper .k-progressbar {
                height: 4px;
                top: 18px;
            }

            .custom-stepper .k-progressbar .k-selected {
                background: linear-gradient(to right, #ffc837, #ff8008);
            }

            .custom-step {
                width: 40px;
                height: 40px;
                border: 2px solid #ff8008;
                border-radius: 10px;
                background-clip: padding-box;
                border-radius: 10px;
                box-sizing: border-box;
                text-align: center;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
            }

            .k-step-done .custom-step {
                background-image: radial-gradient(circle at center, #ffC837 10px, #ff8008);
            }

            .k-step:not(.k-step-done):not(.k-step-current) .custom-step {
                border: 2px solid #ccc;
            }

            .k-step-link .k-icon {
                font-size: 24px;
                color: #000;
            }

            .k-step-link .step-label {
                color: #75240d;
                font-weight: bold;
            }
            `}</style>
      </React.Fragment>
    );
};

export default App;
