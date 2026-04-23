import * as React from 'react';

import {
    Badge,
    BadgeContainer,
    BadgeThemeColor,
} from '@progress/kendo-react-indicators';

const themeColors: BadgeThemeColor[] = [
    'base',
    'primary',
    'secondary',
    'tertiary',
    'inherit',
    'info',
    'success',
    'error',
    'warning',
    'dark',
    'light',
    'inverse',
];

const App = () => {
    return (
    <div>
      <div className="wrap">
        {themeColors.map((color: BadgeThemeColor, index) => {
          return (
            <BadgeContainer key={index}>
              <span className="title">{color.toUpperCase()}</span>
              <Badge themeColor={color}>77</Badge>
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
            padding: 6px 8px;
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
