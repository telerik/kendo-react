import * as React from 'react';
import { Form, FormElement } from '@progress/kendo-react-form';
import { MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';
import { Hint } from '@progress/kendo-react-labels';
import './styles.css';
const sports = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
];
const App = () => {
    const [value, setValue] = React.useState<string[]>(['Baseball', 'Volleyball']);

    const onChange = (event: MultiSelectChangeEvent) => {
        setValue([...event.value]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="hobbies-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column no-flex">
                        <div className="sidebar-container k-skeleton">
                            <div className="avatar-name-container">
                                <div className="k-skeleton skeleton-avatar" />
                                <div className="name-container">
                                    <div className="k-skeleton skeleton-text" />
                                    <div className="k-skeleton skeleton-small-text-short" />
                                </div>
                            </div>
                            <div className="description-container">
                                <div className="k-skeleton skeleton-small-text" />
                                <div className="k-skeleton skeleton-small-text" />
                                <div className="k-skeleton skeleton-small-text" />
                            </div>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="avatar-title-container">
                            <div className="k-skeleton skeleton-avatar" />
                            <h4 className="k-h4">Hobbies</h4>
                        </div>
                        <div className="component-container">
                            <Form
                                onSubmit={handleSubmit}
                                render={(formRenderProps) => (
                                    <FormElement>
                                        <fieldset>
                                            <div>Favorite sport</div>
                                            <MultiSelect
                                                data={sports}
                                                onChange={onChange}
                                                value={value}
                                                placeholder="Please select ..."
                                            />
                                            <Hint id="sport">You can choose more than one option</Hint>
                                        </fieldset>
                                    </FormElement>
                                )}
                            />
                        </div>
                        <div className="skeleton-container top">
                            <div className="k-skeleton skeleton-box-small" />
                            <div className="k-skeleton skeleton-box-large" />
                        </div>
                        <div className="skeleton-container bottom">
                            <div className="k-skeleton skeleton-box-small" />
                            <div className="k-skeleton skeleton-box-large-double" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
