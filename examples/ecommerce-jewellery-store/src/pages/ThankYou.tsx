import React from 'react';
import { Layout } from "../components/Layout";
import { BackgroundImage } from '../components/BackgroundImage';
import present from "@/assets/present.png";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '../helpers/LanguageContext';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguageContext();

  const onBacktoShoppingClick = () => {
    navigate("/products");
  };

  return (
    <>
      <BackgroundImage
        img={present}
        title={t?.thankYou?.title}
        subtitle={t?.thankYou?.subtitle}
      />
      <Layout>
        <div className="thank-you">
          <h1>{t?.thankYou?.thankYouMessage}</h1>
          <p>{t?.thankYou?.orderSubmittedMessage}</p>
          <Button
            className="thank-you__action"
            onClick={onBacktoShoppingClick}
            themeColor={"primary"}
            size={"large"}
          >
            {t?.thankYou?.backToShopping}
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default ThankYou;
