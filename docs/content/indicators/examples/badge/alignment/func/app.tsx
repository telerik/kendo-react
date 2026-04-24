import * as React from 'react';

import {
    Badge,
    BadgeContainer,
    BadgeAlign,
} from '@progress/kendo-react-indicators';
import {
    DropDownList,
    DropDownListChangeEvent,
} from '@progress/kendo-react-dropdowns';
import { SvgIcon } from '@progress/kendo-react-common';
import { calendarIcon } from '@progress/kendo-svg-icons';

interface Alignment {
    title: string;
    value: BadgeAlign;
}

const alignments: Alignment[] = [
    { title: 'top start', value: { vertical: 'top', horizontal: 'start' } },
    { title: 'top end', value: { vertical: 'top', horizontal: 'end' } },
    { title: 'bottom start', value: { vertical: 'bottom', horizontal: 'start' } },
    { title: 'bottom end', value: { vertical: 'bottom', horizontal: 'end' } },
];

const App = () => {
    const [alignment, setAlignment] = React.useState<Alignment>({
        title: 'top end',
        value: { vertical: 'top', horizontal: 'end' },
    });

    const handleAlignment = (e: DropDownListChangeEvent) => {
        setAlignment(e.target.value);
    };

    return (
    <div>
      <div className="flex-container">
        <div>Badge Alignment</div>
        <div className="example">
          <DropDownList
            data={alignments}
            textField="title"
            dataItemKey="value"
            value={alignment}
            onChange={handleAlignment}
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="wrap">
          <BadgeContainer>
            <SvgIcon icon={calendarIcon} size={'xxlarge'}/>
            <Badge align={alignment.value}>11+</Badge>
          </BadgeContainer>
        </div>
      </div>
      <style>
        {`.flex-container {
                display: inline-flex;
                flex-direction: column;
                vertical-align: middle;
            }
            .example {
                display: flex;
                margin-bottom: 30px;
            }
            .wrap {
                display: flex;
                padding: 30px;
                width: 370px;
            }`}
      </style>
    </div>
    );
};

export default App;
