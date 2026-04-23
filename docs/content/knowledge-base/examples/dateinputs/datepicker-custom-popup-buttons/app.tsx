import * as React from 'react';
import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { Popup, PopupProps } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';
import { useAsyncFocusBlur } from '@progress/kendo-react-common';

// Context type definition
type DateValueContextType = [Date | null, (value: Date | null) => void] | undefined;

const DateValueContext = React.createContext<DateValueContextType>(undefined);

const CustomPopup = (props: PopupProps) => {
    const [, setPickerValue] = React.useContext(DateValueContext);

    const handleButtonClick = (days: number) => {
        const date = new Date();
        date.setDate(date.getDate() - days);
        setPickerValue(date);
    };

    return (
        <Popup {...props}>
            <div style={{ padding: '20px' }}>
                <span>{props.children}</span>
                <br />
                <br />
                <Button size={null} onClick={() => handleButtonClick(7)}>
                    1 week
                </Button>{' '}
                &nbsp;&nbsp;
                <Button size={null} onClick={() => handleButtonClick(28)}>
                    4 weeks
                </Button>{' '}
                &nbsp;&nbsp;
                <Button size={null} onClick={() => handleButtonClick(56)}>
                    8 weeks
                </Button>{' '}
                &nbsp;&nbsp;
                <Button size={null} onClick={() => handleButtonClick(180)}>
                    6 months
                </Button>{' '}
                &nbsp;&nbsp;
                <Button size={null} onClick={() => handleButtonClick(365)}>
                    1 year
                </Button>{' '}
            </div>
        </Popup>
    );
};

const CustomDatePicker = () => {
    const [pickerValue, setPickerValue] = React.useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = React.useState<boolean>(false);

    const handleFocus = () => {
        setShowDatePicker(true);
    };

    const handleBlur = () => {
        setShowDatePicker(false);
    };

    const handleChange = (event: DatePickerChangeEvent) => {
        const newValue = event.value;
        setPickerValue(newValue);

        if (props.onChange) {
            props.onChange(newValue);
        }
    };

    const handleSetPickerValue = (value: Date | null) => {
        setPickerValue(value);

        if (props.onChange) {
            props.onChange(value);
        }
    };

    const handleOpen = () => {
        setShowDatePicker(true);
    };

    const handleClose = () => {
        setShowDatePicker(false);
    };

    const { onFocus, onBlur } = useAsyncFocusBlur({
        onFocus: handleFocus,
        onBlur: handleBlur
    });

    return (
        <DateValueContext.Provider value={[pickerValue, handleSetPickerValue]}>
            <DatePicker
                width="400px"
                popup={CustomPopup}
                show={showDatePicker}
                value={pickerValue}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onOpen={handleOpen}
                onClose={handleClose}
            />
        </DateValueContext.Provider>
    );
};

export default CustomDatePicker;
