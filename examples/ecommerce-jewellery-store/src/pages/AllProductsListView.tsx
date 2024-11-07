import * as React from "react";

import bracelets from "../assets/bracelets.png?url";
import necklace from "../assets/necklace_1.jfif?url";
import ring from "../assets/ring_1.jfif?url";
import jewel from "../assets/1111.jfif?url";

import { Layout } from "../components/Layout";
import { OrderedImgText } from "../components/OrderedImageCard";
import { CustomSection } from "../components/CustomizedSection";
import { listData } from "../data/listData";
import { FilterComponent } from "../components/FilterComponent";
import { CardsList } from "../components/CardsList";
import { CategoryList } from "../components/CategoryList";
import { CardDescriptor } from "../data/types";
import { DataModel } from "../data/types";

import { Breadcrumb } from "@progress/kendo-react-layout";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { layout2By2Icon, gridLayoutIcon } from "@progress/kendo-svg-icons";
import { process, State } from "@progress/kendo-data-query";

export const AllProductsListView = () => {
  const title = "Fine Selection";
  const subtitle = "Enjoy the real craftsmanship";
  const contentText =
    "Jewelry is a meaningful form of self-expression that enhances personal style and adds beauty to any occasion.";
  const order = "first";

  const [data, setData] = React.useState(listData);
  
  const updateUI = (newState: State) => {
    const newData = process(listData, newState)
    setData(newData.data)
  };

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
          <CategoryList data={cards}></CategoryList>
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
        <FilterComponent updateUI={updateUI}></FilterComponent>
      </Layout>
      <Layout>
        <CardsList data={data}></CardsList>
      </Layout>
    </>
  );
};
