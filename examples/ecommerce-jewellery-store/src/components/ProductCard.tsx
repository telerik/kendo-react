import { Breadcrumb } from "@progress/kendo-react-layout";
import { ProductCardProps } from "../data/types";
import { NumericTextBox, Rating } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

export const ProductCard = (props: ProductCardProps) => {
  return (
    <>
      <section
        className="product-card"
      >
        <div
          className="product-card__image"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="product-card__details">
          <Breadcrumb data={props.breadCrumbItem}></Breadcrumb>

          <div className="product-card__summary">
            <span className="product-card__title">{props.title}</span>
            <div className="product-card__subtitle">{props.subtitle}</div>
            <span className="product-card__rating">
              <Rating value={props.rating}></Rating>
              <span className="product-card__reviews">
                {props.reviews}
              </span>
            </span>

            <div className="product-card__price">
              {`$${props.price}`}
            </div>
          </div>

          <div className="product-card__description">{props.description}</div>
          <div className="product-card__actions">
            <NumericTextBox
              spinners={true}
              style={{ width: "var(--kendo-spacing-21)" }}
              value={1}
            ></NumericTextBox>
            <Button themeColor={"primary"} onClick={props.addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
