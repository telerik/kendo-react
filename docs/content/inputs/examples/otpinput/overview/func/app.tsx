import * as React from 'react';
import { OTPInput, OTPInputChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const App = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: OTPInputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="profile-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column no-flex">
                        <div className="sidebar-container k-skeleton">
                            <div className="avatar-name-container">
                                <div className="k-skeleton skeleton-avatar"></div>
                                <div className="name-container">
                                    <div className="k-skeleton skeleton-text"></div>
                                    <div className="k-skeleton skeleton-small-text-short"></div>
                                </div>
                            </div>
                            <div className="description-container">
                                <div className="k-skeleton skeleton-small-text"></div>
                                <div className="k-skeleton skeleton-small-text"></div>
                                <div className="k-skeleton skeleton-small-text"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="avatar-title-container">
                            <div className="k-skeleton skeleton-avatar"></div>
                            <h4 className="k-h4">Profile Authentication</h4>
                        </div>
                        <div className="skeleton-container top">
                            <div className="k-skeleton skeleton-box-small"></div>
                            <div className="k-skeleton skeleton-box-large"></div>
                        </div>
                        <div className="component-container">
                            <Label>
                                Enter the code sent to your phone
                                <OTPInput
                                    length={6}
                                    groupLength={3}
                                    separator="-"
                                    value={value}
                                    onChange={handleChange}
                                />
                            </Label>
                        </div>
                        <div className="skeleton-container bottom">
                            <div className="k-skeleton skeleton-box-small"></div>
                            <div className="k-skeleton skeleton-box-large-double"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
