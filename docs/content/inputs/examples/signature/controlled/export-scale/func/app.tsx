import * as React from 'react';
import { Signature, SignatureChangeEvent } from '@progress/kendo-react-inputs';


const App = () => {
    const [value, setValue] = React.useState<string>();

    const handleOnChange = (event: SignatureChangeEvent) => setValue(event.value);

    return (
    <>
      <Signature
        value={value}
        onChange={handleOnChange}
        smooth={true}
        exportScale={3}
        popupScale={2}
      />

      <div style={{ marginTop: '1em' }}>
        <img
          alt="KendoReact Signature Exported image"
          src={value}
          style={{ border: '1px solid #aaa', padding: '10px' }}
        />
      </div>
    </>
    );
};

export default App;
