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
  twitterIcon,
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
      <section className="k-py-10 k-px-12 footer">
        <div className="k-d-flex k-flex-wrap k-justify-content-between k-gap-8 k-text-align-left">
          <div
            className="k-flex-basis-250 k-flex-grow-1 k-mb-4 k-mt-6"
            style={{ marginLeft: "50px" }}
          >
            <a href="/" className="k-d-block k-mb-4 k-text-align-center">
              <img src="/kendo-react/kendo-react-e-commerce-astro-app/vilora-logo.png" alt="Logo" />
            </a>
            <p>{t.cookiesText}</p>
            <p>{t.rightsReservedText}</p>
            <p>{t.subscribeText}</p>
            <Label editorId="email" className="k-sr-only">
              {t.emailPlaceholder}
            </Label>
            <TextBox
              placeholder={t.emailPlaceholder}
              className="k-w-full !k-mb-3"
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
            <div className="k-d-flex k-gap-2 k-align-items-center">
              <p
                className="k-d-flex k-align-items-center"
                style={{ gap: "10px" }}
              >
                <SvgIcon icon={facebookIcon} size="xlarge" /> Facebook
              </p>
              <p
                className="k-d-flex k-align-items-center"
                style={{ gap: "10px" }}
              >
                <SvgIcon icon={twitterIcon} size="xlarge" /> Twitter
              </p>
              <p
                className="k-d-flex k-align-items-center"
                style={{ gap: "10px" }}
              >
                <SvgIcon icon={linkedinIcon} size="xlarge" /> LinkedIn
              </p>
            </div>
          </div>

          <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-4 k-mt-6 k-text-align-center">
            <h4 className="k-color-primary k-font-bold">
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

          <div className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-4 k-mt-6 k-text-align-center">
            <h4 className="k-color-primary k-font-bold">
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

          <div
            className="k-flex-basis-200 k-flex-grow-1 k-d-flex k-flex-col k-gap-4 k-mt-6 k-text-align-center"
            style={{ marginRight: "150px" }}
          >
            <h4 className="k-color-primary k-font-bold">
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