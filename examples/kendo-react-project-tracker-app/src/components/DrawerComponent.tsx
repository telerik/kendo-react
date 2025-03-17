import React from 'react';
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { folderIcon, homeIcon, listUnorderedSquareIcon, userOutlineIcon } from '@progress/kendo-svg-icons';
import { To, useLocation, useNavigate } from 'react-router-dom';

const drawerItems = [
    { text: "Home", svgIcon: homeIcon, route: '/', selected: true, className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis" },
    { text: "Projects", svgIcon: folderIcon, route: '/projects', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis"  },
    { text: "Tasks", svgIcon: listUnorderedSquareIcon, route: '/tasks', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis"  },
    { text: "Team Management", svgIcon: userOutlineIcon, route: '/team-management', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary-emphasis"  }
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

  return (
    <Drawer
      expanded={true}
      mode="push"
      drawerClassName="!flex-none !sticky !bg-surface-alt !px-2 !py-10 !w-16 md:!w-60 [&_.k-drawer-wrapper]:!w-12 md:[&_.k-drawer-wrapper]:!w-56 !top-[70px] !h-[calc(100vh_-_70px)]"
      items={drawerItems.map(item => ({
        ...item,
        selected: item.text === selected,
      }))}
      onSelect={onSelect}
      width={223}
    >
      <DrawerContent>
        <div role="main">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;