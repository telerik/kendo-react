import * as React from 'react';

import { SvgIcon, IconSize } from '@progress/kendo-react-common';

import { imageIcon } from '@progress/kendo-svg-icons';

const sizes: IconSize[] = ['default', 'xsmall', 'small', 'medium', 'large', 'xlarge'];

const App = () => {
    return (
        <div>
            <div className="wrap">
                {sizes.map((size: IconSize, index) => {
                    return (
                        <span key={index} className="k-d-inline-flex k-flex-col k-align-items-center">
                            <span className="title">{size.toUpperCase()}</span>
                            <SvgIcon icon={imageIcon} size={size} />
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
        </div>
    );
};

export default App;
