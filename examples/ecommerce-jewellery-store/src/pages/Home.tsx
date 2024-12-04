import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import model from "../assets/model_1.png";
import { Layout } from '../components/Layout';
import { CategoryList } from '../components/CategoryList';
import { CardDescriptor } from "../data/types";
import silverBraceletOnyx from "../assets/listViewImages/silverBraceletOnyx.png";
import weddingBandsPearl from "../assets/listViewImages/weddingBandsPearl.png";
import roseGoldEarringsOpal from "../assets/listViewImages/roseGoldEarringsOpal.png";
import { CustomSection } from '../components/CustomizedSection';
import { OrderedImgText } from '../components/OrderedImageCard';
import homeModel2 from '../assets/homeModel2.png';
import homeModel3 from '../assets/homeModel3.png';
import homeWatch1 from '../assets/homeWatch1.png';
import diamondWeddingRing from "../assets/listViewImages/diamondWeddingRing.png";
import diamondWeddingBands from "../assets/listViewImages/diamondWeddingBands.png";
import brownWatch from '../assets/brownWatch.jpg';
import vitageWatch from '../assets/vitageWatch.jpg';
import casualSilverWatch from "../assets/listViewImages/casualSilverWatch.png";
import homeServicesImage from '../assets/homeServicesImage.png';
import { Testemonials } from '../components/Testemonials';
import { useAdminContext } from "../helpers/AdminContext";
import AdminView from "../components/AdminView";
import { useLanguageContext } from "../helpers/LanguageContext";

const data: CardDescriptor[] = [
  { img: silverBraceletOnyx, collectionText: "Silver Bracelet with Onyx" },
  { img: weddingBandsPearl, collectionText: "Wedding Bands with Pearls" },
  { img: roseGoldEarringsOpal, collectionText: "Rose Gold Earrings with Opal" }
];

const ringsData: CardDescriptor[] = [
  { img: diamondWeddingRing, collectionText: "Diamond Wedding Ring" },
  { img: diamondWeddingBands, collectionText: "Diamond Wedding Bands" }
];

const watchData: CardDescriptor[] = [
  { img: brownWatch, collectionText: "Brown Leather Watch" },
  { img: casualSilverWatch, collectionText: "Casual Silver Watch" },
  { img: vitageWatch, collectionText: "Vintage Silver Watch" }
];

const Home: React.FC = () => {
  const { isAdmin } = useAdminContext();
  const { t } = useLanguageContext(); // Access translations

  return (
    <>
      <BackgroundImage
        title={t.title}
        subtitle={t.subtitle}
        buttonText={t.buttonText}
        img={model}
      />

      {isAdmin ? (
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
                data={data}
              />
            </section>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title={t.timelessTitle}
                subtitle={t.timelessSubtitle}
                contentText={t.timelessContent}
                img={homeModel2}
                order="first"
                link={t.buyNowButtonText}
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title={t.fineJewelryTitle}
                subtitle={t.fineJewelrySubtitle}
                contentText={t.fineJewelryContent}
                img={homeModel3}
                order="last"
                link={t.buyNowButtonText}
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <CategoryList
                colSpan={6}
                title={t.ringsTitle}
                subtitle={t.ringsSubtitle}
                data={ringsData}
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title={t.alwaysOnTimeTitle}
                subtitle={t.alwaysOnTimeSubtitle}
                contentText={t.alwaysOnTimeContent}
                img={homeWatch1}
                order="first"
                link={t.buyNowButtonText}
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <CategoryList
                title={t.watchesTitle}
                subtitle={t.watchesSubtitle}
                data={watchData}
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title={t.servicesTitle}
                subtitle={t.servicesSubtitle}
                contentText={t.servicesContent}
                img={homeServicesImage}
                order="last"
                link={t.learnMoreButtonText}
              />
            </CustomSection>
          </Layout>
          <Layout>
            <Testemonials />
          </Layout>
        </>
      )}
    </>
  );
};

export default Home;
