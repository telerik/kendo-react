import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { StyleConfigurator } from './shared-di-style-configurator';

const App = () => {
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [fillMode, setFillMode] = React.useState<'solid' | 'outline' | 'flat'>('solid');
    const [rounded, setRounded] = React.useState<'small' | 'medium' | 'large'>('medium');

    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <h4>Size</h4>
                    <DateInput size={'small'} label={'small'} spinners={true} width={200} />
                    <DateInput size={'medium'} label={'medium'} spinners={true} width={200} />
                    <DateInput size={'large'} label={'large'} spinners={true} width={200} />
                </div>
                <div className="k-col">
                    <h4>Fill Mode</h4>
                    <DateInput fillMode={'solid'} label={'solid'} spinners={true} width={200} />
                    <DateInput fillMode={'outline'} label={'outline'} spinners={true} width={200} />
                    <DateInput fillMode={'flat'} label={'flat'} spinners={true} width={200} />
                </div>
                <div className="k-col">
                    <h4>Rounded</h4>
                    <DateInput rounded={'small'} label={'small'} spinners={true} width={200} />
                    <DateInput rounded={'medium'} label={'medium'} spinners={true} width={200} />
                    <DateInput rounded={'large'} label={'large'} spinners={true} width={200} />
                </div>
            </div>
        </section>
    );
};

export default App;
