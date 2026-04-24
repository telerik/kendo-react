import * as React from 'react';

import { Badge, BadgeContainer, Loader, Skeleton } from '@progress/kendo-react-indicators';
import { Avatar } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, bellIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <div className="example">
            <Button themeColor={'primary'} dir="rtl">
                Action
                <Badge align={{ vertical: 'top', horizontal: 'end' }} themeColor="secondary">
                    8
                </Badge>
            </Button>

            <BadgeContainer>
                <SvgIcon icon={bellIcon} />
                <Badge dir="rtl" themeColor="info">
                    99+
                </Badge>
            </BadgeContainer>

            <BadgeContainer dir="rtl">
                <Avatar type="image">
                    <img
                        src={(import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'}
                        alt="KendoReact Badge Avatar"
                    />
                </Avatar>
                <Badge
                    size="small"
                    align={{ vertical: 'bottom', horizontal: 'end' }}
                    themeColor="success"
                    cutoutBorder={true}
                >
                    <SvgIcon icon={checkIcon} />
                </Badge>
            </BadgeContainer>

            <div className="k-d-flex k-flex-column k-align-items-center">
                <Skeleton shape="circle" style={{ width: 60, height: 60, marginBottom: 10 }} />
            </div>

            <Loader type="pulsing" />

            <style>
                {`.example {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .k-icon.k-i-bell {
                    position: relative;
                    overflow: visible;
                    font-size: 32px;
                }`}
            </style>
        </div>
    );
};

export default App;
