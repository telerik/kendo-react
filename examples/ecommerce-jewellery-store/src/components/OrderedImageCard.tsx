import { Button } from "@progress/kendo-react-buttons";
import { OrderedImgTextProps } from "../data/types";

export const OrderedImgText = (props: OrderedImgTextProps) => {
  const { title, subtitle, contentText, img, order, link } = props;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          height: "508px",
          width: "768px",
        }}
        className={`ordered-image-card__image ordered-image-card__image--${order}`}
      />
      <span className="ordered-image-card__content">
        <div className="ordered-image-card__title">{title}</div>
        <div className="ordered-image-card__subtitle">{subtitle}</div>
        <span className="ordered-image-card__body">{contentText}</span>

        {link && (
          <div className="ordered-image-card__link">
            <Button fillMode={"link"}>{link}</Button>
          </div>
        )}
      </span>
    </>
  );
};
