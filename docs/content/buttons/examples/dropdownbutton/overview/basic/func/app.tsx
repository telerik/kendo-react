import * as React from 'react';

import { DropDownButton } from '@progress/kendo-react-buttons';

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
const ButtonContainer = () => {
    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Default Button</p>
                <DropDownButton text="User Settings" items={items} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Primary Button</p>
                <DropDownButton text="User Settings" items={items} themeColor={'primary'} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Outline Button</p>
                <DropDownButton text="User Settings" items={items} fillMode={'outline'} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Flat Button</p>
                <DropDownButton text="User Settings" items={items} fillMode={'flat'} />
            </div>
        </div>
    );
};
export default ButtonContainer;
