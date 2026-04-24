import * as React from 'react';

import { NumericTextBox, NumericTextBoxHandle } from '@progress/kendo-react-inputs';

const App = () => {
    const ref = React.useRef<NumericTextBoxHandle>(null);

    const handleOnWheel = (event) => {
        event.stopPropagation();
    };
    const handleKeyDown = (event) => {
        const charCode = event.keyCode;
        if (
            charCode != 110 &&
            charCode != 188 &&
            charCode != 46 &&
            charCode > 31 &&
            (charCode < 48 || charCode > 57) &&
            (charCode < 37 || charCode > 40)
        ) {
            event.stopPropagation();
            event.preventDefault();
        }
    };
    React.useEffect(() => {
        if (ref.current?.element) {
            const element = ref.current.element;

            element.addEventListener('wheel', handleOnWheel);
            element.addEventListener('keydown', handleKeyDown);

            return () => {
                element.removeEventListener('wheel', handleOnWheel);
                element.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, []);

    return (
        <div>
            <NumericTextBox ref={ref} defaultValue={5} step={2} placeholder={'test'} format="n8" />
        </div>
    );
};
export default App;
