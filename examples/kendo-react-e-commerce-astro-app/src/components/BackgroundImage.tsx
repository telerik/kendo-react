import { Button } from "@progress/kendo-react-buttons";
import { BackgroundImageProps } from "../data/types";

export const BackgroundImage = (props: BackgroundImageProps) => {
  const { img, title, subtitle, buttonText } = props;

  const onButtonClick = () => {
    window.location.href="/products"
  }

  return (
    <section
      className="k-d-grid k-grid-cols-12 k-justify-content-center k-align-items-center k-col-span-12 k-bg-cover"
      style={{
        backgroundImage: `url(${img})`,
        height: "740px"
      }}
    >
      <div className="k-col-span-12 k-d-flex k-justify-content-center k-align-items-center" style={{
        backgroundColor: "rgba(0, 0, 0, 0.14)",
        height: "100%"
      }}>
        <div className="k-text-center k-text-white k-pt-25">
          <h1 className="k-h1 k-font-bold">
            {title}
          </h1>
          <p className="k-font-size-lg k-mb-4 k-font-bold k-text-uppercase">{subtitle}</p>
          {buttonText && (
            <Button themeColor="primary" className="k-mb-4" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
