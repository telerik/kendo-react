import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useTranslatedListData } from "../data/listData";
import { DataModel } from "../data/types";
import { Layout } from "../components/Layout";
import { CategoryList } from "../components/CategoryList";
import { CardDescriptor } from "../data/types";
import homemadePinkDiamondRing from "../assets/homemadePinkDiamondRing.jpg";
import diamondRingPinkRuby from "../assets/diamondRingPinkRuby.jpg";
import whiteSandDiamondRing from "../assets/whiteSandDiamondRing.jpg";
import { CustomSection } from "../components/CustomizedSection";
import { useCart } from "../helpers/CartContext";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../helpers/LanguageContext";

export const ProductDetails = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id, 10) : null;

  const { t } = useLanguageContext();
  const translatedListData = useTranslatedListData();

  const descriptionText = t.productDescription;
  const { addItemToCart } = useCart();
  const productToAdd = translatedListData.find((item) => item.id === productId);
  const navigate = useNavigate();

  const addToCart = () => {
    if (productToAdd) {
      addItemToCart(productToAdd);
    }
    navigate("/shoppingcart");
  };

  const data: CardDescriptor[] = [
    {
      img: diamondRingPinkRuby,
      collectionText: t.diamondRingWithPinkRuby,
    },
    {
      img: whiteSandDiamondRing,
      collectionText: t.whiteSandDiamondRing,
    },
    {
      img: homemadePinkDiamondRing,
      collectionText: t.handmadePinkDiamondRing,
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
      text: productToAdd?.category
        ? t.categories[productToAdd.category as keyof typeof t.categories]
        : "",
    },
  ];

  return (
    <>
      <Layout>
        <ProductCard
          title={productToAdd?.title}
          image={productToAdd?.img}
          subtitle={t.productSubtitle}
          breadCrumbItem={BreakcrumbData}
          rating={productToAdd?.rating}
          reviews={t.reviewsText.replace("{0}", "208")}
          price={productToAdd?.newPrice}
          description={descriptionText}
          addToCart={addToCart}
        />
      </Layout>
      <Layout>
        <CustomSection>
          <CategoryList
            title={t.youMayAlsoLikeTitle}
            subtitle={t.youMayAlsoLikeSubtitle}
            data={data}
          />
        </CustomSection>
      </Layout>
    </>
  );
};
