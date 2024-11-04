import * as React from "react";

import bracelets from "../assets/bracelets.png?url";
import necklace from "../assets/necklace_1.jfif?url";
import ring from "../assets/ring_1.jfif?url";
import jewel from "../assets/1111.jfif?url";

import { Layout } from "../components/Layout";
import { OrderedImgText } from "../components/OrderedImageCard";
import { CustomSection } from "../components/CustomizedSection";

import { Breadcrumb } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { listData } from "../data/listData";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { cartIcon, layout2By2Icon, gridLayoutIcon, filterIcon, sortAscIcon } from "@progress/kendo-svg-icons"
import { MultiSelect, DropDownList } from "@progress/kendo-react-dropdowns";


export const AllProductsListView = () => {
  const title = "Fine Selection";
  const subtitle = "Enjoy the real craftsmanship";
  const contentText =
    "Jewelry is a meaningful form of self-expression that enhances personal style and adds beauty to any occasion.";
  const order = "first";

  const chips: string[] = ["Status", "Category", "Material", "Gemstones", "Price"]

  const [msValue, setMSValue] = React.useState<string[]>(["Status", "Category", "Material", "Gemstones", "Price"])

  type CardDescriptor = {
    img: string;
    collectionText: string;
  };

  type DataModel = {
    text: string;
  }

  const cards: CardDescriptor[] = [
    {
      img: necklace,
      collectionText: "SERENE",
    },
    {
      img: ring,
      collectionText: "AURELIA",
    },
    {
      img: jewel,
      collectionText: "RAVINA",
    },
  ];

  const BreakcrumbData: DataModel[] = [{
    text: "Home"
  },
  {
    text: "Jewelry"
  }]

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
            img={bracelets}
            order={order}
          />
        </section>
      </Layout>
      <Layout>
        <CustomSection>
          <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-text-center">
            Our Collections
          </div>
          <div className="k-font-size-xl k-p-5 k-col-span-12 k-text-center" style={{
            paddingBottom: "1rem"
          }}>
            Enjoy an excellent selection of fine jewelry
          </div>
          <div className="k-d-grid k-grid-cols-12 k-col-span-12">
            {cards.map((card) => {
              return (
                <div className="k-col-span-4 k-text-center">
                  <img
                    width={"360px"}
                    height={"319px"}
                    style={{
                      minWidth: "360px",
                      paddingBottom: "1rem"
                    }}
                    src={card.img}
                  />
                  <span
                    className="k-pt-md"

                  >
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
      <Layout>
        <section className="k-d-flex k-justify-content-between k-align-items-center">
          <span className="k-d-flex k-align-items-center">
            <span className="k-d-flex k-align-items-center k-pr-2">
              <SvgIcon icon={filterIcon}></SvgIcon>
              Filter:
            </span>
            <MultiSelect fillMode={"flat"} data={chips} value={msValue}></MultiSelect>
          </span>

          <span className="k-d-flex k-align-items-center">
            <span className="k-d-flex k-align-items-center k-pr-2">
              <SvgIcon icon={sortAscIcon}></SvgIcon>
              Sort by:
            </span>
            <span><DropDownList value={"Recommended"}></DropDownList></span>
          </span>

        </section>
      </Layout>
      <Layout>
        <CustomSection>
          {
            listData.map((item) => {
              return (
                <div className="k-col-span-3 k-text-center k-border k-border-primary k-gap-1 k-pb-5">
                  {item.status != null ? (
                    <BadgeContainer>
                      <div className="k-d-flex k-justify-content-center k-align-items-center k-rounded-lg" style={{
                        backgroundImage: `url(${item.img})`,
                        width: "278px",
                        height: "236px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}>
                      </div>

                      <Badge themeColor="primary" className="k-text-uppercase" position={"inside"} align={{
                        horizontal: "start",
                        vertical: "top"
                      }}>{item.status}</Badge>
                    </BadgeContainer>
                  ) : (
                    <div className="k-d-flex k-justify-content-center k-align-items-center k-rounded-lg" style={{
                      backgroundImage: `url(${item.img})`,
                      width: "278px",
                      height: "236px"
                    }}>
                    </div>
                  )}
                  <div>
                    <div>{item.title}</div>
                    <div className="k-d-flex k-justify-content-center k-gap-xl k-align-items-center">
                      <span>
                        {item.oldPrice && <span className="k-text-line-through" style={{
                          paddingRight: "8px"
                        }}>{`$${item.oldPrice}`}</span>}
                        <span style={{
                          color: "red"
                        }}>{`$${item.newPrice}`}</span>
                      </span>
                      <span>
                        <Button fillMode={"outline"} svgIcon={cartIcon}>Buy</Button>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </CustomSection>
      </Layout>
    </>
  );
};
