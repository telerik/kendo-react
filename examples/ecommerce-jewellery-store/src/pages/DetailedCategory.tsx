import * as React from 'react';
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
import { CategoryList } from "../components/CategoryList";
import { FilterComponent } from "../components/FilterComponent";
import { CardsList } from "../components/CardsList";
import { listData } from '../data/listData';
import { process, State } from '@progress/kendo-data-query';
import { CardDescriptor } from '../data/types';
import { DataModel } from '../data/types';

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

const BreakcrumbData: DataModel[] = [
  {
    text: "Home",
  },
  {
    text: "Jewelry",
  },
  {
    text: "Rings"
  }
];


export const DetailedCategory = () => {
  const [data, setData] = React.useState(listData);
  const title = "AURELIA Collection";
  const subtitle = "Unique handmade rings";
  const contentText =
    "Rings are versatile jewelry pieces that symbolize personal style, suitable for both special occasions and everyday wear.";
  const order = "first";

  const updateUI = (newState: State) => {
    const newData = process(listData, newState)
    setData(newData.data)
  };

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
