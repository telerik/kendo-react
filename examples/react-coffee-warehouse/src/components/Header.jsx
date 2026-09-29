
import * as React from 'react';
import * as PropTypes from 'prop-types';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Avatar } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Badge } from '@progress/kendo-react-indicators';
import { useLocalization } from '@progress/kendo-react-intl';
import { useNavigate } from 'react-router-dom';

import { locales } from './../resources/locales';

import { AppContext } from './../AppContext'
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';

import headerBg from '../assets/header-bg.png';
import userAvatar from '../assets/user-avatar.jpg';

export const Header = (props) => {
    const { onButtonClick } = props;
    const { avatar, localeId, onLanguageChange } = React.useContext(AppContext);
    const localizationService = useLocalization();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');

    const localizedLocales = locales.map(item => ({
        ...item,
        locale: localizationService.toLanguageString(`custom.locale${item.locale}`)
    }));

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
                    <Button fillMode="flat" svgIcon={menuIcon} aria-label={localizationService.toLanguageString('custom.openNavigation')} onClick={onButtonClick} />
                </div>

                <div className="title">
                    <h1>{localizationService.toLanguageString('custom.warehouse')}</h1>
                </div>
                <div className="settings">
                    <Input
                        className="header-search"
                        aria-label={localizationService.toLanguageString('custom.searchWarehouse')}
                        placeholder={localizationService.toLanguageString('custom.searchWarehouse')}
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.value)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                const query = searchTerm.trim();
                                navigate(query ? `/inventory?query=${encodeURIComponent(query)}` : '/inventory');
                            }
                        }}
                    />
                    <div className="header-notifications">
                        <Button fillMode="flat" svgIcon={bellIcon} aria-label={localizationService.toLanguageString('custom.openNotifications')} onClick={() => navigate('/notifications')} />
                        <Badge themeColor="error" shape="dot" />
                    </div>
                    <DropDownList
                        textField={'locale'}
                        dataItemKey={'localeId'}
                        data={localizedLocales}
                        value={localizedLocales.find(item => item.localeId === localeId)}
                        onChange={onLanguageChange}
                    />
                </div>
                <Avatar type={'image'} shape={'circle'}>
                    {
                        hasImage ?
                            <img ref={imgRef} src={'#'} alt={localizationService.toLanguageString('custom.userAvatar')} /> :
                            <img src={userAvatar} alt={localizationService.toLanguageString('custom.userAvatar')} />
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
