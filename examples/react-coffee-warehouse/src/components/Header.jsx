
import * as React from 'react';
import * as PropTypes from 'prop-types';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Avatar } from '@progress/kendo-react-layout';
import { useLocalization } from '@progress/kendo-react-intl';

import { locales } from './../resources/locales';

import { AppContext } from './../AppContext'
import { SvgIcon } from '@progress/kendo-react-common';
import { menuIcon } from '@progress/kendo-svg-icons';

import headerBg from '../assets/header-bg.png';
import userAvatar from '../assets/user-avatar.jpg';

export const Header = (props) => {
    const { onButtonClick } = props;
    const { avatar, localeId, onLanguageChange } = React.useContext(AppContext);
    const localizationService = useLocalization();

    const currentLanguage = locales.find(item => item.localeId === localeId);

    const imgRef = React.useRef(null);
    const hasImage = avatar && avatar.length > 0;

    React.useEffect(
        () => {
            if (hasImage) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    imgRef.current.setAttribute('src', e.target.result)
                }

                reader.readAsDataURL(avatar[0].getRawFile());
            }
        },
        [avatar, hasImage]
    );

    return (
        <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
            <div className="nav-container">
                <div className="menu-button">
                    <SvgIcon icon={menuIcon} onClick={onButtonClick} />
                </div>

                <div className="title">
                    <h1>{localizationService.toLanguageString('custom.warehouse')}</h1>
                </div>
                <div className="settings">
                    <span style={{ padding: '20px' }}>{localizationService.toLanguageString('custom.language')}</span>
                    <DropDownList
                        textField={'locale'}
                        dataItemKey={'localeId'}
                        data={locales}
                        value={currentLanguage}
                        onChange={onLanguageChange}
                    />
                </div>
                <Avatar type={'image'} shape={'circle'}>
                    {
                        hasImage ?
                            <img ref={imgRef} src={'#'} alt={'User Avatar'} /> :
                            <img src={userAvatar} alt="user-avatar" />
                    }
                </Avatar>
            </div>
        </header>
    );
}

Header.displayName = 'Header';
Header.propTypes = {
    page: PropTypes.string,
    onButtonClick: PropTypes.func
};
