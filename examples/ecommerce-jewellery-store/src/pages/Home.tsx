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
  const title = "Vilora Jewelry";
  const subtitle = "we offer exquisite jewelry, each showcasing timeless elegance";
  const buttonText = "See Collections";

  return (
    <>
      <BackgroundImage
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
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
              <CategoryList title='Our Bestsellers' subtitle='Enjoy an excellent selection of fine jewelry' data={data} />
            </section>
          </Layout>
          <Layout>
            <CustomSection>
              <OrderedImgText
                title='Timeless Classics'
                subtitle='Get our unique handmade collections'
                contentText='Jewelry enhances style and adds elegance, with each piece telling a unique story.'
                img={homeModel2}
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
                img={homeModel3}
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
                img={homeWatch1}
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
                img={homeServicesImage}
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