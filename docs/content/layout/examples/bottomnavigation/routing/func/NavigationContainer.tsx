import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { BottomNavigation, BottomNavigationItemProps, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import { dollarIcon, fileTxtIcon, gearIcon, homeIcon, moreHorizontalIcon } from '@progress/kendo-svg-icons';

const items: BottomNavigationItemProps[] = [
    { text: 'Home', id: '1', svgIcon: homeIcon, route: '/bottomnavigation-routing', selected: true },
    { text: 'Bills', id: '2', svgIcon: fileTxtIcon, route: '/bottomnavigation-routing/bills' },
    { text: 'Payments', id: '3', svgIcon: dollarIcon, route: '/bottomnavigation-routing/payments' },
    { text: 'Services', id: '3', svgIcon: gearIcon, route: '/bottomnavigation-routing/services' },
    { text: 'More', id: '3', svgIcon: moreHorizontalIcon, route: '/bottomnavigation-routing/more' }
];

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
                    items={items.map((item, index) => ({
                        ...item,
                        selected: index === selected
                    }))}
                    onSelect={onSelect}
                />
            </div>

            <style>{`
                  .example-wrapper {
                      width: 750px;
                      margin: 0 auto;
                      box-shadow: 0px 10px 20px #00000029;
                      border-radius: 30px;
                  }
                  .page { padding: 10px 10px 0 10px; }
                  .content {
                      background: #F9F9F9;
                      border-radius: 30px 30px 0 0;
                      height: 350px;
                      text-align: center;
                  }
                  .k-bottom-nav { border-radius: 0 0 20px 20px; }
                  .title {
                      text-align: center;
                      font-size: 30px;
                      padding: 40px 0;
                  }
              `}</style>
        </div>
    );
};

export default NavigationContainer;
