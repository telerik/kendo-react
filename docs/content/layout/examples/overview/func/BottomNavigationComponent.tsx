import * as React from 'react';
import { BottomNavigation, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import {
    envelopeIcon, gearIcon, userIcon,
} from '@progress/kendo-svg-icons';

const items = [
    { text: 'Inbox', svgIcon: envelopeIcon, selected: true },
    { text: 'Profile', svgIcon: userIcon },
    { text: 'Settings', svgIcon: gearIcon }
];

const BottomNavigationComponent = (props: any) => {
    const { dir } = props;
    const [selectedId, setSelectedId] = React.useState<number>(items.findIndex(x => x.selected === true));

    const handleSelect = (e: BottomNavigationSelectEvent) => {
        setSelectedId(e.itemIndex);
    }

    return (
        <div className={'bottomnav-wrapper'}>
            <div className={'page'}>
                <div className={'content'}>
                    <h3 className="title k-color-primary">Hello John!</h3>
                </div>
                <BottomNavigation
                    dir={dir}
                    positionMode={'sticky'}
                    items={items.map(
                        (item, index) => ({ ...item, selected: index === selectedId }))}
                    onSelect={handleSelect}
                />
            </div>
            <style>{`
                    .bottomnav-wrapper {
                        width: 300px;
                        margin: 0 auto;
                        box-shadow: 0px 10px 20px #00000029;
                        border-radius: 30px;
                    }
                    .bottomnav-wrapper .page { padding: 10px 10px 0 10px; }
                    .bottomnav-wrapper .content {
                        background: #F9F9F9;
                        border-radius: 30px 30px 0 0;
                        height: 380px;
                    }
                    .bottomnav-wrapper .k-bottom-nav { border-radius: 0 0 20px 20px; }
                    .bottomnav-wrapper .title {
                        text-align: center;
                        font-size: 30px;
                        padding: 40px 0;
                    }`}</style>
        </div>
    )
};

export default BottomNavigationComponent;
