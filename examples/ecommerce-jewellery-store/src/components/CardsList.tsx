import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Button } from "@progress/kendo-react-buttons";
import { cartIcon } from "@progress/kendo-svg-icons";
import { CardListProps } from "../data/types";
import { useNavigate } from "react-router-dom";

export const CardsList = (props: CardListProps) => {
  const navigate = useNavigate();

  const onButtonClick = (index: number) => {
    navigate(`/product/${index + 1}`);
  };

  return (
    <section className="cards-list">
      {props.data.map((item, index) => {
        return (
          <div
            key={index}
            className={`cards-list__item cards-list__item--${props.layout}`}
          >
            {item.status !== null ? (
              <BadgeContainer>
                <div
                  className="cards-list__image"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <Badge
                  themeColor="primary"
                  className="cards-list__badge"
                  position={"inside"}
                  align={{
                    horizontal: "start",
                    vertical: "top",
                  }}
                  style={{zIndex: 1}}
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
              ></div>
            )}
            <div>
              <div className="cards-list__title">{item.title}</div>
              <div className="cards-list__actions">
                <span>
                  {item.oldPrice && (
                    <span
                      className="cards-list__old-price"
                    >{`$${item.oldPrice}`}</span>
                  )}
                  <span
                    style={{
                      color: "red",
                    }}
                  >{`$${item.newPrice}`}</span>
                </span>
                <span>
                  <Button
                    fillMode={"outline"}
                    svgIcon={cartIcon}
                    onClick={() => onButtonClick(index)}
                  >
                    Buy
                  </Button>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
