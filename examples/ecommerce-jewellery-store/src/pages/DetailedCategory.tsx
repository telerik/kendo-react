import { Layout } from "../components/Layout";
import { OrderedImgText } from "../components/OrderedImageCard";
import aureliaImg from "../assets/aurelia-detail-page.png";
import { CustomSection } from "../components/CustomizedSection";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { Breadcrumb } from "@progress/kendo-react-layout";
import { layout2By2Icon, gridLayoutIcon } from "@progress/kendo-svg-icons"

import necklace from "../assets/necklace_1.jfif?url";
import jewel from "../assets/1111.jfif?url";
import tolos from "../assets/tolosCollection.jfif";

type CardDescriptor = {
  img: string;
  collectionText: string;
};

const cards: CardDescriptor[] = [
  {
    img: necklace,
    collectionText: "SERENE",
  },
  {
    img: jewel,
    collectionText: "RAVINA",
  },
  {
    img: tolos,
    collectionText: "TOLOS",
  },
];
type DataModel = {
  text: string;
};

const BreakcrumbData: DataModel[] = [
  {
    text: "Home",
  },
  {
    text: "Jewelry",
  },
];

export const DetailedCategory = () => {
  const title = "AURELIA Collection";
  const subtitle = "Unique handmade rings";
  const contentText =
    "Rings are versatile jewelry pieces that symbolize personal style, suitable for both special occasions and everyday wear.";
  const order = "first";

  return (
    <>
      <Layout>
        <section
          className="k-d-grid k-grid-cols-12 k-justify-content-center k-align-items-center k-col-span-12"
          style={{
            paddingTop: "60px",
          }}
        >
          <OrderedImgText
            title={title}
            subtitle={subtitle}
            contentText={contentText}
            img={aureliaImg}
            order={order}
          />
        </section>
      </Layout>
      <Layout>
        <CustomSection>
          <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-text-center">
            Our Collections
          </div>
          <div
            className="k-font-size-xl k-p-5 k-col-span-12 k-text-center"
            style={{
              paddingBottom: "1rem",
            }}
          >
            Enjoy an excellent selection of fine jewelry
          </div>
          <div className="k-d-grid k-grid-cols-12 k-col-span-12">
            {cards.map((card, index) => {
              return (
                <div key={index} className="k-col-span-4 k-text-center">
                  <img
                    width={"360px"}
                    height={"319px"}
                    style={{
                      minWidth: "360px",
                      paddingBottom: "1rem",
                    }}
                    src={card.img}
                  />
                  <span className="k-pt-md">
                    Collection "{card.collectionText}"
                  </span>
                  <div
                    style={{
                      paddingTop: "1rem",
                    }}
                  >
                    <Button themeColor={"primary"} size={"large"}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CustomSection>
      </Layout>
      <Layout>
        <section className="k-d-flex k-justify-content-between">
          <Breadcrumb data={BreakcrumbData}></Breadcrumb>
          <ButtonGroup>
            <Button fillMode={"flat"} svgIcon={gridLayoutIcon}></Button>
            <Button fillMode={"flat"} svgIcon={layout2By2Icon}></Button>
          </ButtonGroup>
        </section>
      </Layout>
    </>
  );
};
