import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, DrawerContent, DrawerSelectEvent } from "@progress/kendo-react-layout";
import {
  menuIcon,
  gridIcon,
  arrowsSwapIcon,
  dollarIcon,
  chartColumnStackedIcon,
  sparklesIcon,
  gearIcon,
} from "@progress/kendo-svg-icons";

const items = [
  {
    text: "Menu",
    svgIcon: menuIcon,
  },
  {
    separator: true,
  },
  {
    text: "Home",
    selected: true,
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
    separator: true,
  },
  {
    text: "Settings",
    route: `${import.meta.env.BASE_URL}settings`,
    svgIcon: gearIcon,
  },
];
const DrawerContainer = (props: any) => {
  const goToRoute = props.goToRoute; 
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState(
    items.findIndex((x) => x.selected === true)
  );

  const onSelect = React.useCallback((e: DrawerSelectEvent) => {
    if (e.itemIndex === 0) {
      setExpanded((prev) => !prev);
      return;
    }

    navigate(e.itemTarget.props.route);
    setSelected(e.itemIndex);
  }, [navigate]);

  React.useEffect(() => {
    if (goToRoute) {
    onSelect(goToRoute)
    }
  }, [goToRoute]);
  return (
    <>
      <Drawer
        style={{ height: "100%", minWidth: '576px' }}
        expanded={expanded}
        position={"start"}
        mode={"overlay"}
        mini={true}
        miniWidth={80}
        items={items.map((item, index) => ({
          ...item,
          selected: index === selected,
        }))}
        onSelect={onSelect}
        onOverlayClick={() => {
          setExpanded(false);
        }}
      >
        <DrawerContent style={{maxWidth: 1140, margin: 'auto', paddingLeft: '80px'}}>{props.children}</DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerContainer;
