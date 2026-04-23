import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';

import './styles.css';

const profileDescriptions: Record<string, { title: string; text: string }> = {
    personal: {
        title: 'Personal',
        text: 'For individual use \u2014 share basic information, preferences, and connect with others.'
    },
    business: {
        title: 'Business',
        text: 'For companies or organizations \u2014 showcase services, contact details, and professional information.'
    }
};

const items = [
    { value: 'personal', text: 'Personal' },
    { value: 'business', text: 'Business' },
    { value: 'education', text: 'Education', disabled: true }
];

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState('personal');
    const description = profileDescriptions[selectedValue];

    return (
        <div className="segmented-demo card-container">
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
                            <h4 className="k-h4">Create Your Account</h4>
                        </div>

                        <div className="component-container">
                            <h4 className="profile-text">Profile Type</h4>
                            <SegmentedControl
                                className="k-align-self-start"
                                value={selectedValue}
                                onChange={setSelectedValue}
                                size="large"
                                items={items}
                            />
                            {description && (
                                <div className="description-wrapper">
                                    <span className="description-title">{description.title}</span>
                                    <span className="hint">
                                    {description.text}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="skeleton-container">
                            <div className="k-skeleton skeleton-box-large" />
                            <div className="k-skeleton skeleton-box-large" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
