import * as React from 'react';

import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Button } from '@progress/kendo-react-buttons';
import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, fileIcon, cartIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
    <div className="example">
      <p>With Badge Container</p>
      <div className="wrap">
        <BadgeContainer>
          <Avatar type="initials">KP</Avatar>
          <Badge
            size="small"
            align={{ vertical: 'bottom', horizontal: 'end' }}
            themeColor="success"
            cutoutBorder={true}
          >
            <SvgIcon icon={checkIcon} />
          </Badge>
        </BadgeContainer>
        <BadgeContainer>
          Available Updates
          <Badge themeColor="info" />
        </BadgeContainer>
        <BadgeContainer>
          <SvgIcon icon={fileIcon} size={'xxlarge'} />
          <Badge
            align={{ vertical: 'bottom', horizontal: 'end' }}
            themeColor="dark"
          >
            11
          </Badge>
        </BadgeContainer>
        <BadgeContainer>
          <SvgIcon icon={cartIcon} size={'xxlarge'} />
          <Badge>4</Badge>
        </BadgeContainer>
        <BadgeContainer>
          <Button>Action</Button>
          <Badge themeColor="tertiary">3</Badge>
        </BadgeContainer>
      </div>
      <p>Without Badge Container</p>
      <div className="wrap">
        <span className="mail">
          Mail
          <Badge>87</Badge>
        </span>
        <span className="updates">
          Available Updates
          <Badge themeColor="info" />
        </span>
        <span className="files">
          <SvgIcon icon={fileIcon} size={'xxlarge'} />
          <Badge
            align={{ vertical: 'bottom', horizontal: 'end' }}
            themeColor="dark"
          >
            11
          </Badge>
        </span>
        <span className="shopping-cart">
          <SvgIcon icon={cartIcon} size={'xxlarge'} />
          <Badge>4</Badge>
        </span>
        <span className="sent-items">
          <Button>
            Action
            <Badge themeColor="tertiary">34</Badge>
          </Button>
        </span>
      </div>
      <style>
        {`.example > div {
                margin-bottom: 40px;
            }
            .wrap {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 20px;
            }
            .mail, .shopping-cart, .updates, .files, .sent-items {
                position: relative;
                overflow: visible;
            }`}
      </style>
    </div>
    );
};

export default App;
