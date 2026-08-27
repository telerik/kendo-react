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
import { useLanguageContext } from "../helpers/LanguageContext";
import { useCategoriesContext } from "../helpers/CategoriesContext";
import { useTranslatedListData } from "../data/listData";
import { CardDescriptor, DataModel, ProductFilters } from "../data/types";
import { Pager, PageChangeEvent } from "@progress/kendo-react-data-tools";
import { SvgIcon } from "@progress/kendo-react-common";
import { filterClearIcon, searchIcon } from "@progress/kendo-svg-icons";

const PAGE_SIZE = 8;
const VIEW_PREFERENCE_KEY = "vilora-products-view";

const readViewPreference = (): "grid" | "list" => {
  if (typeof window === "undefined") {
    return "grid";
  }

  try {
    const storedPreference = window.localStorage.getItem(VIEW_PREFERENCE_KEY);
    return storedPreference === "list" ? "list" : "grid";
  } catch (error) {
    console.warn("[Jewellery Store] Unable to read the saved products view.", error);
    return "grid";
  }
};

export const AllProductsListView = () => {
  const { language, t } = useLanguageContext();
  const { setSelectedCategory } = useCategoriesContext();
  const translatedListData = useTranslatedListData();
  const defaultStatus = t.statusesData[1];
  const previousLanguage = React.useRef(language);

  const [filters, setFilters] = React.useState<ProductFilters>({
    categories: [],
    material: "",
    status: defaultStatus,
  });
  const [currentLayout, setCurrentLayout] = React.useState<"grid" | "list">(readViewPreference);
  const [skip, setSkip] = React.useState(0);
  const [filterResetKey, setFilterResetKey] = React.useState(0);

  const updateLayout = (layout: "grid" | "list") => {
    setCurrentLayout(layout);
    setSkip(0);
    try {
      window.localStorage.setItem(VIEW_PREFERENCE_KEY, layout);
    } catch (error) {
      console.warn("[Jewellery Store] Unable to save the products view.", error);
      // A blocked or unavailable storage area should not prevent view switching.
    }
  };

  React.useEffect(() => {
    if (previousLanguage.current === language) {
      return;
    }

    previousLanguage.current = language;
    setFilters({
      categories: [],
      material: "",
      status: defaultStatus,
    });
    setSelectedCategory(null);
    setSkip(0);
    setFilterResetKey((key) => key + 1);
  }, [defaultStatus, language, setSelectedCategory]);

  const filteredData = React.useMemo(() => {
    const matchingProducts = translatedListData.filter((item) => {
      const matchesCategory =
        filters.categories.length === 0 || filters.categories.includes(item.category);
      const matchesMaterial = filters.material === "" || filters.material === item.material;
      return matchesCategory && matchesMaterial;
    });

    if (filters.status === defaultStatus) {
      return matchingProducts;
    }

    return [...matchingProducts].sort((first, second) => {
      const firstMatches = first.status === filters.status ? 1 : 0;
      const secondMatches = second.status === filters.status ? 1 : 0;
      return secondMatches - firstMatches;
    });
  }, [defaultStatus, filters, translatedListData]);

  const updateFilters = React.useCallback((nextFilters: ProductFilters) => {
    setFilters(nextFilters);
    setSkip(0);
  }, []);

  const pagedData = filteredData.slice(skip, skip + PAGE_SIZE);

  const clearFilters = () => {
    setFilters({
      categories: [],
      material: "",
      status: defaultStatus,
    });
    setSkip(0);
    setFilterResetKey((key) => key + 1);
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
          className="products__hero"
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
        <section className="products__toolbar">
          <Breadcrumb data={BreakcrumbData} />
          <ButtonGroup>
            <Button
              fillMode="flat"
              svgIcon={gridLayoutIcon}
              togglable={true}
              selected={currentLayout === "grid"}
              aria-label={t.gridViewLabel}
              title={t.gridViewLabel}
              onClick={() => updateLayout("grid")}
            />
            <Button
              fillMode="flat"
              svgIcon={layout2By2Icon}
              togglable={true}
              selected={currentLayout === "list"}
              aria-label={t.listViewLabel}
              title={t.listViewLabel}
              onClick={() => updateLayout("list")}
            />
          </ButtonGroup>
        </section>
      </Layout>

      <Layout>
        <FilterComponent key={language} onFiltersChange={updateFilters} resetKey={filterResetKey} />
      </Layout>

      <Layout>
        {filteredData.length > 0 ? (
          <>
            <CardsList data={pagedData} layout={currentLayout} />
            <Pager
              className="products__pager"
              aria-controls="product-results"
              skip={skip}
              take={PAGE_SIZE}
              total={filteredData.length}
              onPageChange={(event: PageChangeEvent) => setSkip(event.skip)}
            />
          </>
        ) : (
          <section className="products__empty-state" role="status" aria-live="polite">
            <SvgIcon icon={searchIcon} size="xxxlarge" />
            <h2>{t.noResultsTitle}</h2>
            <p>{t.noResultsMessage}</p>
            <Button themeColor="primary" svgIcon={filterClearIcon} onClick={clearFilters}>
              {t.clearFiltersButton}
            </Button>
          </section>
        )}
      </Layout>
    </>
  );
};