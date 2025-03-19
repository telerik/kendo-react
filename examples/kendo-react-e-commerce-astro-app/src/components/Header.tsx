import React, { useCallback, useMemo, useEffect, useState } from "react";
import { Menu, MenuSelectEvent, MenuItemModel } from "@progress/kendo-react-layout";
import { Button, DropDownButton } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  InputPrefix,
  InputSeparator,
  TextBox,
  Switch,
} from "@progress/kendo-react-inputs";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import {
  searchIcon,
  userIcon,
  cartIcon,
  paletteIcon,
} from "@progress/kendo-svg-icons";
import { isAdmin } from "../helpers/adminStore";
import { useStore } from "@nanostores/react";
import { loadMessages, LocalizationProvider } from "@progress/kendo-react-intl";
import themeItems from "../data/themeItems";
import enMessages from "../data/messages/en";
import frMessages from "../data/messages/fr";
import esMessages from "../data/messages/es";
import { selectedLanguage } from "../helpers/languageStore";

const messages = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

Object.keys(messages).forEach((lang) => {
  loadMessages(messages[lang], lang);
});

interface ExtendedMenuItemModel extends MenuItemModel {
  category?: string;
  url?: string;
  code?: string;
}

const Header: React.FC = () => {
  const isAdminValue = useStore(isAdmin);
  const language = useStore(selectedLanguage);
  const t = messages[language];

  const menuItems = useMemo(
    () => [
      {
        text: t.menuHome,
        url: "/kendo-react/kendo-react-e-commerce-astro-app/",
      },
      {
        text: t.menuJewelry,
        items: [
          { text: t.menuBracelets, url: "/kendo-react/kendo-react-e-commerce-astro-app/products?category=Bracelets" },
          { text: t.menuRings, url: "/kendo-react/kendo-react-e-commerce-astro-app/products?category=Rings" },
          { text: t.menuEarrings, url: "/kendo-react/kendo-react-e-commerce-astro-app/products?category=Earrings" },
          { text: t.menuWatches, url: "/kendo-react/kendo-react-e-commerce-astro-app/products?category=Watches" },
          { text: t.menuNecklaces, url: "/kendo-react/kendo-react-e-commerce-astro-app/products?category=Necklaces" },
        ],
      },
      {
        text: t.menuContacts,
        url: "/kendo-react/kendo-react-e-commerce-astro-app/contacts",
      },
    ],
    [t]
  );

  const languageItems = useMemo(
    () => [
      {
        text: t.languageMenuTitle,
        items: [
          { text: t.languageEnglish, code: "en" },
          { text: t.languageFrench, code: "fr" },
          { text: t.languageSpanish, code: "es" },
        ],
      },
    ],
    [t]
  );

  const [theme, setTheme] = useState<string>(
    "https://unpkg.com/@progress/kendo-theme-default@10.3.1/dist/default-main.css"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme;
    }
  }, [theme]);

  const handleThemeChange = (event: any) => {
    const selectedTheme = themeItems.find((item) => item.themeName === event.item.themeName);
    if (selectedTheme) {
      setTheme(selectedTheme.link);
      localStorage.setItem("theme", selectedTheme.link);
    }
  };

  const handleCartClick = () => {
    window.location.href = "/kendo-react/kendo-react-e-commerce-astro-app/shoppingcart";
  };

  const handleSwitchChange = () => {
    isAdmin.set(!isAdminValue);
  };

  const handleMenuSelect = (event: MenuSelectEvent) => {
    const selectedItem = event.item as ExtendedMenuItemModel;
    if (selectedItem.url) {
      window.location.href = selectedItem.url;
    }
  };

  const handleLanguageMenuSelect = useCallback(
    (event: MenuSelectEvent) => {
      const selectedLangCode = (event.item as ExtendedMenuItemModel).code;
      if (selectedLangCode && messages[selectedLangCode]) {
        selectedLanguage.set(selectedLangCode);
      }
    },
    []
  );

  return (
    <>
      <link id="theme-link" rel="stylesheet" href={theme} />
      <LocalizationProvider language={language}>
        <AppBar themeColor="inherit">
          <AppBarSection
            className="k-flex-basis-0 k-flex-grow k-gap-2 k-align-items-center"
            style={{ paddingLeft: "50px" }}
          >
            <a
              href="/kendo-react/kendo-react-e-commerce-astro-app/"
              className="k-d-sm-flex"
              style={{ marginRight: "50px" }}
            >
              <img
                src="/kendo-react/kendo-react-e-commerce-astro-app/vilora-logo.png"
                alt="Logo"
              />
            </a>
            <Menu items={menuItems} onSelect={handleMenuSelect} />
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
            <Button
              svgIcon={cartIcon}
              fillMode="flat"
              className="k-ml-2"
              onClick={handleCartClick}
            />
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
              checked={isAdminValue}
              onChange={handleSwitchChange}
            />
            <Menu items={languageItems} onSelect={handleLanguageMenuSelect} />
          </AppBarSection>
        </AppBar>
      </LocalizationProvider>
    </>
  );
};

export default Header;
