import React from 'react';
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { folderIcon, homeIcon, listUnorderedSquareIcon, questionCircleIcon, userIcon } from '@progress/kendo-svg-icons';
import { To, useLocation, useNavigate } from 'react-router-dom';

const drawerItems = [
    { text: "Home", svgIcon: homeIcon, route: '/', selected: true, className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis" },
    { text: "Projects", svgIcon: folderIcon, route: '/projects', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis"  },
    { text: "Tasks", svgIcon: listUnorderedSquareIcon, route: '/tasks', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis"  },
    { text: "Team Management", svgIcon: userIcon, route: '/team-management', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis"  },
    { text: "Help & Support", svgIcon: questionCircleIcon, route: '/help', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis"  }
];

interface DrawerComponentProps {
  children: React.ReactNode;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onSelect = (e: { itemTarget: { props: { route: To; }; }; itemIndex: React.SetStateAction<number>; }) => {
    navigate(e.itemTarget.props.route);
  };

  const setSelectedItem = (pathName: string) => {
    let currentPath = drawerItems.find((item) => item.route === pathName);
    if (currentPath && currentPath.text) {
      return currentPath.text;
    }
  };

  const selected = setSelectedItem(location.pathname);

  if (document.getElementsByClassName('k-drawer')[0]) {
    document.getElementsByClassName('k-drawer')[0].setAttribute('role', 'navigation');
    document.getElementsByClassName('k-drawer')[0].setAttribute('title', 'Drawer title');
  }
  return (
    <Drawer
      expanded={true}
      mode="push"
      drawerClassName="tracker-drawer"
      items={drawerItems.map(item => ({
        ...item,
        selected: item.text === selected,
      }))}
      onSelect={onSelect}
    >
      <DrawerContent className="tracker-drawer__content">
        <div role="main" className="tracker-drawer__main">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;