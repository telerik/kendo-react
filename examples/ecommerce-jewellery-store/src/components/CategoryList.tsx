
import { useNavigate } from "react-router-dom";
import { CategoryListProps } from "../data/types";
import { Button } from "@progress/kendo-react-buttons";
import { CardDescriptor } from "../data/types";

export const CategoryList = (props: CategoryListProps) => {
    const navigate = useNavigate();
    const onNavigate = (card: CardDescriptor) => {
        if (card.collectionText === "AURELIA") {
            navigate("/category")
        }
    }

    return (
        <>
            <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-text-center">
                Our Collections
            </div>
            <div
                className="k-font-size-xl k-p-5 k-col-span-12 k-text-center"
                style={{
                    paddingBottom: "1rem",
                }}
            >
                Enjoy an excellent selection of fine jewelry
            </div>
            <div className="k-d-grid k-grid-cols-12 k-col-span-12">
                {props.data.map((card, index) => {
                    return (
                        <div key={index} className="k-col-span-4 k-text-center">
                            <img
                                width={"360px"}
                                height={"319px"}
                                style={{
                                    minWidth: "360px",
                                    paddingBottom: "1rem",
                                }}
                                src={card.img}
                            />
                            <span className="k-pt-md">
                                Collection "{card.collectionText}"
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
