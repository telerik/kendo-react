import * as React from 'react';

import { Loader, LoaderThemeColor } from '@progress/kendo-react-indicators';

const themeColors: LoaderThemeColor[] = [
    'primary',
    'secondary',
    'tertiary',
    'info',
    'success',
    'error',
    'warning',
    'dark',
    'light',
    'inverse'
];

const App = () => {
    return(
    <div>
      <div className="wrap">
        {themeColors.map((color: LoaderThemeColor, index) => {
          return (
            <span key={index} className="k-d-inline-flex k-flex-col k-align-items-center">
              <span className="title">{color.toUpperCase()}</span>
              <Loader themeColor={color} />
            </span>
          )
        })}
      </div >
      <style>
        {`.title {
            color: #6c757d;
            padding: 6px 15px;
        }
        .wrap {
            margin-top: 15px;
            text-align: center;
        }`}
      </style>
    </div >
    );
}

export default App;
