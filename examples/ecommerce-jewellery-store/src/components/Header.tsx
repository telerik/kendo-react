import React from 'react';
import { Menu, AppBarSpacer } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";

import {
  InputPrefix,
  InputSeparator,
  TextBox,
  Switch
} from "@progress/kendo-react-inputs";


import { searchIcon, userIcon, cartIcon, paletteIcon } from "@progress/kendo-svg-icons";
import viloraLogo from '@/assets/vilora-logo.png';
import items from '@/data/items'
import languageItems from '@/data/language-items';

import {
  AppBar,
  AppBarSection,
} from "@progress/kendo-react-layout";

const Header: React.FC = () => {
  return (
    <>
      <AppBar themeColor="inherit">
        <AppBarSection className="k-d-flex k-align-items-center" style={{ paddingLeft: '50px' }}>
          <a href="#" className="k-d-sm-flex" style={{ marginRight: '50px' }}>
            <img src={viloraLogo} alt="Logo" />
          </a>
          <Menu items={items} />
        </AppBarSection>

        <AppBarSection className="k-mx-auto k-w-full k-d-flex k-justify-content-center">
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
          <div style={{ marginLeft: '20px' }}>
            <Button svgIcon={userIcon} fillMode="flat" className="k-ml-2" />
            <Button svgIcon={cartIcon} fillMode="flat" className="k-ml-2" />
            <Button svgIcon={paletteIcon} fillMode="flat" className="k-ml-2" />
          </div>
        </AppBarSection>

        <AppBarSpacer style={{ width: 4 }} />

        <AppBarSection className="k-d-flex k-flex-grow k-justify-content-end" style={{ marginRight: '50px' }}>
          <Switch />
          <Menu items={languageItems} />
        </AppBarSection>
      </AppBar>
    </>
  );
};

export default Header;
