import React from "react";
import { Menu, MenuItemModel, MenuSelectEvent } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { InputPrefix, InputSeparator, TextBox, Switch } from "@progress/kendo-react-inputs";
import { searchIcon, userIcon, cartIcon } from "@progress/kendo-svg-icons";
import items from "../data/items";
import languageItems from "../data/language-items";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { isAdmin } from "../helpers/adminStore";
import { useStore } from "@nanostores/react";

interface CustomMenuItemModel extends MenuItemModel {
    page?: string;
  }

const Header: React.FC = () => {
  const isAdminValue = useStore(isAdmin);

  const handleCartClick = () => {
    window.location.href = "/kendo-react/kendo-react-e-commerce-astro-app/shoppingcart";
  };

  const handleSwitchChange = () => {
    isAdmin.set(!isAdminValue);
  };

  const handleMenuSelect = (event: MenuSelectEvent) => {
    const selectedItem: CustomMenuItemModel = event.item;

    if (selectedItem.page) {
        window.location.href = '/kendo-react/kendo-react-e-commerce-astro-app/' + selectedItem.page;
        return;
    }

    const selectedCategory = selectedItem.text;
    if (selectedCategory === "All") {
      window.location.href = `/kendo-react/kendo-react-e-commerce-astro-app/products`; // No category filter applied
    } else {
      window.location.href = `/kendo-react/kendo-react-e-commerce-astro-app/products?category=${encodeURIComponent(selectedCategory)}`;
    }
  };

  return (
    <AppBar themeColor="inherit">
      <AppBarSection className="k-flex-basis-0 k-flex-grow k-gap-2 k-align-items-center" style={{ paddingLeft: "50px" }}>
        <a href="/" className="k-d-sm-flex" style={{ marginRight: "50px" }}>
          <img src="/kendo-react/kendo-react-e-commerce-astro-app/vilora-logo.png" alt="Logo" />
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
        <Switch onLabel="Admin" offLabel="Client" checked={isAdminValue} onChange={handleSwitchChange} />
        {/* <Menu items={languageItems} onSelect={handleMenuSelect} /> */}
      </AppBarSection>
    </AppBar>
  );
};

export default Header;
