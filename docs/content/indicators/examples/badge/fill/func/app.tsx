import * as React from 'react';

import {
    Badge,
    BadgeContainer,
    BadgeFill,
} from '@progress/kendo-react-indicators';

const fillModes: Array<BadgeFill> = ['solid', 'outline'];

const App = () => {
    return (
    <div>
      <div className="wrap">
        {fillModes.map((mode: BadgeFill, index) => {
          return (
            <BadgeContainer key={index}>
              <span className="title">{mode.toUpperCase()}</span>
              <Badge fillMode={mode}>26</Badge>
            </BadgeContainer>
          );
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
    </div>
    );
};

export default App;
