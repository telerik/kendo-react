import * as React from 'react';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';
import { dataStates, dataCities, dataOffices } from './data';

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const [value, setValue] = React.useState({
        state: null,
        city: null,
        office: null,
        offices: dataOffices,
        cities: dataCities
    });

    const usStateChange = (event: DropDownListChangeEvent) => {
        const state = event.target.value;
        const cities = dataCities.filter((city) => city.stateId === state.stateId);

        setValue({
            ...value,
            state: state,
            cities: cities,
            city: null,
            office: null
        });
    };

    const cityChange = (event: DropDownListChangeEvent) => {
        const city = event.target.value;
        const offices = dataOffices.filter((office) => office.cityId === city.cityId);

        setValue({
            ...value,
            city: city,
            offices: offices,
            office: null
        });
    };

    const officeChange = (event: DropDownListChangeEvent) => {
        setValue({ ...value, office: event.target.value });
    };

    const state = value.state;
    const city = value.city;
    const office = value.office;

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card-block">
                    <legend>Choose delivery address</legend>

                    <DropDownList
                        style={{ width: '100%' }}
                        data={dataStates}
                        textField="stateName"
                        label="Select state"
                        onChange={usStateChange}
                        value={state}
                    />

                    <DropDownList
                        style={{ width: '100%' }}
                        disabled={!state}
                        data={value.cities}
                        textField="cityName"
                        label="Select city"
                        onChange={cityChange}
                        value={city}
                    />

                    <DropDownList
                        style={{ width: '100%' }}
                        disabled={!city}
                        data={value.offices}
                        textField="officeName"
                        label="Select office"
                        onChange={officeChange}
                        value={office}
                    />
                    <Button
                        className="k-mt-4 k-d-block"
                        themeColor={'primary'}
                        disabled={!(value.state && value.city && value.office)}
                        onClick={() => {
                            setSuccess(true);
                            setTimeout(() => {
                                setSuccess(false);
                            }, 3000);
                        }}
                    >
                        Confirm
                    </Button>
                    {success && (
                        <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                            Delivery address confirmed!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
