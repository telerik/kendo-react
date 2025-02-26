import React from 'react';
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { folderIcon, homeIcon, listUnorderedSquareIcon, userOutlineIcon } from '@progress/kendo-svg-icons';

const drawerItems = [
    { text: "Home", svgIcon: homeIcon, route: '', selected: true, className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary" },
    { text: "Projects", svgIcon: folderIcon, route: '/projects', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary"  },
    { text: "Tasks", svgIcon: listUnorderedSquareIcon, route: '/tasks', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary"  },
    { text: "Team Management", svgIcon: userOutlineIcon, route: '/team-management', className: "rounded-md [.k-selected]:!bg-primary/8 [.k-selected]:!text-primary"  }
];

interface DrawerComponentProps {
  children: React.ReactNode;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ children }) => {
  return (
    <Drawer
      expanded={true}
      mode="push"
      drawerClassName="!flex-none !sticky !bg-surface-alt !px-2 !py-10 !w-16 md:!w-60 [&_.k-drawer-wrapper]:!w-12 md:[&_.k-drawer-wrapper]:!w-56"
      style={{ height: 'calc(100vh - 70px)', top: '70px' }}
      items={drawerItems}
      width={223}
    >
      <DrawerContent>
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;