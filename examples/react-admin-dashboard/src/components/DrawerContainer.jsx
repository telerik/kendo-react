import * as React from 'react';
import { useLocation, useNavigate, Outlet, Link } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerItem } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { Alert } from './dashboard/Alert';
import { menuIcon, gridIcon, globeIcon, aggregateFieldsIcon, gearIcon, bellIcon, questionCircleIcon } from '@progress/kendo-svg-icons';


export const items = [
  {
    text: 'Dashboard',
    selected: true,
    route: '/home/dashboard',
    svgIcon: gridIcon
  },
  {
    text: 'Performance and sales',
    selected: false,
    route: '/home/performance-and-sales',
    svgIcon: globeIcon
  },
  {
    text: 'Products',
    selected: false,
    route: '/home/products',
    svgIcon: aggregateFieldsIcon,
  },
  { separator: true },
  {
    text: 'Settings',
    selected: false,
    route: '/home/account',
    svgIcon: gearIcon,
  },
  {
    text: 'Notifications',
    route: '/home/notifications',
    svgIcon: bellIcon,
  },
  {
    text: 'Help & support',
    route: '/home/help',
    svgIcon: questionCircleIcon,
  },
  {
    isUserProfile: true,
    disabled: true,
  },
];

const DrawerNavigationItem = ({ isUserProfile, ...itemProps }) => {
  if (isUserProfile) {
    return (
      <li className="drawer-user" role="presentation">
        <img src={require('../assets/people/user-avatar.jpg')} alt="Jaxons Danniels" />
        <h1>Jaxons Danniels</h1>
        <div className="user-email">jaxons.daniels@company.com</div>
        <Link to="/">
          <Button className="user-button">Sign Out</Button>
        </Link>
      </li>
    );
  }

  return (
    <DrawerItem {...itemProps}>
      {itemProps.svgIcon && <SvgIcon icon={itemProps.svgIcon} />}
      <span className="k-item-text">{itemProps.text}</span>
    </DrawerItem>
  );
};

export const DrawerContainer = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(true);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = (e) => {
    if (e.itemTarget.props.route) {
      navigate(e.itemTarget.props.route);
    }
  };

  const setSelectedItem = (pathName) => {
    let currentPath = items.find((item) => item.route === pathName);
    if (currentPath?.text) {
      return currentPath.text;
    }
    return 'Dashboard';
  };

  const selected = setSelectedItem(location.pathname);

  return (
    <div className="app-shell">
      <header className="custom-toolbar">
        <Button svgIcon={menuIcon} onClick={handleClick} aria-label="Toggle navigation" title="Toggle navigation" />
        <span className="overview">{selected === 'Dashboard'? 'Overview' : selected}</span>
        <div className="toolbar-actions">
          <div className="alert-container">
          <Alert/>
          </div>
          <Link to="/home/about" className="toolbar-link">About</Link>
        </div>
      </header>

     <div>

      <Drawer
        expanded={expanded}
        position={'start'}
        mode={'push'}
        width={240}
        items={items.map((item) => ({
          ...item,
          selected: item.text === selected,
        }))}
        item={DrawerNavigationItem}
        onSelect={onSelect}
        className="drawer"
      >
        <DrawerContent>
          <main className="app-content">{props.children}<Outlet/></main>
        </DrawerContent>
      </Drawer>
     </div>

    </div>

  );
};