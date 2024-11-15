import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { listData } from "../data/listData";
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

export const ProductDetails = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id, 10) : null;

  const descriptionText =
    "Elegant wedding bands featuring lustrous pearls, beautifully set in sleek, timeless bands. These rings offer a unique blend of classic charm and modern sophistication, making them a perfect symbol of everlasting love. The delicate pearls add a touch of grace, creating a refined and distinctive look that’s perfect for a memorable occasion.";
  const { addItemToCart } = useCart();
  const productToAdd = listData.find((item) => item.id === productId);
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
      collectionText: "Diamond Ring with Pink Ruby",
    },
    {
      img: whiteSandDiamondRing,
      collectionText: "White Sand Diamond Ring",
    },
    {
      img: homemadePinkDiamondRing,
      collectionText: "Handmade Pink Diamond Ring",
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
      text: productToAdd?.category,
    },
  ];

  return (
    <>
      <Layout>
        <ProductCard
          title={productToAdd?.title}
          image={productToAdd?.img}
          subtitle="In Platinum with Natural Diamond"
          breadCrumbItem={BreakcrumbData}
          rating={productToAdd?.rating}
          reviews="208 reviews"
          price={productToAdd?.newPrice}
          description={descriptionText}
          addToCart={addToCart}
        ></ProductCard>
      </Layout>
      <Layout>
        <CustomSection>
          <CategoryList
            title="You May Also Like"
            subtitle="Enjoy an excellent selection of fine jewelry"
            data={data}
          ></CategoryList>
        </CustomSection>
      </Layout>
    </>
  );
};
