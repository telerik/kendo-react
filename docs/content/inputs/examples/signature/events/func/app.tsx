import * as React from 'react';
import { Signature, SignatureChangeEvent } from '@progress/kendo-react-inputs';


const App = () => {
    const [value, setValue] = React.useState<string>();
    const [events, setEvents] = React.useState<string[]>([]);
    const logElement = React.useRef<HTMLUListElement>(null);

    React.useEffect(()=>{
        if(logElement.current){
            logElement.current.scrollTop = logElement.current.scrollHeight;
        }
    });

    const log = (message: string) => {
        setEvents(data => [...data, message]);
    };

    const onChange = (e: SignatureChangeEvent) => {
        console.log('.');
        setValue(e.value);
        log(e.value ? 'Change' : 'Change (cleared)');
    };

    const onFocus = () => {
        log('Focus');
    };

    const onBlur = () => {
        log('Blur');
    };

    const onOpen = () => {
        log('Open');
    };

    const onClose = () => {
        log('Close');
    };

    return (
    <>
      <Signature
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onOpen={onOpen}
        onClose={onClose}
        popupScale={2}
      />
      <div className={'example-config'} style={{ marginTop: 20 }}>
        <p>Event log:</p>
        <ul className={'event-log'} ref={logElement}>
          {events.map((event, idx) => <li key={idx}>{event}</li>)}
        </ul>
      </div>
    </>
    );
};

export default App;
