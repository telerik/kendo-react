import * as React from 'react';

import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';

const roundedOptions: any[] = ['null', 'small', 'medium', 'large', 'full', 'none'];

const App = () => {
    return (
        <div>
            <div className="wrap">
                {roundedOptions.map((option, index) => {
                    return (
                        <BadgeContainer key={index}>
                            <span className="title">{option.toUpperCase()}</span>
                            <Badge rounded={option}>99+</Badge>
                        </BadgeContainer>
                    );
                })}
                <BadgeContainer>
                    <span className="title">CUSTOM</span>
                    <Badge rounded={'none'} className="custom-badge-roundness">
                        99+
                    </Badge>
                </BadgeContainer>
            </div>
            <style>
                {`.k-badge-container {
            margin: 0 30px 20px 0;
        }
        .title {
            color: #6c757d;
            padding: 6px 16px;
        }
        .wrap {
            margin-top: 25px;
            text-align: center;
        }
        .custom-badge-roundness {
          border-bottom-right-radius: 215px;
          border-bottom-left-radius: 415px;
          border-top-left-radius: 215px;
          border-top-right-radius: 415px;
        }`}
            </style>
        </div>
    );
};

export default App;
