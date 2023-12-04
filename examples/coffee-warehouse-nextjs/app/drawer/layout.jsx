"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { calendarIcon, menuIcon, userIcon, infoCircleIcon, gridIcon } from "@progress/kendo-svg-icons";

const items = [
  {
    text: "DashBoard",
    svgIcon: gridIcon,
    selected: true,
    route: "/drawer/dashboard",
  },
  {
    text: "Planning",
    svgIcon: calendarIcon,
    route: "/drawer/planning",
  },
  {
    separator: true,
  },
  {
    text: "Info",
    svgIcon: infoCircleIcon,
    route: "/drawer/info",
  },
];

export default function DrawerLayout(props) {
  const children = props.children;
  const [expanded, setExpanded] = React.useState(true);
  const [selected, setSelected] = React.useState("/drawer/dashboard");

  const router = useRouter();

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const setSelectedItem = (pathName) => {
    const currentPath = items.find((item) => item.route === pathName);
    if (currentPath.text) {
      return currentPath.text;
    }
  };

  const onSelect = (e) => {
    router.push(e.itemTarget.props.route);
    setSelected(e.itemTarget.props.route);
  };

  const selectedItem = setSelectedItem(selected);

  return (
    <>
      <div className="custom-toolbar">
        <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
        <h3>Settings</h3>
      </div>
      <Drawer
        expanded={expanded}
        position={"start"}
        mode={"push"}
        mini={true}
        items={items.map((item) => ({
          ...item,
          selected: item.text === selectedItem,
        }))}
        onSelect={onSelect}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </>
  );
}
