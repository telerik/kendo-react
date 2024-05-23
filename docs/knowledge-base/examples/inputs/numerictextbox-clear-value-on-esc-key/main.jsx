import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { FieldWrapper } from '@progress/kendo-react-form';
const App = () => {
  const [value, setValue] = React.useState(null);
  const ChangeKilometers = (e) => {
    setValue(e.value); 
  };
   
  const numericRef = React.useRef(null);
  //Adding event listener for keydown after the component is initialized
  React.useEffect(() => {
    numericRef.current.element.addEventListener('keydown', (e) => {
      if (e.keyCode == '27') {
        setTimeout(() => {
          setValue(null);
          //forcing the visual change by blurring the input
          numericRef.current.element.blur();
          numericRef.current.element.focus();
        });
      }
    });
  }, []);
  return (
    <div>
      <Label>Kilometers:</Label>
      <FieldWrapper>
        <NumericTextBox
          ref={numericRef}
          label={''}
          width={300}
          placeholder="please enter value"
          value={value}
          onChange={ChangeKilometers}
        />
      </FieldWrapper>
      <br />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
