import * as React from 'react';

import { RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { ActiveView, Calendar } from '@progress/kendo-react-dateinputs';

import { ViewConfigurator } from './ViewConfigurator';

const App = () => {
    const [bottomView, setBottomView] = React.useState<ActiveView>('year');
    const [topView, setTopView] = React.useState<ActiveView>('decade');
    const [key, setKey] = React.useState<number>(0);
    const onBottomViewChange = (event: RadioButtonChangeEvent) => {
        setBottomView(event.value);
        setKey((key) => key + 1);
    };
    const onTopViewChange = (event: RadioButtonChangeEvent) => {
        setTopView(event.value);
        setKey((key) => key + 1);
    };
    return (
        <div>
            <ViewConfigurator
                bottomView={bottomView}
                onBottomViewChange={onBottomViewChange}
                topView={topView}
                onTopViewChange={onTopViewChange}
            />
            <Calendar key={key} bottomView={bottomView} topView={topView} />
        </div>
    );
};

export default App;
