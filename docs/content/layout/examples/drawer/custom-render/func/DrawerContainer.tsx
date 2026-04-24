import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Drawer, DrawerContent, DrawerItem, DrawerItemProps, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { menuIcon } from '@progress/kendo-svg-icons';

const items = [
	{ text: 'Paris', selected: true, flag: 'france-flag', country: 'France', route: '/drawer-custom/' },
	{ separator: true },
	{ text: 'Rome', flag: 'italy-flag', country: 'Italy', route: '/drawer-custom/rome' },
	{ separator: true },
	{ text: 'Berlin', flag: 'germany-flag', country: 'Germany', route: '/drawer-custom/berlin' },
	{ separator: true },
	{ text: 'Madrid', flag: 'spain-flag', country: 'Spain', route: '/drawer-custom/madrid' }
];

const CustomItem = (props: DrawerItemProps) => {
	return (
		<DrawerItem {...props}>
			<span className={'k-svg-icon flag ' + props.flag} />

			<div className="item-descr-wrap">
				<div>{props.text}</div>
				<span className="item-descr">Capital of {props.country}</span>
			</div>
		</DrawerItem>
	);
};

const DrawerContainer = (props) => {
	const navigate = useNavigate();
	const [expanded, setExpanded] = React.useState(true);
	const [selected, setSelected] = React.useState(items.findIndex((x) => x.selected === true));

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setExpanded(!expanded);
	};

	const onSelect = (e: DrawerSelectEvent) => {
		navigate(e.itemTarget.props.route);
		setSelected(e.itemIndex);
	};

	return (
		<div>
			<div className="custom-toolbar">
				<Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
				<span className="title">Weather Forecast in Europe</span>
			</div>
			<Drawer
				expanded={expanded}
				mode="push"
				mini={true}
				width={175}
				items={items.map((item, index) => ({
					...item,
					selected: index === selected
				}))}
				item={CustomItem}
				onSelect={onSelect}
			>
				<DrawerContent>{props.children}</DrawerContent>
			</Drawer>
		</div>
	);
};

export default DrawerContainer;
