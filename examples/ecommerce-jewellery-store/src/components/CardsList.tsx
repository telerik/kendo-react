import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { cartIcon, checkCircleIcon, warningTriangleIcon, xCircleIcon } from "@progress/kendo-svg-icons";
import { CardListProps } from "../data/types";
import { useNavigate } from "react-router-dom";
import { Rating } from "@progress/kendo-react-inputs";
import { useLanguageContext } from "../helpers/LanguageContext";

export const CardsList = (props: CardListProps) => {
  const navigate = useNavigate();
  const { t } = useLanguageContext();

  const onButtonClick = (id: number | undefined, index: number) => {
    navigate(`/product/${id ?? index + 1}`);
  };

  return (
    <section id="product-results" className={`cards-list cards-list--${props.layout}`} aria-label={t.allProductsTitle}>
      {props.data.map((item, index) => {
        const stockStatus = item.stockStatus ?? "in-stock";
        const stockIcon = stockStatus === "in-stock"
          ? checkCircleIcon
          : stockStatus === "low-stock"
            ? warningTriangleIcon
            : xCircleIcon;
        const stockLabel = stockStatus === "in-stock"
          ? t.inStockLabel
          : stockStatus === "low-stock"
            ? `${t.lowStockLabel} ${item.stockCount ?? 0} ${t.leftLabel}`
            : t.outOfStockLabel;
        const rating = item.rating ?? 0;
        const reviewCount = item.reviewCount ?? 0;

        return (
          <article
            key={item.id ?? index}
            className={`cards-list__item cards-list__item--${props.layout}`}
          >
            {item.status !== null ? (
              <BadgeContainer className="cards-list__media">
                <div
                  className="cards-list__image"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  role="img"
                  aria-label={item.title}
                ></div>

                <Badge
                  themeColor="primary"
                  className="cards-list__badge"
                  position={"inside"}
                  align={{
                    horizontal: "start",
                    vertical: "top",
                  }}
                >
                  {item.status}
                </Badge>
              </BadgeContainer>
            ) : (
              <div
                className="cards-list__image"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
                role="img"
                aria-label={item.title}
              ></div>
            )}
            <div className="cards-list__content">
            <h3 className="cards-list__title">{item.title}</h3>
            <div className="cards-list__meta">
              <span className="cards-list__category">{item.category}</span>
              <span className="cards-list__material">{item.material}</span>
            </div>
            <div className="cards-list__rating" aria-label={`${t.ratingLabel}: ${rating.toFixed(1)} ${t.outOfFiveLabel}, ${reviewCount} ${t.reviewsLabel}`}>
              <Rating value={rating} max={5} precision="half" readonly={true} />
              <span>{rating.toFixed(1)} {t.outOfFiveLabel}</span>
              <span>{reviewCount} {t.reviewsLabel}</span>
            </div>
            <div className={`cards-list__stock cards-list__stock--${stockStatus}`}>
              <SvgIcon icon={stockIcon} />
              <span>{stockLabel}</span>
            </div>
            <div className="cards-list__actions">
              <span>
                {item.oldPrice && (
                    <span
                      className="cards-list__old-price"
                    >{`$${item.oldPrice}`}</span>
                  )}
                  <span className="cards-list__price">{`$${item.newPrice}`}</span>
                </span>
                <span>
                  <Button
                    fillMode={"outline"}
                    svgIcon={cartIcon}
                    onClick={() => onButtonClick(item.id, index)}
                  >
                    {t.buyButtonText}
                  </Button>
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
