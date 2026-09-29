import { useNavigate } from "react-router-dom";
import { CategoryListProps } from "../data/types";
import { Button } from "@progress/kendo-react-buttons";
import { CardDescriptor } from "../data/types";
import { useLanguageContext } from "../helpers/LanguageContext";

export const CategoryList: React.FC<CategoryListProps> = ({ data, title, subtitle, colSpan = 4 }) => {
    const navigate = useNavigate();
    const { t } = useLanguageContext(); 

    const onNavigate = (card: CardDescriptor) => {
        if (card.collectionText === `Collection "AURELIA"`) {
            navigate("/category");
        }
    };

    return (
        <>
            <div className="category-list__title">
                {title}
            </div>
            <div
                className="category-list__subtitle"
                style={{
                    paddingBottom: "var(--kendo-spacing-4)",
                }}
            >
                {subtitle}
            </div>
            <div className="category-list__items">
                {data.map((card, index) => {
                    return (
                        <div key={index} className={`category-list__item category-list__item--span-${colSpan}`}>
                            <img
                                height={"319px"}
                                width={"100%"}
                                style={{
                                    minWidth: "360px",
                                    paddingBottom: "var(--kendo-spacing-4)",
                                }}
                                src={card.img}
                            />
                            <span className="category-list__label">
                                {card.collectionText}
                            </span>
                            <div className="category-list__action">
                                <Button themeColor={"primary"} size={"large"} onClick={() => onNavigate(card)}>
                                    {t.buyNowButtonText} 
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
