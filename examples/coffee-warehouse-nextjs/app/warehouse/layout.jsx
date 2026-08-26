"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import {
  calendarIcon,
  menuIcon,
  userIcon,
  infoCircleIcon,
  gridIcon,
  gearIcon,
  bellIcon,
  questionCircleIcon,
} from "@progress/kendo-svg-icons";

const items = [
  {
    text: "Dashboard",
    svgIcon: gridIcon,
    selected: true,
    route: "/warehouse/dashboard",
  },
  {
    text: "Planning",
    svgIcon: calendarIcon,
    route: "/warehouse/planning",
  },
  {
    separator: true,
  },
  {
    text: "Profile",
    svgIcon: userIcon,
    route: "/warehouse/profile",
  },
  {
    text: "Settings",
    svgIcon: gearIcon,
    route: "/warehouse/settings",
  },
  {
    text: "Notifications",
    svgIcon: bellIcon,
    route: "/warehouse/notifications",
  },
  {
    text: "Help & Support",
    svgIcon: questionCircleIcon,
    route: "/warehouse/help",
  },
  {
    text: "Info",
    svgIcon: infoCircleIcon,
    route: "/warehouse/info",
  },
];

export default function DrawerLayout(props) {
  const children = props.children;
  const [expanded, setExpanded] = React.useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = (e) => {
    router.push(e.itemTarget.props.route);
  };

  return (
    <>
      <div className="custom-toolbar">
        <Button
          aria-label="Toggle navigation"
          svgIcon={menuIcon}
          fillMode="flat"
          onClick={handleClick}
        />
        <h3>Warehouse operations</h3>
      </div>
      <Drawer
        expanded={expanded}
        position={"start"}
        mode={"push"}
        mini={true}
        items={items.map((item) => ({
          ...item,
          selected: item.route === pathname,
        }))}
        onSelect={onSelect}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </>
  );
}
