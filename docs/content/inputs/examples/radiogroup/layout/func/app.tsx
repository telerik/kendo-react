import * as React from 'react';
import { RadioGroup } from '@progress/kendo-react-inputs';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const tasks = [
    { label: 'To Do', value: 'to do', className: 'task red' },
    { label: 'In Progress', value: 'in progress', className: 'task orange' },
    { label: 'Ready for Test', value: 'ready for test', className: 'task blue' },
    { label: 'Done', value: 'done', className: 'task green' }
];

const App = () => {
    const [layout, setLayout] = React.useState<'horizontal' | 'vertical'>('vertical');

    const handleSwitchChange = () => {
        setLayout((prev) => (prev === 'vertical' ? 'horizontal' : 'vertical'));
    };

    return (
        <div>
            <Label>
                Toggle Layout (Vertical / Horizontal) &nbsp;&nbsp;
                <Switch checked={layout === 'horizontal'} onChange={handleSwitchChange} />
            </Label>
            <hr />
            <RadioGroup data={tasks} layout={layout} />
        </div>
    );
};

export default App;
