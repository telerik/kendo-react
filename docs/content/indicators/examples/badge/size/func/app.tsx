import * as React from 'react';

import { Badge, BadgeContainer, BadgeSize } from '@progress/kendo-react-indicators';

const sizes: BadgeSize[] = [
    'small', 'medium', 'large'
];

const App = () => {
    return (
    <div>
      <div className="wrap">
        {sizes.map((size: BadgeSize, index) => {
          return (
            <BadgeContainer key={index}>
              <span className="title">{size.toUpperCase()}</span>
              <Badge size={size}>7</Badge>
            </BadgeContainer>
          )
        })}
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
        }`}
      </style>
    </div >
    )
}

export default App;

