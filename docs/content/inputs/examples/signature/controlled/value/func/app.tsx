import * as React from 'react';
import { Signature, SignatureChangeEvent } from '@progress/kendo-react-inputs';
import { sampleSignature } from './shared-in-sample-signature';

const App = () => {
    const [value, setValue] = React.useState(sampleSignature);

    const handleOnChange = (event: SignatureChangeEvent) => setValue(event.value);

    return <Signature value={value} onChange={handleOnChange} popupScale={2} />;
};

export default App;
