import * as React from 'react';

import {
    Badge,
    BadgeContainer,
    BadgePosition,
    BadgeAlign,
} from '@progress/kendo-react-indicators';
import {
    DropDownList,
    DropDownListChangeEvent,
} from '@progress/kendo-react-dropdowns';

import { SvgIcon } from '@progress/kendo-react-common';
import {
    facebookIcon,
    twitterIcon,
    vimeoIcon,
    envelopIcon,
} from '@progress/kendo-svg-icons';

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

const positions: BadgePosition[] = ['inside', 'edge', 'outside'];

const initialAlignmentValue: BadgeAlign = {
    vertical: 'top',
    horizontal: 'end',
};

const App = () => {
    const [alignment, setAlignment] = React.useState<Alignment>({
        title: 'top end',
        value: initialAlignmentValue,
    });
    const [position, setPosition] = React.useState<BadgePosition>('edge');

    const handleAlignment = (e: DropDownListChangeEvent) => {
        setAlignment(e.target.value);
    };

    const handlePosition = (e: DropDownListChangeEvent) => {
        setPosition(e.target.value);
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
        <div>Badge Position</div>
        <div className="example">
          <DropDownList
            data={positions}
            value={position}
            onChange={handlePosition}
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="wrap">
          <BadgeContainer>
            <SvgIcon icon={facebookIcon} size={'xxlarge'} />
            <Badge align={alignment.value} position={position}>
              11
            </Badge>
          </BadgeContainer>
          <BadgeContainer>
            <SvgIcon icon={twitterIcon} size={'xxlarge'} />
            <Badge align={alignment.value} position={position}>
              3
            </Badge>
          </BadgeContainer>
          <BadgeContainer>
            <SvgIcon icon={vimeoIcon} size={'xxlarge'} />
            <Badge align={alignment.value} position={position}>
              77
            </Badge>
          </BadgeContainer>
          <BadgeContainer>
            <SvgIcon icon={envelopIcon} size={'xxlarge'} />
            <Badge align={alignment.value} position={position}>
              14+
            </Badge>
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
            justify-content: space-around;
            padding: 30px;
            width: 370px;
        }
        .k-svg-i-twitter {
            color: #4EB9ED;
        }
        .k-svg-i-facebook {
            color: #5270A4;
        }
        .k-svg-i-vimeo {
            color: #B3D062;
        }`}
      </style>
    </div>
    );
};

export default App;
