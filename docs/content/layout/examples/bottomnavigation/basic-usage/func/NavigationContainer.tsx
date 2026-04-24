import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { BottomNavigation, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import { envelopIcon, calendarIcon, userIcon } from '@progress/kendo-svg-icons';

const items: any = [
    { text: 'Inbox', id: 1, svgIcon: envelopIcon, route: '/bottomnavigation-basic-usage', selected: true },
    { text: 'Calendar', id: 2, svgIcon: calendarIcon, route: '/bottomnavigation-basic-usage/calendar' },
    { text: 'Profile', id: 3, svgIcon: userIcon, route: '/bottomnavigation-basic-usage/profile' }
];

interface NavigationContainerProps {
    children: React.ReactNode;
}

const NavigationContainer = (props: any) => {
    const navigate = useNavigate();
    const [selected, setSelected] = React.useState(0);

    const onSelect = (ev: BottomNavigationSelectEvent) => {
        navigate(ev.itemTarget.route);
        setSelected(ev.itemIndex);
    };

    return (
        <div className={'example-wrapper'}>
            <div className={'page'}>
                <div className={'content'}>{props.children}</div>
                <BottomNavigation
                    positionMode={'sticky'}
                    items={items.map((item, index) => ({ ...item, selected: index === selected }))}
                    onSelect={onSelect}
                />
            </div>

            <style>{`
                .example-wrapper {
                    width: 350px;
                    margin: 0 auto;
                    box-shadow: 0px 10px 20px #00000029;
                    border-radius: 30px;
                }
                .page { padding: 10px 10px 0 10px; }
                .content {
                    background: #F9F9F9;
                    border-radius: 30px 30px 0 0;
                    height: 550px;
                }
                .k-bottom-nav { border-radius: 0 0 20px 20px; }
                .title {
                    text-align: center;
                    font-size: 30px;
                    padding: 40px 0;
                }
                .list {
                    display: flex;
                    flex-direction: column;
                    padding: 0 20px;
                }
                .list-item {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 30px;
                    position: relative;
                }
                .k-avatar { margin-right: 15px; }
                .separator { border: 1px solid #ccc; }
                .section {
                    background: #EDEDED;
                    font-weight: bold;
                    padding: 2px 5px;
                    margin-bottom: 15px;
                }
                .centered { margin: 30px auto;}
                .v-line {
                    width: 2px;
                    margin: 0 10px 0 15px;
                }
                .profile-image {
                    width: 100px;
                    height: 100px;
                    flex-basis: 100px;
                    padding: 1px;
                    margin: 0 auto;
                }
                .email { font-weight: bold; }
                .my-icon {
                    position: absolute;
                    right: 0;
                }
            `}</style>
        </div>
    );
};

export default NavigationContainer;
