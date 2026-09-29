"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
} from "@progress/kendo-react-layout";
import { useLocalization } from "@progress/kendo-react-intl";
import {
  calendarIcon,
  userIcon,
  infoCircleIcon,
  gridIcon,
  gearIcon,
  bellIcon,
  questionCircleIcon,
} from "@progress/kendo-svg-icons";
import { useWarehouseShell } from "../components/WarehouseShellContext";

const items = [
  {
    messageKey: "dashboard",
    svgIcon: gridIcon,
    selected: true,
    route: "/warehouse/dashboard",
  },
  {
    messageKey: "planning",
    svgIcon: calendarIcon,
    route: "/warehouse/planning",
  },
  {
    separator: true,
  },
  {
    messageKey: "profile",
    svgIcon: userIcon,
    route: "/warehouse/profile",
  },
  {
    messageKey: "settings",
    svgIcon: gearIcon,
    route: "/warehouse/settings",
  },
  {
    messageKey: "notifications",
    svgIcon: bellIcon,
    route: "/warehouse/notifications",
  },
  {
    messageKey: "helpSupport",
    svgIcon: questionCircleIcon,
    route: "/warehouse/help",
  },
  {
    messageKey: "info",
    svgIcon: infoCircleIcon,
    route: "/warehouse/info",
  },
];

export default function DrawerLayout(props) {
  const children = props.children;
  const router = useRouter();
  const pathname = usePathname();
  const localizationService = useLocalization();
  const { closeDrawer, expanded, isMobile } = useWarehouseShell();
  const drawerRef = React.useRef(null);

  React.useEffect(() => {
    const drawer = drawerRef.current?.element?.querySelector(".warehouse-drawer");
    if (!drawer) {
      return;
    }

    const isClosed = isMobile && !expanded;
    drawer.toggleAttribute("aria-hidden", isClosed);
    drawer.toggleAttribute("inert", isClosed);
  }, [expanded, isMobile]);

  const onSelect = (e) => {
    const route = items[e.itemIndex]?.route;
    if (!route) {
      return;
    }

    router.push(route);
    if (isMobile) {
      closeDrawer();
    }
  };

  return (
    <div
      id="warehouse-navigation"
      className="warehouse-navigation"
    >
      <Drawer
        ref={drawerRef}
        expanded={expanded}
        position={"start"}
        mode={isMobile ? "overlay" : "push"}
        mini={!isMobile}
        drawerClassName="warehouse-drawer"
        items={items.map((item) => {
          if (item.separator) {
            return item;
          }

          const { messageKey, route, ...drawerItem } = item;
          return {
            ...drawerItem,
            text: localizationService.toLanguageString(
              `custom.${messageKey}`,
              messageKey
            ),
            selected:
              item.route === pathname ||
              (pathname === "/warehouse" &&
                item.route === "/warehouse/dashboard"),
            tabIndex: isMobile && !expanded ? -1 : 0,
          };
        })}
        onOverlayClick={closeDrawer}
        onSelect={onSelect}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </div>
  );
}
