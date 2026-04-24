import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';

const Profile = () => {
    return (
        <div>
            <h1 className={'title k-color-primary'}>My Profile</h1>
            <div className={'list'}>
                <Avatar className={'profile-image'} type={'image'} rounded={'full'}>
                    <img
                        src={(import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/suite/kendoka-react.png'}
                        alt="KendoReact Layout Kendoka Avatar"
                    />
                </Avatar>
                <div className={'email centered'}>myusername@mail.com</div>
                <div className={'list-item separator'} />
                <div className={'list-item sub-title'}>Calendars</div>
                <div className={'list-item'}>
                    <Avatar type={'initials'} rounded={'full'} themeColor={'primary'} size={'small'} />
                    <div>Work</div>
                    <span className={'k-icon k-i-saturation my-icon'} />
                </div>
                <div className={'list-item'}>
                    <Avatar type={'initials'} rounded={'full'} themeColor={'info'} size={'small'} />
                    <div>Family</div>
                    <span className={'k-icon k-i-saturation my-icon'} />
                </div>
                <div className={'list-item'}>
                    <Avatar type={'initials'} rounded={'full'} themeColor={'warning'} size={'small'} />
                    <div>Birthdays</div>
                    <span className={'k-icon k-i-saturation my-icon'} />
                </div>
            </div>
        </div>
    );
};

export default Profile;
