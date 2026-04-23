import * as React from 'react';

import { Badge, BadgeContainer, BadgePosition  } from '@progress/kendo-react-indicators';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon } from '@progress/kendo-svg-icons';

const positions: BadgePosition[] = ['inside', 'edge', 'outside'];

const App = () => {
    const [position, setPosition] = React.useState<BadgePosition>('edge');

    const handleChange = (e: DropDownListChangeEvent) => {
        setPosition(e.target.value);
    };

    return (
    <div>
      <div className="flex-container">
        <div>Badge Position</div>
        <div className="example">
          <DropDownList
            data={positions}
            value={position}
            onChange={handleChange}
                  />
        </div>
      </div>
      <div className="flex-container">
        <div className="wrap">
          <BadgeContainer>
            <Avatar rounded={'full'} type="initials">SB</Avatar>
            <Badge position={position} themeColor="success">
              <SvgIcon icon={ checkIcon } className={'k-badge-icon'} />
            </Badge>
          </BadgeContainer>
        </div >
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
    )
}

export default App;
