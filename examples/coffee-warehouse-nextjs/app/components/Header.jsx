"use client";

import * as React from "react";
import * as PropTypes from "prop-types";

import { Button } from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Avatar } from "@progress/kendo-react-layout";
import { useLocalization } from "@progress/kendo-react-intl";
import { menuIcon } from "@progress/kendo-svg-icons";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { locales } from "./../resources/locales";
import headerBg from "../assets/header-bg.png";
import userAvatar from "../assets/userImage.svg";
import { useWarehouseShell } from "./WarehouseShellContext";

const noMessage = "message not defined";
const pageContextKeys = {
  "/warehouse/dashboard": "dashboard",
  "/warehouse/planning": "planning",
  "/warehouse/profile": "profile",
  "/warehouse/settings": "settings",
  "/warehouse/notifications": "notifications",
  "/warehouse/help": "helpSupport",
  "/warehouse/info": "info",
};

export const Header = ({ onButtonClick }) => {
  const pathname = usePathname();
  const localizationService = useLocalization();
  const { expanded, menuButtonRef, toggleDrawer } = useWarehouseShell();
  const [currentLanguage, setCurrentLanguage] = React.useState({
    locale: "English",
    localeId: "en",
  });

  const onLanguageChange = (event) => {
    setCurrentLanguage(event.value);
    onButtonClick(event);
  };

  const pageContextKey =
    pathname === "/warehouse"
      ? "dashboard"
      : pageContextKeys[pathname] || "warehouseOperations";
  const pageContext = localizationService.toLanguageString(
    `custom.${pageContextKey}`,
    noMessage
  );

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${headerBg.src})` }}
    >
      <div className="header__inner">
        <Button
          ref={menuButtonRef}
          className="header__menu"
          aria-label={localizationService.toLanguageString(
            "custom.toggleNavigation",
            noMessage
          )}
          aria-controls="warehouse-navigation"
          aria-expanded={expanded}
          svgIcon={menuIcon}
          fillMode="flat"
          onClick={toggleDrawer}
        />
        <div className="header__brand">
          <span className="header__brand-name">
            {localizationService.toLanguageString(
              "custom.warehouse",
              noMessage
            )}
          </span>
          <span className="header__divider" aria-hidden="true" />
          <span className="header__context">{pageContext}</span>
        </div>
        <div className="header__actions">
          <label className="header__language">
            <span>
              {localizationService.toLanguageString(
                "custom.language",
                noMessage
              )}
            </span>
            <DropDownList
              aria-label={localizationService.toLanguageString(
                "custom.displayLanguage",
                noMessage
              )}
              textField={"locale"}
              dataItemKey={"localeId"}
              data={locales}
              value={currentLanguage}
              onChange={onLanguageChange}
            />
          </label>
          <Avatar type={"image"} shape={"circle"}>
            <Image
              src={userAvatar}
              alt={localizationService.toLanguageString(
                "custom.profile",
                noMessage
              )}
            />
          </Avatar>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";
Header.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
