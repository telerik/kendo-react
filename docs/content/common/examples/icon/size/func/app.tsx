import * as React from 'react';

import { Icon, IconSize } from '@progress/kendo-react-common';

const sizes: IconSize[] = ['default', 'xsmall', 'small', 'medium', 'large', 'xlarge'];

const App = () => {
    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
            <div className="wrap">
                {sizes.map((size: IconSize, index) => {
                    return (
                        <span key={index} className="k-d-inline-flex k-flex-col k-align-items-center">
                            <span className="title">{size.toUpperCase()}</span>
                            <Icon name="image" size={size} />
                        </span>
                    );
                })}
            </div>
            <style>
                {`
                .title {
                    color: #6c757d;
                    padding: 6px 15px;
                }
                .wrap {
                    margin-top: 15px;
                    text-align: center;
                }`}
            </style>
        </React.Fragment>
    );
};

export default App;
