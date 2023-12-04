"use client";
import * as React from "react";
import * as PropTypes from "prop-types";

import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Avatar } from "@progress/kendo-react-layout";
import { useLocalization } from "@progress/kendo-react-intl";

import { locales } from "./../resources/locales";
import Image from "next/image";

import userAvatar from "../assets/teammember-04.png";
const noMessage = "message not defined";

export const Header = (props) => {
  const { onButtonClick } = props;
  const [currentLanguage, setCurrentLanguage] = React.useState({
    locale: "English",
    localeId: "en",
  });
  const localizationService = useLocalization();

  const imgRef = React.useRef(null);

  const onLanguageChange = (event) => {
    setCurrentLanguage(event.value);
    onButtonClick(event);
  };

  React.useEffect(() => {
    var reader = new FileReader();
    reader.onload = function (e) {
      imgRef.current.setAttribute("src", e.target.result);
    };
  }, []);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="title">
          <h1>
            {localizationService.toLanguageString(
              "custom.warehouse",
              noMessage
            )}
          </h1>
        </div>
        <div className="settings">
          <span style={{ padding: "20px" }}>
            {localizationService.toLanguageString("custom.language", noMessage)}
          </span>
          <DropDownList
            textField={"locale"}
            dataItemKey={"localeId"}
            data={locales}
            value={currentLanguage}
            defaultValue={"es"}
            onChange={onLanguageChange}
          />
        </div>
        <Avatar type={"image"} shape={"circle"}>
          {<Image src={userAvatar} alt="user-avatar" />}
        </Avatar>
      </div>
    </header>
  );
};

Header.displayName = "Header";
Header.propTypes = {
  page: PropTypes.string,
  onButtonClick: PropTypes.func,
};
