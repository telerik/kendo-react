import React from "react";
import { BackgroundImage } from "../components/BackgroundImage";
import { Layout } from "../components/Layout";
import { CategoryList } from "../components/CategoryList";
import { CardDescriptor } from "../data/types";
import { CustomSection } from "../components/CustomizedSection";
import { OrderedImgText } from "../components/OrderedImageCard";
import { Testemonials } from "../components/Testemonials";
import { isAdmin } from "../helpers/adminStore";
import { useStore } from "@nanostores/react";
import {
  loadMessages,
  LocalizationProvider,
} from "@progress/kendo-react-intl";
import AdminView from "../components/AdminView";

import { selectedLanguage } from "../helpers/languageStore";
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

const data: CardDescriptor[] = [
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/silverBraceletOnyx.png", collectionTextKey: "silverBraceletWithOnyx" },
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/weddingBandsPearl.png", collectionTextKey: "weddingBandsWithPearls" },
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/roseGoldEarringsOpal.png", collectionTextKey: "roseGoldEarringsWithOpal" },
];

const ringsData: CardDescriptor[] = [
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/diamondWeddingRing.png", collectionTextKey: "diamondWeddingRing" },
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/diamondWeddingBands.png", collectionTextKey: "diamondWeddingBands" },
];

const watchData: CardDescriptor[] = [
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/brownWatch.jpg", collectionTextKey: "brownLeatherWatch" },
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/casualSilverWatch.png", collectionTextKey: "casualSilverWatch" },
  { img: "/kendo-react/kendo-react-e-commerce-astro-app/vintageWatch.jpg", collectionTextKey: "vintageSilverWatch" },
];

const Home: React.FC = () => {
  const isAdminValue = useStore(isAdmin);
  const selectedLang = useStore(selectedLanguage);
  const t = messages[selectedLang];

  const translateData = (items: CardDescriptor[]) =>
    items.map((item) => ({
      img: item.img,
      collectionText: t[item.collectionTextKey],
    }));

  const translatedData = translateData(data);
  const translatedRingsData = translateData(ringsData);
  const translatedWatchData = translateData(watchData);

  return (
    <LocalizationProvider language={selectedLang}>
      <div className="k-m-auto" style={{ maxWidth: 1280 }}>
        <BackgroundImage
          title={t.title}
          subtitle={t.subtitle}
          buttonText={t.buttonText}
          img="/kendo-react/kendo-react-e-commerce-astro-app/model_1.png"
        />

        {isAdminValue ? (
          <Layout>
            <div className="k-mt-8">
              <AdminView />
            </div>
          </Layout>
        ) : (
          <>
            <Layout>
              <section
                className="k-d-grid k-grid-cols-12 k-justify-content-center k-align-items-center k-col-span-12"
                style={{ paddingTop: "60px" }}
              >
                <CategoryList
                  title={t.bestsellersTitle}
                  subtitle={t.bestsellersSubtitle}
                  data={translatedData}
                />
              </section>
            </Layout>
            <Layout>
              <CustomSection>
                <OrderedImgText
                  title={t.timelessTitle}
                  subtitle={t.timelessSubtitle}
                  contentText={t.timelessContent}
                  img="/kendo-react/kendo-react-e-commerce-astro-app/homeModel2.png"
                  order="first"
                  link={t.buttonText}
                />
              </CustomSection>
            </Layout>
            <Layout>
              <CustomSection>
                <OrderedImgText
                  title={t.fineJewelryTitle}
                  subtitle={t.fineJewelrySubtitle}
                  contentText={t.fineJewelryContent}
                  img="/kendo-react/kendo-react-e-commerce-astro-app/homeModel3.png"
                  order="last"
                  link={t.buttonText}
                />
              </CustomSection>
            </Layout>
            <Layout>
              <CustomSection>
                <CategoryList
                  colSpan={6}
                  title={t.ringsTitle}
                  subtitle={t.ringsSubtitle}
                  data={translatedRingsData}
                />
              </CustomSection>
            </Layout>
            <Layout>
              <CustomSection>
                <OrderedImgText
                  title={t.watchesTitle}
                  subtitle={t.watchesSubtitle}
                  contentText={t.watchesContent}
                  img="/kendo-react/kendo-react-e-commerce-astro-app/homeWatch1.png"
                  order="first"
                  link={t.buttonText}
                />
              </CustomSection>
            </Layout>
            <Layout>
              <CustomSection>
                <CategoryList
                  title={t.watchesCategoryTitle}
                  subtitle={t.watchesCategorySubtitle}
                  data={translatedWatchData}
                />
              </CustomSection>
            </Layout>
            <Layout>
              <CustomSection>
                <OrderedImgText
                  title={t.servicesTitle}
                  subtitle={t.servicesSubtitle}
                  contentText={t.servicesContent}
                  img="/kendo-react/kendo-react-e-commerce-astro-app/homeServicesImage.png"
                  order="last"
                  link={t.learnMoreText}
                />
              </CustomSection>
            </Layout>
            <Layout>
              <Testemonials />
            </Layout>
          </>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default Home;
