import React from 'react';
import { Layout } from "@/components/Layout";
import { BackgroundImage } from '../components/BackgroundImage';
import present from "@/assets/present.png";
import { Button } from "@progress/kendo-react-buttons";

const ThankYou: React.FC = () => {
  return (
    <>
      <BackgroundImage img={present} title="" subtitle="" />
      <Layout>
        <div className="k-d-flex k-flex-col k-justify-content-center k-align-items-center k-h-100 k-text-center">
          <h1>Thank You For Your Order!</h1>
          <p>You have submitted your order</p>
          <Button className="k-mt-6">Back to Shopping</Button>
        </div>
      </Layout>
    </>
  );
};

export default ThankYou;
