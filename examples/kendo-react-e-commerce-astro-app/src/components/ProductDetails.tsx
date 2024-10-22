import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Layout } from '../components/Layout';
import { CategoryList } from '../components/CategoryList';
import { CustomSection } from '../components/CustomizedSection';
import { ListDataDescriptor, CardDescriptor } from '../data/types';

interface ProductDetailsProps {
  id: string; 
  product: ListDataDescriptor; 
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.href = '/shoppingcart';
  };

  const data: CardDescriptor[] = [
    {
      img: '/homemadePinkDiamondRing.jpg',
      collectionText: 'Handmade Pink Diamond Ring',
    },
    {
      img: '/diamondRingPinkRuby.jpg',
      collectionText: 'Diamond Ring with Pink Ruby',
    },
    {
      img: '/whiteSandDiamondRing.jpg',
      collectionText: 'White Sand Diamond Ring',
    },
  ];

  return (
    <>
      <Layout>
        <ProductCard
          title={product.title}
          image={product.img}
          subtitle="In Platinum with Natural Diamond"
          breadCrumbItem={[
            { text: 'Home' },
            { text: 'Jewelry' },
            { text: product.category },
          ]}
          rating={product.rating}
          reviews="208 reviews"
          price={product.newPrice}
          description="Elegant wedding bands featuring lustrous pearls."
          addToCart={handleAddToCart}
        />
      </Layout>
      <Layout>
        <CustomSection>
          <CategoryList
            title="You May Also Like"
            subtitle="Enjoy an excellent selection of fine jewelry"
            data={data}
          />
        </CustomSection>
      </Layout>
    </>
  );
};

export default ProductDetails;
