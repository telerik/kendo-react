import { Button } from "@progress/kendo-react-buttons";
import { BackgroundImageProps } from "../data/types";
import { useNavigate } from "react-router-dom";

export const BackgroundImage = (props: BackgroundImageProps) => {
  const { img, title, subtitle, buttonText } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/products')
  }

  return (
    <section
      className="background-image"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="background-image__overlay" style={{
        backgroundColor: "rgba(0, 0, 0, 0.14)",
        height: "100%"
      }}>
        <div className="background-image__content">
          <h1 className="background-image__title">
            {title}
          </h1>
          <p className="background-image__subtitle">{subtitle}</p>
          {buttonText && (
            <Button themeColor="primary" className="background-image__action" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
