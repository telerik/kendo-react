import * as React from 'react';

import { FloatingLabel, Label } from '@progress/kendo-react-labels';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 'Japan'];

const App = () => {
    const [recipientName, setRecipientName] = React.useState('');
    const [streetAddress, setStreetAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [zipCode, setZipCode] = React.useState('');
    const [country, setCountry] = React.useState('United States');
    const [deliveryDate, setDeliveryDate] = React.useState<Date | null>(null);

    return (
        <div className="demo-container">
            <div className="form-card">
                <div className="form-header">
                    <h3 className="form-title">Shipping Address</h3>
                    <p className="form-description">Enter your delivery details</p>
                </div>

                <FloatingLabel label="Recipient Name" editorId="recipientName" editorValue={recipientName}>
                    <TextBox
                        id="recipientName"
                        value={recipientName}
                        onChange={(e: TextBoxChangeEvent) => setRecipientName(e.value ?? '')}
                    />
                </FloatingLabel>

                <FloatingLabel label="Street Address" editorId="streetAddress" editorValue={streetAddress}>
                    <TextBox
                        id="streetAddress"
                        value={streetAddress}
                        onChange={(e: TextBoxChangeEvent) => setStreetAddress(e.value ?? '')}
                    />
                </FloatingLabel>

                <div className="form-row">
                    <FloatingLabel label="City" editorId="city" editorValue={city}>
                        <TextBox id="city" value={city} onChange={(e: TextBoxChangeEvent) => setCity(e.value ?? '')} />
                    </FloatingLabel>
                    <FloatingLabel label="ZIP Code" editorId="zipCode" editorValue={zipCode}>
                        <TextBox
                            id="zipCode"
                            value={zipCode}
                            onChange={(e: TextBoxChangeEvent) => setZipCode(e.value ?? '')}
                        />
                    </FloatingLabel>
                </div>

                <div className="form-row">
                    <FloatingLabel label="Country" editorId="country" editorValue={country}>
                        <DropDownList
                            id="country"
                            data={countries}
                            value={country}
                            onChange={(e: DropDownListChangeEvent) => setCountry(e.value)}
                        />
                    </FloatingLabel>
                    <div className="form-field">
                        <Label editorId="deliveryDate" optional={true}>
                            Delivery Date
                        </Label>
                        <DatePicker
                            id="deliveryDate"
                            value={deliveryDate}
                            onChange={(e: DatePickerChangeEvent) => setDeliveryDate(e.value)}
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <Button themeColor="primary">Save Address</Button>
                    <Button fillMode="flat">Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
