import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuSelectEvent } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { InputPrefix, InputSeparator, TextBox, Switch } from "@progress/kendo-react-inputs";
import { searchIcon, userIcon, cartIcon } from "@progress/kendo-svg-icons";
import viloraLogo from "@/assets/vilora-logo.png";
import items from "../data/items";
import languageItems from "../data/language-items";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { useAdminContext } from "../helpers/AdminContext";
import { useCategoriesContext } from "../helpers/CategoriesContext"; 

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toggleRole } = useAdminContext();
  const { setSelectedCategory } = useCategoriesContext();

  const handleCartClick = () => {
    navigate("/shoppingcart");
  };

  const handleSwitchChange = () => {
    toggleRole(); 
  };

  const handleMenuSelect = (event: MenuSelectEvent) => {
    const selectedItem = event.item;
  
    if (selectedItem.url) {
      navigate(selectedItem.url);
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
      <AppBar themeColor="inherit">
        <AppBarSection className="k-flex-basis-0 k-flex-grow k-gap-2 k-align-items-center" style={{ paddingLeft: "50px" }}>
          <a href="#" className="k-d-sm-flex" style={{ marginRight: "50px" }}>
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
          <Button
            svgIcon={cartIcon}
            fillMode="flat"
            className="k-ml-2"
            onClick={handleCartClick}
          />
          <Switch
            onLabel="Admin"
            offLabel="Client"
            onChange={handleSwitchChange}
          />
          <Menu items={languageItems} onSelect={handleMenuSelect} />
        </AppBarSection>
      </AppBar>
    </>
  );
};

export default Header;