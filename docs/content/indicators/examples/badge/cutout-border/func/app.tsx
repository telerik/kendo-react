import * as React from 'react';

import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon } from '@progress/kendo-svg-icons';

const avatarSrc = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/SPLIR.jpg';

const App = () => {
	return (
		<div className="wrap">
			<BadgeContainer>
				<Avatar type="image">
					<img src={avatarSrc} alt="KendoReact Badge Avatar" />
				</Avatar>
				<Badge align={{ vertical: 'bottom', horizontal: 'end' }} themeColor="success">
					<SvgIcon icon={checkIcon} />
				</Badge>
			</BadgeContainer>
			<BadgeContainer>
				<Avatar type="image">
					<img src={avatarSrc} alt="KendoReact Badge Avatar" />
				</Avatar>
				<Badge align={{ vertical: 'bottom', horizontal: 'end' }} themeColor="success" cutoutBorder={true}>
					<SvgIcon icon={checkIcon} />
				</Badge>
			</BadgeContainer>
			<style>
				{`.wrap {
            display: flex;
            justify-content: space-around;
            padding: 30px;
            background-color: grey
        }`}
			</style>
		</div>
	);
};

export default App;
