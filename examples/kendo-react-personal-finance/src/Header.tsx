import React from "react";
import { Avatar } from "@progress/kendo-react-layout";
import { AutoComplete, AutoCompleteChangeEvent, DropDownList } from "@progress/kendo-react-dropdowns";
import { checkLocalStorageData } from "./data/localStorageUtils";
import { Button } from "@progress/kendo-react-buttons";
import { InputPrefix, InputSeparator } from "@progress/kendo-react-inputs";
import { SvgIcon } from "@progress/kendo-react-common";
import { searchIcon } from "@progress/kendo-svg-icons";

interface HeaderProps {
  onNavigateTo: (data: { itemIndex: number; itemTarget: object }) => void;
  onCurrencyChange: (event: any) => void; 
}

function Header(props: HeaderProps) {
  const personalInfo = checkLocalStorageData("personalInfo");
  const name = personalInfo.name;

  const searchItems = [
    { itemIndex: 2, text: "Transactions Overview", route: `${import.meta.env.BASE_URL}` },
    { itemIndex: 3, text: "Transactions Details", route: `${import.meta.env.BASE_URL}transactions` },
    { itemIndex: 4, text: "Investments", route: `${import.meta.env.BASE_URL}investments` },
    { itemIndex: 5, text: "Analytics", route: `${import.meta.env.BASE_URL}analytics` },
  ];

  const navigateTo = React.useCallback((itemIndex: number, itemTarget: object) => {
    props.onNavigateTo({ itemIndex, itemTarget: { ...itemTarget, route: `${import.meta.env.BASE_URL}${itemTarget.props.route}` } });
  }, [props]);

  const onSearchChange = React.useCallback((event: AutoCompleteChangeEvent) => {
    const dataItem = searchItems.find((item) => item.text === event.value);
    if (dataItem) {
        navigateTo(dataItem.itemIndex, { props: { route: dataItem.route } });
    }
  }, [searchItems, navigateTo]);

  return (
    <header className="k-d-flex k-px-lg-15 k-px-md-15 k-px-sm-5 k-px-xs-5 k-py-6.5 k-gap-4 k-flex-wrap k-justify-content-between k-align-items-center">
      <div className="k-d-flex-row k-shrink-0 k-flex-basis-0 k-flex-grow k-gap-2 k-align-items-center">
        <Avatar size="large">
          <img
            src="./images/avatar-image.jpeg"
            width={65}
            style={{ verticalAlign: "top" }}
          />
        </Avatar>
        <div className="k-d-flex k-d-flex-col k-flex-nowrap k-gap-3 k-align-items-start">
          <span className="k-font-size-xl !k-m-0 k-font-bold k-white-space-nowrap k-h-6 k-align-middle">
            Hi, {name}
          </span>
          <span className="k-font-size-md !k-m-0 k-font-medium k-white-space-nowrap">
            Welcome back
          </span>
        </div>
      </div>
      <div className="k-flex-basis-0 k-shrink-0 k-flex-grow">
        <div className="k-d-flex">
          <AutoComplete
            style={{ width: "100%", minWidth: "215px", maxWidth: "360px" }}
            size={"small"}
            rounded={"large"}
            fillMode={"outline"}
            placeholder={"Search pages..."}
            textField={"text"}
            dataItemKey={"itemIndex"}
            prefix={() => (
              <div className="k-d-flex k-align-items-center">
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
      <div className="k-d-flex k-flex-basis-0 k-shrink-0 k-flex-grow k-justify-content-end k-justify-content-sm-start k-gap-4">
        <Button
          size={"small"}
          fillMode={"solid"}
          themeColor={"primary"}
          rounded={"large"}
          onClick={() => navigateTo(6, { props: { route: `${import.meta.env.BASE_URL}ai-assistant` } })}
        >
          AI ASSISTANT
        </Button>
        <DropDownList
          style={{
            backgroundColor: "#F5F5F5",
            width: "105px",
            border: "1px solid var(--kendo-color-opacity-border, #E0E0E0A8)",
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
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
