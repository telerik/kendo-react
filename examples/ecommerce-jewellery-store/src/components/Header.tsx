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
import { useLanguageContext } from "../helpers/LanguageContext";

interface CustomMenuItemModel extends MenuItemModel {
  page?: string;
  id?: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toggleRole } = useAdminContext();
  const { setSelectedCategory } = useCategoriesContext();
  const { theme, setTheme } = useThemeContext();
  const { setLanguage, t } = useLanguageContext();

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
    const selectedItem = event.item as CustomMenuItemModel;

    if (selectedItem.page) {
      navigate(selectedItem.page);
      return;
    }

    const selectedCategory = selectedItem.text;
    if (selectedCategory === t.all) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(selectedCategory ?? null);
      navigate("/category");
    }
  };

  const handleLanguageMenuSelect = (event: MenuSelectEvent) => {
    const selectedItem = event.item as CustomMenuItemModel;
    const selectedLanguage = selectedItem.id?.replace("lang-", "") as "en" | "fr" | "es";
    
    if (["en", "fr", "es"].includes(selectedLanguage)) {
      setLanguage(selectedLanguage);
      console.log(`Language changed to: ${selectedLanguage}`);
    } else {
      console.error(`Invalid language selected: ${selectedLanguage}`);
    }
  };
  
  const translatedItems = items.map((item) => ({
    ...item,
    text: t[`menu${item.text}`] || item.text,
    items: item.items?.map((subItem) => ({
      ...subItem,
      text: t[`menu${subItem.text}`] || subItem.text,
    })),
  }));

  const languageMenu = [
    {
      text: t.languageMenuTitle,
      items: [
        { text: t.languageEnglish, id: "lang-en" },
        { text: t.languageFrench, id: "lang-fr" },
        { text: t.languageSpanish, id: "lang-es" },
      ],
    },
  ];

  return (
    <>
      <link id="theme-link" rel="stylesheet" href={theme} />
      <AppBar themeColor="inherit">
        <AppBarSection
          className="k-flex-basis-0 k-flex-grow k-gap-2 k-align-items-center"
          style={{ paddingLeft: "50px" }}
        >
          <a href="/" className="k-d-sm-flex" style={{ marginRight: "50px" }}>
            <img src={viloraLogo} alt="Logo" />
          </a>
          <Menu items={translatedItems} onSelect={handleMenuSelect} />
        </AppBarSection>

        <AppBarSection className="k-flex-basis-0 k-flex-grow k-justify-content-end k-gap-1.5">
          <TextBox
            placeholder={t.searchPlaceholder}
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
          <Switch
            className="switch-width"
            onLabel={t.adminLabel}
            offLabel={t.clientLabel}
            onChange={handleSwitchChange}
          />
          <Menu items={languageMenu} onSelect={handleLanguageMenuSelect} />
        </AppBarSection>
      </AppBar>
    </>
  );
};

export default Header;
