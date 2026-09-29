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
        className={`ordered-card__image ordered-card__image--${order}`}
      />
      <span className="ordered-card__content">
        <div className="ordered-card__title">{title}</div>
        <div className="ordered-card__subtitle">{subtitle}</div>
        <span className="ordered-card__text">{contentText}</span>

        {link && (
          <div className="ordered-card__action">
            <Button fillMode={"link"}>{link}</Button>
          </div>
        )}
      </span>
    </>
  );
};
