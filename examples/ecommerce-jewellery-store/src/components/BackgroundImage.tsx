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
      className="k-h-full k-w-full k-bg-cover"
      style={{
        backgroundImage: `url(${img})`,
        backgroundColor: "",
      }}
    >
      <div className="k-w-full k-h-full k-d-flex k-flex-col k-justify-content-center k-align-items-center" style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }}>
        <div className="k-text-center k-text-white">
          <h1
            className="k-h1 k-font-bold"
            style={{
              marginTop: "190px",
            }}
          >
            {title}
          </h1>
          <p className="k-font-size-lg k-mb-4 k-font-bold">{subtitle}</p>
          <Button themeColor="primary" className="k-mb-4">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
