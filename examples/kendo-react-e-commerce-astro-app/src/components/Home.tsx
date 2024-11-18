import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import { Layout } from '../components/Layout';
import { CategoryList } from '../components/CategoryList';
import { CardDescriptor } from "../data/types";
import { CustomSection } from '../components/CustomizedSection';
import { OrderedImgText } from '../components/OrderedImageCard';
import { Testemonials } from '../components/Testemonials';
import { isAdmin } from "../helpers/adminStore"; 
import { useStore } from '@nanostores/react';
import AdminView from '../components/AdminView'; 

const data: CardDescriptor[] = [
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/silverBraceletOnyx.png', collectionText: "Silver Bracelet with Onyx" },
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/weddingBandsPearl.png', collectionText: "Wedding Bands with Pearls" },
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/roseGoldEarringsOpal.png', collectionText: "Rose Gold Earrings with Opal" }
];

const ringsData: CardDescriptor[] = [
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/diamondWeddingRing.png', collectionText: "Diamond Wedding Ring" },
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/diamondWeddingBands.png', collectionText: "Diamond Wedding Bands" }
];

const watchData: CardDescriptor[] = [
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/brownWatch.jpg', collectionText: "Brown Leather Watch" },
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/listViewImages/casualSilverWatch.png', collectionText: "Casual Silver Watch" },
  { img: '/kendo-react/kendo-react-e-commerce-astro-app/vintageWatch.jpg', collectionText: "Vintage Silver Watch" }
];

const Home: React.FC = () => {
  const title = "Vilora Jewelry";
  const subtitle = "We offer exquisite jewelry, each showcasing timeless elegance";
  const buttonText = "See Collections";
  const isAdminValue = useStore(isAdmin);

  return (
    <>
      <BackgroundImage
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
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
              <CategoryList title='Our Bestsellers' subtitle='Enjoy an excellent selection of fine jewelry' data={data} />
            </section>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title='Timeless Classics'
                subtitle='Get our unique handmade collections'
                contentText='Jewelry enhances style and adds elegance, with each piece telling a unique story.'
                img="/kendo-react/kendo-react-e-commerce-astro-app/homeModel2.png"
                order='first'
                link="Shop Now"
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title='Fine Jewelry'
                subtitle='Get our unique handmade collections'
                contentText="Jewelry elevates one's style and brings sophistication, with every piece narrating a distinct tale."
                img="/kendo-react/kendo-react-e-commerce-astro-app/homeModel3.png"
                order='last'
                link="Shop Now"
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <CategoryList colSpan={6} title='Our Rings' subtitle='Enjoy an excellent selection of fine rings' data={ringsData} />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title='Always On Time'
                subtitle='Get our unique watches'
                contentText='High-end gold watches for men are the epitome of luxury, combining precision with sophisticated craftsmanship.'
                img="/kendo-react/kendo-react-e-commerce-astro-app/homeWatch1.png"
                order='first'
                link="Shop Now"
              />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <CategoryList title='Our Watches' subtitle='Enjoy an excellent selection of watches' data={watchData} />
            </CustomSection>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title='Services'
                subtitle='Explore expert repairs to elevate your experience'
                contentText='Vilora provides services like custom designs, repairs, and appraisals to enhance the customer experience.'
                img="/kendo-react/kendo-react-e-commerce-astro-app/homeServicesImage.png"
                order='last'
                link="Learn More"
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
