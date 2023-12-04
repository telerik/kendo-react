"use client";
import * as React from "react";
import * as PropTypes from "prop-types";

import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Avatar } from "@progress/kendo-react-layout";
import { useLocalization } from "@progress/kendo-react-intl";

import { locales } from "./../resources/locales";

//import { AppContext } from './../AppContext'

import headerBg from "../assets/header-bg.png";
import userAvatar from "../assets/user-avatar.jpg";
import DrawerLayout from "../drawer/layout";
const noMessage = "message not defined";

export const Header = (props) => {
  const { onButtonClick } = props;
  //const { avatar, localeId, onLanguageChange } = React.useContext(AppContext);
  const localizationService = useLocalization();

  const currentLanguage = "es";

  const imgRef = React.useRef(null);
  //const hasImage = avatar && avatar.length > 0;

  React.useEffect(() => {
    //if (hasImage) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imgRef.current.setAttribute("src", e.target.result);
    };

    //reader.readAsDataURL(avatar[0].getRawFile());
    //}
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
            //onChange={onLanguageChange}
          />
        </div>
        <Avatar type={"image"} shape={"circle"}>
          {<img src={userAvatar} alt="user-avatar" />}
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
