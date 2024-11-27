import * as React from "react";
import { Layout } from "../components/Layout";
import { OrderedImgText } from "../components/OrderedImageCard";
import aureliaImg from "../assets/aurelia-detail-page.png";
import { CustomSection } from "../components/CustomizedSection";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { Breadcrumb } from "@progress/kendo-react-layout";
import { layout2By2Icon, gridLayoutIcon } from "@progress/kendo-svg-icons";

import necklace from "../assets/necklace_1.jfif?url";
import jewel from "../assets/1111.jfif?url";
import tolos from "../assets/tolosCollection.jfif";
import { CategoryList } from "../components/CategoryList";
import { FilterComponent } from "../components/FilterComponent";
import { CardsList } from "../components/CardsList";
import { useTranslatedListData } from "../data/listData";
import { process, State } from "@progress/kendo-data-query";
import { CardDescriptor } from "../data/types";
import { DataModel } from "../data/types";
import { useLanguageContext } from "../helpers/LanguageContext";

export const DetailedCategory = () => {
  const { t } = useLanguageContext();
  const translatedListData = useTranslatedListData();
  const order = 'first'
  const [data, setData] = React.useState(translatedListData);

  const cards: CardDescriptor[] = [
    {
      img: necklace,
      collectionText: t.collectionSerene,
    },
    {
      img: jewel,
      collectionText: t.collectionRavina,
    },
    {
      img: tolos,
      collectionText: "TOLOS",
    },
  ];

  const BreakcrumbData: DataModel[] = [
    {
      text: t.breadcrumbHome,
    },
    {
      text: t.breadcrumbJewelry,
    },
    {
      text: t.categories.Rings,
    },
  ];

  const updateUI = (newState: State) => {
    const newData = process(translatedListData, newState);
    setData(newData.data);
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
            title={t.aureliaTitle || "AURELIA Collection"}
            subtitle={t.aureliaSubtitle || "Unique handmade rings"}
            contentText={
              t.aureliaContent ||
              "Rings are versatile jewelry pieces that symbolize personal style, suitable for both special occasions and everyday wear."
            }
            img={aureliaImg}
            order={order}
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
        <section className="k-d-flex k-justify-content-between">
          <Breadcrumb data={BreakcrumbData} />
          <ButtonGroup>
            <Button fillMode={"flat"} svgIcon={gridLayoutIcon}></Button>
            <Button fillMode={"flat"} svgIcon={layout2By2Icon}></Button>
          </ButtonGroup>
        </section>
      </Layout>
      <Layout>
        <FilterComponent updateUI={updateUI} />
      </Layout>
      <Layout>
        <CardsList data={data} layout="grid"/>
      </Layout>
    </>
  );
};
