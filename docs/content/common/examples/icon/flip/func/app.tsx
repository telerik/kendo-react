import * as React from 'react';

import { Icon, IconFlip } from '@progress/kendo-react-common';

const flipOptions: IconFlip[] = ['default', 'horizontal', 'vertical', 'both'];

const App = () => {
    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
            <div className="wrap">
                {flipOptions.map((flip: IconFlip, index) => {
                    return (
                        <span key={index} className="k-d-inline-flex k-flex-col k-align-items-center">
                            <span className="title">{flip.toUpperCase()}</span>
                            <Icon name="file-zip" flip={flip} />
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
