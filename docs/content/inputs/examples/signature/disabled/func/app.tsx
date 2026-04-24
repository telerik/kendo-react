import * as React from 'react';
import { Signature } from '@progress/kendo-react-inputs';
import { sampleSignature } from './shared-in-sample-signature';

const App = () => {
    const [value] = React.useState(sampleSignature);

    return <Signature value={value} disabled={true} />;
};

export default App;
