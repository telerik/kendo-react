import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "../components/Layout";
import { OrderedImgText } from "../components/OrderedImageCard";
import { CustomSection } from "../components/CustomizedSection";
import { FilterComponent } from "../components/FilterComponent";
import { CardsList } from "../components/CardsList";
import { CategoryList } from "../components/CategoryList";
import { Breadcrumb } from "@progress/kendo-react-layout";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { layout2By2Icon, gridLayoutIcon } from "@progress/kendo-svg-icons";
import { process, State } from "@progress/kendo-data-query";
import getTranslatedListData from "../data/listData";
import { useStore } from "@nanostores/react";
import { selectedLanguage } from "../helpers/languageStore";
import { loadMessages, LocalizationProvider } from "@progress/kendo-react-intl";

import enMessages from "../data/messages/en";
import frMessages from "../data/messages/fr";
import esMessages from "../data/messages/es";

loadMessages(enMessages, "en");
loadMessages(frMessages, "fr");
loadMessages(esMessages, "es");

const messages = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

export const AllProductsListView: React.FC = () => {
  const language = useStore(selectedLanguage);
  const t = messages[language];

  const [translatedData, setTranslatedData] = useState(() => getTranslatedListData());
  const [filteredData, setFilteredData] = useState(translatedData);
  const [currentLayout, setCurrentLayout] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const updatedData = getTranslatedListData();
    setTranslatedData(updatedData);
    setFilteredData(updatedData);
  }, [language]);

  const updateUI = useCallback(
    (newState: State) => {
      const updatedData = process(translatedData, newState).data;
      setFilteredData(updatedData);
    },
    [translatedData]
  );

  const cards = [
    {
      img: "/kendo-react/kendo-react-e-commerce-astro-app/necklace_1.jfif",
      collectionText: t.collectionSerene,
    },
    {
      img: "/kendo-react/kendo-react-e-commerce-astro-app/ring_1.jfif",
      collectionText: t.collectionAurelia,
    },
    {
      img: "/kendo-react/kendo-react-e-commerce-astro-app/1111.jfif",
      collectionText: t.collectionRavina,
    },
  ];

  const breadcrumbData = [
    { text: t.breadcrumbHome },
    { text: t.breadcrumbJewelry },
  ];

  return (
    <LocalizationProvider language={language}>
      <>
        <Layout>
          <section
            className="k-d-grid k-grid-cols-12 k-justify-content-center k-align-items-center k-col-span-12"
            style={{ paddingTop: "60px" }}
          >
            <OrderedImgText
              title={t.allProductsTitle}
              subtitle={t.allProductsSubtitle}
              contentText={t.allProductsContentText}
              img="/kendo-react/kendo-react-e-commerce-astro-app/bracelets.png"
              order="first"
              link={null}
            />
          </section>
        </Layout>

        <Layout>
          <CustomSection>
            <CategoryList
              title={t.ourCollectionsTitle}
              subtitle={t.ourCollectionsSubtitle}
              data={cards}
            />
          </CustomSection>
        </Layout>

        <Layout>
          <section className="k-d-flex k-justify-content-between k-align-items-center k-py-4">
            <Breadcrumb data={breadcrumbData} />
            <ButtonGroup>
              <Button
                fillMode="flat"
                svgIcon={gridLayoutIcon}
                selected={currentLayout === "grid"}
                onClick={() => setCurrentLayout("grid")}
              />
              <Button
                fillMode="flat"
                svgIcon={layout2By2Icon}
                selected={currentLayout === "list"}
                onClick={() => setCurrentLayout("list")}
              />
            </ButtonGroup>
          </section>
        </Layout>

        <Layout>
          <FilterComponent updateUI={updateUI} />
        </Layout>

        <Layout>
          <CardsList data={filteredData} layout={currentLayout} />
        </Layout>
      </>
    </LocalizationProvider>
  );
};

export default AllProductsListView;
