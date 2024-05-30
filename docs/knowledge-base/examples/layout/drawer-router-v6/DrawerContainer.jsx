import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const items = [
  {
    text: 'Home',
    selected: true,
    route: '/',
  },
  {
    text: 'Products',
    route: '/products',
  },
  {
    text: 'About',
    route: '/about',
  },
];

const DrawerContainer = (props) => {
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
        <Button icon="menu" look="flat" onClick={handleClick} />
        <span className="title">Navigational drawer</span>
      </div>
      <Drawer
        expanded={expanded}
        position={'start'}
        mode={'push'}
        width={120}
        items={items.map((item) => ({
          ...item,
          selected: item.text === selected,
        }))}
        onSelect={onSelect}
      >
        <DrawerContent>{props.children}</DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerContainer;
