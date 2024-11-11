
import { useNavigate } from "react-router-dom";
import { CategoryListProps } from "../data/types";
import { Button } from "@progress/kendo-react-buttons";
import { CardDescriptor } from "../data/types";

export const CategoryList: React.FC<CategoryListProps> = ({ data, title, subtitle, colSpan = 4 }) => {
    const navigate = useNavigate();

    const onNavigate = (card: CardDescriptor) => {
        if (card.collectionText === "AURELIA") {
            navigate("/category")
        }
    }

    return (
        <>
            <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-text-center">
                {title}
            </div>
            <div
                className="k-font-size-xl k-p-5 k-col-span-12 k-text-center"
                style={{
                    paddingBottom: "1rem",
                }}
            >
                {subtitle}
            </div>
            <div className="k-d-grid k-grid-cols-12 k-col-span-12 k-gap-5">
                {data.map((card, index) => {
                    return (
                        <div key={index} className={`k-col-span-${colSpan} k-text-center`}>
                            <img
                                height={"319px"}
                                width={"100%"}
                                style={{
                                    minWidth: "360px",
                                    paddingBottom: "1rem",
                                }}
                                src={card.img}
                            />
                            <span className="k-pt-md">
                                {card.collectionText}
                            </span>
                            <div
                                style={{
                                    paddingTop: "1rem",
                                }}
                            >
                                <Button themeColor={"primary"} size={"large"} onClick={() => onNavigate(card)}>
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
