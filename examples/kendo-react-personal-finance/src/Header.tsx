import React from "react";
import { Avatar } from "@progress/kendo-react-layout";
import { AutoComplete, AutoCompleteChangeEvent, DropDownList } from "@progress/kendo-react-dropdowns";
import type { RouteSelection } from "./App";
import { checkLocalStorageData } from "./data/localStorageUtils";
import { Button } from "@progress/kendo-react-buttons";
import { InputPrefix, InputSeparator } from "@progress/kendo-react-inputs";
import { SvgIcon } from "@progress/kendo-react-common";
import { searchIcon } from "@progress/kendo-svg-icons";

interface HeaderProps {
  onNavigateTo: (data: RouteSelection) => void;
  onCurrencyChange: (event: any) => void; 
}

function Header(props: HeaderProps) {
  const personalInfo = checkLocalStorageData("personalInfo");
  const name = personalInfo.name;

  const searchItems = [
    { itemIndex: 2, text: "Account Overview", route: `${import.meta.env.BASE_URL}` },
    { itemIndex: 3, text: "Transactions", route: `${import.meta.env.BASE_URL}transactions` },
    { itemIndex: 4, text: "Investments", route: `${import.meta.env.BASE_URL}investments` },
    { itemIndex: 5, text: "Analytics", route: `${import.meta.env.BASE_URL}analytics` },
    { itemIndex: 7, text: "Account detail", route: `${import.meta.env.BASE_URL}accounts/checking` },
    { itemIndex: 8, text: "Budgets", route: `${import.meta.env.BASE_URL}budgets` },
    { itemIndex: 9, text: "Statements", route: `${import.meta.env.BASE_URL}statements` },
    { itemIndex: 10, text: "Cards", route: `${import.meta.env.BASE_URL}cards` },
    { itemIndex: 12, text: "Notifications", route: `${import.meta.env.BASE_URL}notifications` },
    { itemIndex: 13, text: "Profile", route: `${import.meta.env.BASE_URL}profile` },
    { itemIndex: 14, text: "Settings", route: `${import.meta.env.BASE_URL}settings` },
    { itemIndex: 15, text: "Help & Support", route: `${import.meta.env.BASE_URL}help` },
  ];

  const navigateTo = React.useCallback((itemIndex: number, route: string) => {
    props.onNavigateTo({ itemIndex, itemTarget: { props: { route } } });
  }, [props]);

  const onSearchChange = React.useCallback((event: AutoCompleteChangeEvent) => {
    const dataItem = searchItems.find((item) => item.text === event.value);
    if (dataItem) {
        navigateTo(dataItem.itemIndex, dataItem.route);
    }
  }, [searchItems, navigateTo]);

  return (
    <header className="app-header">
      <div className="app-header__profile">
        <Avatar size="large">
          <img
            src="./images/avatar-image.jpeg"
            width={65}
            style={{ verticalAlign: "top" }}
          />
        </Avatar>
        <div className="app-header__greeting">
          <span className="app-header__name">
            Hi, {name}
          </span>
          <span className="app-header__welcome">
            Welcome back
          </span>
        </div>
      </div>
      <div className="app-header__search">
        <div>
          <AutoComplete
            style={{ width: "100%", minWidth: "215px", maxWidth: "360px" }}
            size={"small"}
            rounded={"large"}
            fillMode={"outline"}
            placeholder={"Search pages..."}
            textField={"text"}
            dataItemKey={"itemIndex"}
            prefix={() => (
              <div className="app-header__search-prefix">
                <InputPrefix orientation="vertical">
                  <SvgIcon icon={searchIcon} />
                </InputPrefix>
                <InputSeparator orientation="vertical" />
              </div>
            )}
            data={searchItems}
            onChange={onSearchChange}
          />
        </div>
      </div>
      <div className="app-header__actions">
        <Button
          size={"small"}
          fillMode={"solid"}
          themeColor={"primary"}
          rounded={"large"}
          onClick={() => navigateTo(6, `${import.meta.env.BASE_URL}ai-assistant`)}
        >
          AI ASSISTANT
        </Button>
        <DropDownList
          style={{
            backgroundColor: "var(--kendo-color-surface-alt)",
            width: "105px",
            border: "1px solid var(--kendo-color-border)",
            fontSize: "var(--kendo-font-size)",
            fontWeight: "var(--kendo-font-weight-normal)",
            color: "var(--kendo-color-on-surface)",
          }}
          rounded={"large"}
          data={["USD", "EUR"]}
          defaultValue={"USD"}
          onChange={props.onCurrencyChange}
        />
      </div>
    </header>
  );
}

export default Header;
