"use client";

import React from "react";

import {
  IntlProvider,
  load,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import frNumbers from "cldr-numbers-full/main/fr/numbers.json";
import frLocalCurrency from "cldr-numbers-full/main/fr/currencies.json";
import frCaGregorian from "cldr-dates-full/main/fr/ca-gregorian.json";
import frDateFields from "cldr-dates-full/main/fr/dateFields.json";

import usNumbers from "cldr-numbers-full/main/en/numbers.json";
import usLocalCurrency from "cldr-numbers-full/main/en/currencies.json";
import usCaGregorian from "cldr-dates-full/main/en/ca-gregorian.json";
import usDateFields from "cldr-dates-full/main/en/dateFields.json";

import esNumbers from "cldr-numbers-full/main/es/numbers.json";
import esLocalCurrency from "cldr-numbers-full/main/es/currencies.json";
import esCaGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import esDateFields from "cldr-dates-full/main/es/dateFields.json";

import { enMessages } from "./messages/en";
import { frMessages } from "./messages/fr";
import { esMessages } from "./messages/es";

load(
  likelySubtags,
  currencyData,
  weekData,
  esNumbers,
  esLocalCurrency,
  esCaGregorian,
  esDateFields,
  usNumbers,
  usLocalCurrency,
  usCaGregorian,
  usDateFields,
  frNumbers,
  frLocalCurrency,
  frCaGregorian,
  frDateFields
);

loadMessages(esMessages, "es");
loadMessages(enMessages, "en");
loadMessages(frMessages, "fr");

import { Header } from "./components/Header";

export function GlobalizationTest(props) {
  const [language, setLanguage] = React.useState("en");
  const onButtonClick = (event) => {
    setLanguage(event.value.localeId);
  };
  return (
    <LocalizationProvider language={language}>
      <IntlProvider locale={language}>
        <Header onButtonClick={onButtonClick} />
        {props.children}
      </IntlProvider>
    </LocalizationProvider>
  );
}
