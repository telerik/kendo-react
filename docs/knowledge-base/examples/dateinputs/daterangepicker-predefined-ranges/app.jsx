import * as React from 'react';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { CustomPopup } from './customPopup';
import { Popup } from '@progress/kendo-react-popup';
import './styles.css';

const MyContext = React.createContext({});
const CustomPopup = (props) => {
  const { setPickerValue } = React.useContext(MyContext);
  const setToday = () => {
    setPickerValue({ start: new Date(), end: new Date() });
  };

  const setWeek = (ev) => {
    let curr = new Date(); // get current date
    let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6

    let firstday = new Date(curr.setDate(first));
    let lastDay = new Date(curr.setDate(last));
    setPickerValue({ start: firstday, end: lastDay });
  };

  const setMonth = (ev) => {
    let date = new Date();
    let y = date.getFullYear();
    let m = new Date().getMonth();

    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);
    setPickerValue({ start: firstDay, end: lastDay });
  };

  return (
    <Popup
      {...props}
      anchorAlign={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
      popupAlign={{
        horizontal: 'center',
        vertical: 'top',
      }}
      style={{ width: '600px' }}
    >
      <div>
        <div
          style={{
            display: 'inline-flex',
            width: '20%',
          }}
        >
          <div>
            <div className={'preset-buttons'} onClick={setToday}>
              Today
            </div>
            <div className={'preset-buttons'} onClick={setWeek}>
              This week
            </div>
            <div className={'preset-buttons'} onClick={setMonth}>
              This month
            </div>
          </div>
        </div>
        <span
          style={{
            display: 'inline-flex',
            width: '80%',
          }}
        >
          {props.children}
        </span>
      </div>
    </Popup>
  );
};

const App = () => {
  const [pickerValue, setPickerValue] = React.useState(null);

  const onChange = (ev) => {
    setPickerValue(ev.value);
  };
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <MyContext.Provider value={{ setPickerValue }}>
        <DateRangePicker
          show={true}
          value={pickerValue}
          onChange={onChange}
          popup={CustomPopup}
        />
      </MyContext.Provider>
    </div>
  );
};
export default App;