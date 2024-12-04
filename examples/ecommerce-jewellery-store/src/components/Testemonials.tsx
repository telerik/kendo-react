import { Avatar } from "@progress/kendo-react-layout";
import { Rating } from "@progress/kendo-react-inputs";
import testemonials1 from "../assets/testemonials1.jpg";
import testemonials2 from "../assets/testemonials2.jpg";
import testemonials3 from "../assets/testemonials3.jpg";
import { useLanguageContext } from "../helpers/LanguageContext";

export const Testemonials = () => {
  const { t } = useLanguageContext();

  const testemonialsData = [
    {
      image: testemonials1,
      name: t.testimonialsData[0].name,
      rating: t.testimonialsData[0].rating,
      description: t.testimonialsData[0].description,
    },
    {
      image: testemonials2,
      name: t.testimonialsData[1].name,
      rating: t.testimonialsData[1].rating,
      description: t.testimonialsData[1].description,
    },
    {
      image: testemonials3,
      name: t.testimonialsData[2].name,
      rating: t.testimonialsData[2].rating,
      description: t.testimonialsData[2].description,
    },
  ];

  return (
    <div className="k-d-flex k-flex-col k-align-items-center k-py-12 k-px-10 k-mx-auto">
      <div className="k-d-flex k-flex-col k-align-items-center k-gap-4 k-mb-10">
        <h2 className="k-h2">{t.testimonialsTitle}</h2>
        <p className="k-font-size-xl k-color-subtle">{t.testimonialsSubtitle}</p>
      </div>
      <div className="k-d-grid k-grid-cols-3 k-gap-5 k-mb-6">
        {testemonialsData.map((item, index) => (
          <div
            key={index}
            className="k-d-flex k-flex-col k-border-solid k-border k-bg-surface k-bg-app-surface k-rounded-lg k-border-border"
          >
            <div className="k-d-grid k-grid-cols-3 k-justify-items-center k-px-4 k-py-3 k-gap-y-3">
              <div className="k-col-start-1 k-col-end-4 k-d-grid k-grid-cols-3 k-justify-items-center k-w-full">
                <Avatar
                  themeColor="primary"
                  size="large"
                  className="k-col-start-2 k-col-end-3"
                  type="image"
                >
                  <img src={item.image} className="k-bg-cover" />
                </Avatar>
              </div>
              <p className="k-paragraph k-col-start-1 k-col-end-4">{item.name}</p>
              <Rating
                value={item.rating}
                precision="half"
                className="k-col-start-1 k-col-end-4"
              />
            </div>
            <div className="k-p-4">
              <p className="k-paragraph">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
