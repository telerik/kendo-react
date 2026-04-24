import * as React from 'react';

import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
import {
    facebookIcon,
    twitterIcon,
    vimeoIcon,
    envelopIcon,
} from '@progress/kendo-svg-icons';

export const SocialApps = () => {
    return (
    <div className="wrap">
      <BadgeContainer>
        <SvgIcon icon={facebookIcon} className="social" size={'large'} />
        <Badge>11</Badge>
      </BadgeContainer>
      <BadgeContainer>
        <SvgIcon icon={twitterIcon} className="social" size={'large'} />
        <Badge>3</Badge>
      </BadgeContainer>
      <BadgeContainer>
        <SvgIcon icon={vimeoIcon} className="social" size={'large'} />
        <Badge>77</Badge>
      </BadgeContainer>
      <BadgeContainer>
        <SvgIcon icon={envelopIcon} className="social" size={'large'} />
        <Badge>14+</Badge>
      </BadgeContainer>
      <style>
        {`.wrap {
              display: flex;
              justify-content: space-between;
              padding: 20px 20px;
              border-bottom: 1px solid #ccc;
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
