import * as React from "react";
import bracelets from "@/assets/bracelets.png?url";
import necklace from "@/assets/necklace_1.jfif?url";
import ring from "@/assets/ring_1.jfif?url";
import jewel from "@/assets/1111.jfif?url";
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
import { useLanguageContext } from "../helpers/LanguageContext";
import { useTranslatedListData } from "../data/listData";
import { CardDescriptor, DataModel } from "../data/types";

export const AllProductsListView = () => {
  const { t } = useLanguageContext();
  const translatedListData = useTranslatedListData();

  const [data, setData] = React.useState(translatedListData);
  const [currentLayout, setCurrentLayout] = React.useState<"grid" | "list">("grid");

  const updateUI = (newState: State) => {
    const newData = process(translatedListData, newState);
    setData(newData.data);
  };

  const BreakcrumbData: DataModel[] = [
    { text: t.breadcrumbHome },
    { text: t.breadcrumbJewelry },
  ];

  const cards: CardDescriptor[] = [
    {
      img: necklace,
      collectionText: t.collectionSerene,
    },
    {
      img: ring,
      collectionText: t.collectionAurelia,
    },
    {
      img: jewel,
      collectionText: t.collectionRavina,
    },
  ];

  

  return (
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
            img={bracelets}
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
          <Breadcrumb data={BreakcrumbData} />
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
        <CardsList data={data} layout={currentLayout} />
      </Layout>
    </>
  );
};
