import * as React from 'react';

import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { bellIcon } from '@progress/kendo-svg-icons';

import { SocialApps } from './social-apps';
import { Contacts } from './contacts';

const App = () => {
    return (
    <div className="example">
      <div className="example-wrap">
        <Contacts />
        <SocialApps />
        <div className="status">
          <Button>
            New Updates
            <Badge themeColor="info" />
          </Button>
          <BadgeContainer>
            <SvgIcon icon={bellIcon} size={'large'} />
            <Badge themeColor="warning" />
          </BadgeContainer>
        </div>
      </div>
      <style>
        {`.example {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .example .status {
            display: flex;
            justify-content: space-between;
            padding: 12px 14px;
        }
        .example-wrap {
            border: 1px solid #ccc;
            width: 230px;
        }
        `}
      </style>
    </div>
    );
};

export default App;
