import { useParams } from "react-router-dom"
import { ProductCard } from "../components/ProductCard";
import { listData } from "../data/listData";
import { DataModel } from "../data/types";
import { Layout } from "../components/Layout";

export const ProductDetails = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const descriptionText = "Elegant wedding bands featuring lustrous pearls, beautifully set in sleek, timeless bands. These rings offer a unique blend of classic charm and modern sophistication, making them a perfect symbol of everlasting love. The delicate pearls add a touch of grace, creating a refined and distinctive look that’s perfect for a memorable occasion."

    const product = listData.find(item => item.id === productId);

    const BreakcrumbData: DataModel[] = [{
        text: "Home"
    },
    {
        text: "Jewelry"
    }, {
        text: product?.category
    }]
    return (
        <>
            <Layout>
                <ProductCard title={product?.title}
                    image={product?.img}
                    subtitle="In Platinum with Natural Diamond"
                    breadCrumbItem={BreakcrumbData}
                    rating={product?.rating}
                    reviews="208 reviews"
                    price={product?.newPrice} 
                    description={descriptionText}>
                </ProductCard>
            </Layout>
        </>
    );
}