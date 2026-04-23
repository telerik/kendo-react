import * as React from 'react';

import { SvgIcon } from '@progress/kendo-react-common';

const App = () => {
    return (
        <div>
            <div className="wrap">
                <span className="k-d-inline-flex k-flex-col k-align-items-center">
                    <span className="title">PRIMARY</span>
                    <SvgIcon viewBox="0 26 100 48" size="medium" themeColor="primary">
                        <path
                            d="M98.5,47.5C96.5,45.5,81,35,62,35c-2.1,0-4.2,0.1-6.2,0.3L39,26c0,4.5,1.3,9,2.4,12.1C31.7,40.7,23.3,44,16,44L0,34
        c0,8,4,16,4,16s-4,8-4,16l16-10c7.3,0,15.7,3.3,25.4,5.9C40.3,65,39,69.5,39,74l16.8-9.3c2,0.2,4.1,0.3,6.2,0.3
        c19,0,34.5-10.5,36.5-12.5S100.5,49.5,98.5,47.5z M85.5,50c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5
        C88,48.9,86.9,50,85.5,50z"
                        />
                    </SvgIcon>
                </span>
                <span className="k-d-inline-flex k-flex-col k-align-items-center">
                    <span className="title">LARGE</span>
                    <SvgIcon viewBox="0 26 100 48" size="large">
                        <path
                            d="M98.5,47.5C96.5,45.5,81,35,62,35c-2.1,0-4.2,0.1-6.2,0.3L39,26c0,4.5,1.3,9,2.4,12.1C31.7,40.7,23.3,44,16,44L0,34
        c0,8,4,16,4,16s-4,8-4,16l16-10c7.3,0,15.7,3.3,25.4,5.9C40.3,65,39,69.5,39,74l16.8-9.3c2,0.2,4.1,0.3,6.2,0.3
        c19,0,34.5-10.5,36.5-12.5S100.5,49.5,98.5,47.5z M85.5,50c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5
        C88,48.9,86.9,50,85.5,50z"
                        />
                    </SvgIcon>
                </span>
                <span className="k-d-inline-flex k-flex-col k-align-items-center">
                    <span className="title">FLIPPED</span>
                    <SvgIcon viewBox="0 26 100 48" size="medium" flip="horizontal">
                        <path
                            d="M98.5,47.5C96.5,45.5,81,35,62,35c-2.1,0-4.2,0.1-6.2,0.3L39,26c0,4.5,1.3,9,2.4,12.1C31.7,40.7,23.3,44,16,44L0,34
        c0,8,4,16,4,16s-4,8-4,16l16-10c7.3,0,15.7,3.3,25.4,5.9C40.3,65,39,69.5,39,74l16.8-9.3c2,0.2,4.1,0.3,6.2,0.3
        c19,0,34.5-10.5,36.5-12.5S100.5,49.5,98.5,47.5z M85.5,50c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5
        C88,48.9,86.9,50,85.5,50z"
                        />
                    </SvgIcon>
                </span>
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
