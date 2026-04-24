import * as React from 'react';
import { ListNoDataProps } from '@progress/kendo-react-dropdowns';

export const ListNoData = (props: ListNoDataProps) => (
    <div className="k-nodata">
        <div>
            <h4 style={{ fontSize: '1em' }}>
                <span className="k-icon k-i-warning" style={{ fontSize: '2.5em' }} />
                <br />
                <br />
                {props.children}
            </h4>
        </div>
    </div>
);
