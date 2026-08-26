import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  TextBox,
  InputSuffix,
  InputSeparator,
} from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import {
  facebookIcon,
  linkedinIcon,
  xLogoIcon,
} from "@progress/kendo-svg-icons";
import { useStore } from "@nanostores/react";
import { selectedLanguage } from "../helpers/languageStore";
import {
  loadMessages,
  LocalizationProvider,
} from "@progress/kendo-react-intl";

import enMessages from "../data/messages/en";
import frMessages from "../data/messages/fr";
import esMessages from "../data/messages/es";

const languages = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

Object.keys(languages).forEach((lang) => {
  loadMessages(languages[lang], lang);
});

const Footer: React.FC = () => {
  const language = useStore(selectedLanguage);

  const t = languages[language] || languages["en"] || {};

  return (
    <LocalizationProvider language={language}>
      <section className="footer">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="/" className="footer__column">
              <img src="/kendo-react/kendo-react-e-commerce-astro-app/vilora-logo.png" alt="Vilora home" />
            </a>
            <p>{t.cookiesText}</p>
            <p>{t.rightsReservedText}</p>
            <p>{t.subscribeText}</p>
            <Label editorId="email" className="footer__visually-hidden">
              {t.emailPlaceholder}
            </Label>
            <TextBox
              placeholder={t.emailPlaceholder}
              className="footer__subscribe"
              suffix={() => (
                <InputSuffix>
                  <InputSeparator />
                  <Button themeColor="primary">
                    {t.subscribeButtonText}
                  </Button>
                </InputSuffix>
              )}
            />
            <p>{t.followUsText}</p>
            <div className="footer__socials">
              <p
                className="footer__social"
              >
                <SvgIcon icon={facebookIcon} size="xlarge" /> Facebook
              </p>
              <p
                className="footer__social"
              >
                <SvgIcon icon={xLogoIcon} size="xlarge" /> X
              </p>
              <p
                className="footer__social"
              >
                <SvgIcon icon={linkedinIcon} size="xlarge" /> LinkedIn
              </p>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">
              {t.customerCareTitle}
            </h4>
            {Array.isArray(t.customerCareLinks) && t.customerCareLinks.length > 0 ? (
              t.customerCareLinks.map((link: string, index: number) => (
                <a href="#" className="k-link" key={index}>
                  {link}
                </a>
              ))
            ) : (
              <p>No links available.</p>
            )}
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">
              {t.ourCompanyTitle}
            </h4>
            {Array.isArray(t.ourCompanyLinks) && t.ourCompanyLinks.length > 0 ? (
              t.ourCompanyLinks.map((link: string, index: number) => (
                <a href="#" className="k-link" key={index}>
                  {link}
                </a>
              ))
            ) : (
              <p>No links available.</p>
            )}
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">
              {t.legalPrivacyTitle}
            </h4>
            {Array.isArray(t.legalPrivacyLinks) && t.legalPrivacyLinks.length > 0 ? (
              t.legalPrivacyLinks.map((link: string, index: number) => (
                <a href="#" className="k-link" key={index}>
                  {link}
                </a>
              ))
            ) : (
              <p>No links available.</p>
            )}
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default Footer;