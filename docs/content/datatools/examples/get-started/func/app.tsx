import * as React from 'react';
import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';

const App = () => {
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(10);

    const handlePageChange = (event: PageChangeEvent) => {
        setSkip(event.skip);
        setTake(event.take);
    };
    return <Pager skip={skip} take={take} total={50} previousNext={true} onPageChange={handlePageChange} />;
};

export default App;
