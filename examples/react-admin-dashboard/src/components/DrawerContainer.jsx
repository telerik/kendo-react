import * as React from 'react';
import { useLocation, useNavigate, Outlet, Link } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { Alert } from './dashboard/Alert';
import { menuIcon, gridIcon, globeIcon, aggregateFieldsIcon, gearIcon } from '@progress/kendo-svg-icons';


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
    route: '/home/billing',
    disabled: true,
  },
  {
    route: '/home/notifications',
    disabled: true,
  },
  {
    route: '/home/about',
    disabled: true,
  },
];

export const DrawerContainer = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(true);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = (e) => {
    navigate(e.itemTarget.props.route);
  };

  const setSelectedItem = (pathName) => {
    let currentPath = items.find((item) => item.route === pathName);
    if (currentPath.text) {
      return currentPath.text;
    }
  };

  const selected = setSelectedItem(location.pathname);

  return (
    <div>
      <div className="custom-toolbar">
        <Button svgIcon={menuIcon} onClick={handleClick} />
        <span className="overview">{selected === 'Dashboard'? 'Overview' : selected}</span>
        <div className="right-widget">
          <div className="alert-container">
          <Alert/>
          </div>
          <Link to="/home/about" style={{color: '#424242', fontWeight: '400', fontSize: '14px', fontFamily: 'Roboto', marginTop: '3px'}}>About</Link>             
        </div>
      </div>

     <div>

     <div className='user-container' > 
        <img src={require('../assets/people/user-avatar.jpg')} alt="user avatar"/> 
       <h1>Jaxons Danniels</h1> 
       <div className="user-email">jaxons.daniels@company.com</div> 
       <Link to="/"  style={{ textDecoration: 'none' }}>
       <Button className="user-button k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" 
       >Sign Out</Button> 
       </Link>
      </div>
      <Drawer
        expanded={expanded}
        position={'start'}
        mode={'push'}
        width={240}
        items={items.map((item) => ({
          ...item,
          selected: item.text === selected,
        }))}
        onSelect={onSelect}
        className="drawer"
      >
        <DrawerContent>{props.children}<Outlet/> </DrawerContent>
      </Drawer>
     </div>
 
    </div>

  );
};