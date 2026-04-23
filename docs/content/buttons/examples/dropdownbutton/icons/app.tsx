import * as React from 'react';

import { DropDownButton } from '@progress/kendo-react-buttons';
import { gearIcon } from '@progress/kendo-svg-icons';

const ButtonContainer = () => {
    const settings: any[] = [
        {
            text: 'My Profile'
        },
        {
            text: 'Friend Requests'
        },
        {
            text: 'Account Settings'
        },
        {
            text: 'Support'
        },
        {
            text: 'Log Out'
        }
    ];

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <div className="row">
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>KendoReact svg icon</p>
                    <div className="buttons-container">
                        <DropDownButton
                            className="buttons-container-button"
                            items={settings}
                            svgIcon={gearIcon}
                            text="User Settings"
                        />
                        <DropDownButton
                            className="buttons-container-button k-ml-4"
                            items={settings}
                            svgIcon={gearIcon}
                        />
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 example-col">
                    <p>FontAwesome icon</p>
                    <div className="buttons-container">
                        <DropDownButton
                            className="buttons-container-button"
                            items={settings}
                            iconClass="fa fa-cog fa-fw"
                            text="User Settings"
                        />
                        <DropDownButton
                            className="buttons-container-button k-ml-4"
                            items={settings}
                            iconClass="fa fa-cog fa-fw"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonContainer;
