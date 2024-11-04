import { Button } from "@progress/kendo-react-buttons";

type BackgroundImageProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  img: string;
};

export const BackgroundImage = (props: BackgroundImageProps) => {
  const { img, title, subtitle, buttonText } = props;

  return (
    <section
      className="k-d-grid k-grid-cols-12 k-justify-content-center k-align-items-center k-col-span-12 k-bg-cover"
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <div className="k-col-span-12" style={{
        backgroundColor: "rgba(0, 0, 0, 0.14)",
        height: "100%"
      }}>
        <div className="k-text-center k-text-white">
          <h1
            className="k-h1 k-font-bold"
            style={{
              marginTop: "400px",
            }}
          >
            {title}
          </h1>
          <p className="k-font-size-lg k-mb-4 k-font-bold k-text-uppercase">{subtitle}</p>
          <span className="k-gap-9"></span>
          <Button themeColor="primary" className="k-mb-4">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
