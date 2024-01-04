"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Drawer, DrawerContent, DrawerSelectEvent } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { inboxIcon, calendarIcon, heartIcon, linkIcon, bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import "./styles.css";

const items = [
  {
    text: "Inbox",
    svgIcon: inboxIcon,
    selected: true,
    route: "/components/drawer/inbox"
  },
  {
    separator: true
  },
  {
    text: "Notifications",
    svgIcon: bellIcon,
    route: "/components/drawer/notifications"
  },
  {
    text: "Calendar",
    svgIcon: calendarIcon,
    route: "/components/drawer/calendar"
  },
  {
    separator: true
  },
  {
    text: "Attachments",
    svgIcon: linkIcon,
    route: "/components/drawer/attachments"
  },
  {
    text: "Favourites",
    svgIcon: heartIcon,
    route: "/components/drawer/favourites"
  }
];

export default function DrawerLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = React.useState(true);
  const [selected, setSelected] = React.useState("/components/drawer/inbox");
  const router = useRouter();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const setSelectedItem = (pathName: string) => {
    const currentPath: any = items.find((item) => item.route === pathName);
    if (currentPath.text) {
      return currentPath.text;
    }
  };
  const onSelect = (e: DrawerSelectEvent) => {
    router.push(e.itemTarget.props.route);
    setSelected(e.itemTarget.props.route);
  };

  const navigateToIndex = () => {
    router.push('/');
  }

  const selectedItem = setSelectedItem(selected);

  return (
    <div>
      <div><Button onClick={navigateToIndex}>Index Page</Button></div><br />
      <div className="custom-toolbar">
        <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
        <span className="mail-box">Mail Box</span>
      </div>
      <Drawer
        expanded={expanded}
        position={"start"}
        mode={"push"}
        mini={true}
        items={items.map((item) => ({
          ...item,
          selected: item.text === selectedItem
        }))}
        onSelect={onSelect}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </div>
  );
}