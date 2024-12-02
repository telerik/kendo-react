import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItemModel, MenuSelectEvent } from "@progress/kendo-react-layout";
import { Button, DropDownButton } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { InputPrefix, InputSeparator, TextBox, Switch } from "@progress/kendo-react-inputs";
import { searchIcon, userIcon, cartIcon, paletteIcon } from "@progress/kendo-svg-icons";
import viloraLogo from "@/assets/vilora-logo.png";
import items from "../data/items";
import themeItems from "../data/themeItems";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { useAdminContext } from "../helpers/AdminContext";
import { useCategoriesContext } from "../helpers/CategoriesContext";
import { useThemeContext } from "../helpers/ThemeContext";

interface CustomMenuItemModel extends MenuItemModel {
  page?: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toggleRole } = useAdminContext();
  const { setSelectedCategory } = useCategoriesContext();
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = (event: any) => {
    const selectedTheme = themeItems.find((item) => item.themeName === event.item.themeName);
    if (selectedTheme) {
      setTheme(selectedTheme.link);
      console.log("Theme changed to:", selectedTheme.link);
    } else {
      console.error("Selected theme not found:", event.item.themeName);
    }
  };

  const handleCartClick = () => {
    navigate("/shoppingcart");
  };

  const handleSwitchChange = () => {
    toggleRole();
  };

  const handleMenuSelect = (event: MenuSelectEvent) => {
    const selectedItem: CustomMenuItemModel = event.item;

    if (selectedItem.page) {
      navigate(selectedItem.page);
      return;
    }

    const selectedCategory = selectedItem.text;
    if (selectedCategory === "All") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(selectedCategory ?? null);
      navigate("/category");
    }
  };

  return (
    <>
      <link id="theme-link" rel="stylesheet" href={theme} />
      <AppBar themeColor="inherit">
        <AppBarSection className="k-flex-basis-0 k-flex-grow k-gap-2 k-align-items-center" style={{ paddingLeft: "50px" }}>
          <a href="/" className="k-d-sm-flex" style={{ marginRight: "50px" }}>
            <img src={viloraLogo} alt="Logo" />
          </a>
          <Menu items={items} onSelect={handleMenuSelect} />
        </AppBarSection>
        <AppBarSection className="k-flex-basis-0 k-flex-grow k-justify-content-end k-gap-1.5">
          <TextBox
            placeholder="Search"
            prefix={() => (
              <>
                <InputPrefix orientation="horizontal">
                  <span className="k-input-prefix-text">
                    <SvgIcon icon={searchIcon} size="medium" />
                  </span>
                </InputPrefix>
                <InputSeparator />
              </>
            )}
            style={{ width: 300 }}
          />
          <Button svgIcon={userIcon} fillMode="flat" className="k-ml-2" />
          <Button svgIcon={cartIcon} fillMode="flat" className="k-ml-2" onClick={handleCartClick} />
          <DropDownButton
            svgIcon={paletteIcon}
            items={themeItems}
            textField="themeName"
            fillMode="flat"
            onItemClick={handleThemeChange}
          />
          <Switch className="switch-width" onLabel="Admin" offLabel="Client" onChange={handleSwitchChange} />
        </AppBarSection>
      </AppBar>
    </>
  );
};

export default Header;
