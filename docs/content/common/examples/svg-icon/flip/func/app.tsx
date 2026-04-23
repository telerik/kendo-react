import * as React from 'react';

import { SvgIcon, IconFlip } from '@progress/kendo-react-common';

import { fileZipIcon } from '@progress/kendo-svg-icons';

const flipOptions: IconFlip[] = ['default', 'horizontal', 'vertical', 'both'];

const App = () => {
    return (
        <div>
            <div className="wrap">
                {flipOptions.map((flip: IconFlip, index) => {
                    return (
                        <span key={index} className="k-d-inline-flex k-flex-col k-align-items-center">
                            <span className="title">{flip.toUpperCase()}</span>
                            <SvgIcon icon={fileZipIcon} flip={flip} />
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
