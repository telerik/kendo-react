import { Button } from "@progress/kendo-react-buttons";
import { BackgroundImageProps } from "../data/types";

export const BackgroundImage = (props: BackgroundImageProps) => {
  const { img, title, subtitle, buttonText } = props;

  const onButtonClick = () => {
    window.location.href="/kendo-react/kendo-react-e-commerce-astro-app/products"
  }

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
        height: "740px"
      }}
    >
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">
            {title}
          </h1>
          <p className="hero__subtitle">{subtitle}</p>
          {buttonText && (
            <Button themeColor="primary" className="hero__action" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
