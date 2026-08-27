import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, DrawerContent, DrawerSelectEvent } from "@progress/kendo-react-layout";
import type { RouteSelection } from "./App";
import {
  menuIcon,
  gridIcon,
  arrowsSwapIcon,
  dollarIcon,
  chartColumnStackedIcon,
  sparklesIcon,
  gearIcon,
  bellIcon,
  questionCircleIcon,
  userIcon,
  fileReportIcon,
  walletIcon,
} from "@progress/kendo-svg-icons";

interface NavigationItem {
  text?: string;
  svgIcon?: typeof menuIcon;
  route?: string;
  separator?: boolean;
}

const items: NavigationItem[] = [
  {
    text: "Menu",
    svgIcon: menuIcon,
  },
  {
    separator: true,
  },
  {
    text: "Home",
    route: `${import.meta.env.BASE_URL}`,
    svgIcon: gridIcon,
  },
  {
    text: "Transactions",
    route: `${import.meta.env.BASE_URL}transactions`,
    svgIcon: arrowsSwapIcon,
  },
  {
    text: "Investments",
    route: `${import.meta.env.BASE_URL}investments`,
    svgIcon: dollarIcon,
  },
  {
    text: "Analytics",
    route: `${import.meta.env.BASE_URL}analytics`,
    svgIcon: chartColumnStackedIcon,
  },
  {
    text: "AI Assistant",
    route: `${import.meta.env.BASE_URL}ai-assistant`,
    svgIcon: sparklesIcon,
  },
  {
    text: "Account detail",
    route: `${import.meta.env.BASE_URL}accounts/checking`,
    svgIcon: walletIcon,
  },
  {
    text: "Budgets",
    route: `${import.meta.env.BASE_URL}budgets`,
    svgIcon: chartColumnStackedIcon,
  },
  {
    text: "Statements",
    route: `${import.meta.env.BASE_URL}statements`,
    svgIcon: fileReportIcon,
  },
  {
    text: "Cards",
    route: `${import.meta.env.BASE_URL}cards`,
    svgIcon: walletIcon,
  },
  {
    separator: true,
  },
  {
    text: "Notifications",
    route: `${import.meta.env.BASE_URL}notifications`,
    svgIcon: bellIcon,
  },
  {
    text: "Profile",
    route: `${import.meta.env.BASE_URL}profile`,
    svgIcon: userIcon,
  },
  {
    text: "Settings",
    route: `${import.meta.env.BASE_URL}settings`,
    svgIcon: gearIcon,
  },
  {
    text: "Help & Support",
    route: `${import.meta.env.BASE_URL}help`,
    svgIcon: questionCircleIcon,
  },
];
interface DrawerContainerProps {
  goToRoute?: RouteSelection;
  children: React.ReactNode;
}

const DrawerContainer = (props: DrawerContainerProps) => {
  const goToRoute = props.goToRoute;
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(window.innerWidth >= 992);
  const selected = items.findIndex((item) => item.route === location.pathname);

  const selectRoute = React.useCallback((itemIndex: number, route?: string) => {
    if (itemIndex === 0) {
      setExpanded((prev) => !prev);
      return;
    }

    if (route) {
      navigate(route);
    }
    setExpanded(false);
  }, [navigate]);

  React.useEffect(() => {
    if (goToRoute) {
      selectRoute(goToRoute.itemIndex, goToRoute.itemTarget.props.route);
    }
  }, [goToRoute, selectRoute]);
  return (
    <>
      <Drawer
        className="app-drawer"
        style={{ height: "100%" }}
        expanded={expanded}
        position={"start"}
        mode={"overlay"}
        mini={true}
        miniWidth={80}
        items={items.map((item, index) => ({
          ...item,
          selected: index === selected,
        }))}
        onSelect={(event: DrawerSelectEvent) => selectRoute(event.itemIndex, event.itemTarget.props.route)}
        onOverlayClick={() => {
          setExpanded(false);
        }}
      >
        <DrawerContent className="app-drawer-content">{props.children}</DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerContainer;
