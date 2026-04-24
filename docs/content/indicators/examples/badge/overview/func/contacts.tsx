import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, clockIcon, minusIcon } from '@progress/kendo-svg-icons';

const managerAvatar = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg';
const designerAvatar = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/BERGS.jpg';
const pmAvatar = 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg';

export const Contacts = () => {
	return (
		<div className="contacts">
			<div className="k-hbox">
				<BadgeContainer>
					<Avatar type="image">
						<img src={managerAvatar} alt="KendoReact Badge Manager Avatar" />
					</Avatar>
					<Badge
						size="small"
						align={{ vertical: 'bottom', horizontal: 'end' }}
						themeColor="error"
						cutoutBorder={true}
						rounded={'full'}
					>
						<SvgIcon icon={minusIcon} size={'xsmall'} />
					</Badge>
				</BadgeContainer>
				<div className="contact-info">
					<h2>Michael Holz</h2>
					<p>Manager</p>
				</div>
			</div>
			<div className="k-hbox">
				<BadgeContainer>
					<Avatar type="image">
						<img src={designerAvatar} alt="KendoReact Badge Designer Avatar" />
					</Avatar>
					<Badge
						size="small"
						align={{ vertical: 'bottom', horizontal: 'end' }}
						themeColor="success"
						cutoutBorder={true}
						rounded={'full'}
					>
						<SvgIcon icon={checkIcon} size={'xsmall'} />
					</Badge>
				</BadgeContainer>
				<div className="contact-info">
					<h2>Lilly Nelson</h2>
					<p>UX Designer</p>
				</div>
			</div>
			<div className="k-hbox">
				<BadgeContainer>
					<Avatar type="image">
						<img src={pmAvatar} alt="KendoReact Badge Product Manager Avatar" />
					</Avatar>
					<Badge
						size="small"
						align={{ vertical: 'bottom', horizontal: 'end' }}
						themeColor="warning"
						cutoutBorder={true}
						rounded={'full'}
					>
						<SvgIcon icon={clockIcon} size={'xsmall'} />
					</Badge>
				</BadgeContainer>
				<div className="contact-info">
					<h2>André Stewart</h2>
					<p>Product Manager</p>
				</div>
			</div>
			<style>
				{`.contacts h2 {
              font-size: 1.3em;
              font-weight: normal;
              margin: 0;
          }
          .contacts p {
              margin: 0;
              font-size: 0.8em;
          }
          .k-hbox {
              align-items: center;
              border-bottom: 1px solid #ccc;
              padding: 12px 14px;
          }
          .k-hbox .contact-info {
              margin-left: 1em;
          }
          .k-badge .k-icon {
              font-size: 12px;
              color: white;
          }`}
			</style>
		</div>
	);
};
