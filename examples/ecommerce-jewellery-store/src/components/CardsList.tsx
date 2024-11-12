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
    <section className="k-d-grid k-grid-cols-12 k-col-span-12 k-justify-content-center k-align-items-center k-gap-3">
      {props.data.map((item, index) => {
        return (
          <div
            key={index}
            className="k-col-span-3 k-text-center k-border k-border-primary k-gap-1 k-pb-5"
          >
            {item.status != null ? (
              <BadgeContainer>
                <div
                  className="k-d-flex k-justify-content-center k-align-items-center k-rounded-lg"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    width: "278px",
                    height: "236px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <Badge
                  themeColor="primary"
                  className="k-text-uppercase"
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
                className="k-d-flex k-justify-content-center k-align-items-center k-rounded-lg"
                style={{
                  backgroundImage: `url(${item.img})`,
                  width: "278px",
                  height: "236px",
                }}
              ></div>
            )}
            <div>
              <div className="k-pt-2">{item.title}</div>
              <div className="k-d-flex k-justify-content-center k-gap-xl k-align-items-center k-pt-2">
                <span>
                  {item.oldPrice && (
                    <span
                      className="k-text-line-through"
                      style={{
                        paddingRight: "8px",
                      }}
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
