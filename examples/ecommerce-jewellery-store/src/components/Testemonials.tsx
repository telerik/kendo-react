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
    <div className="testimonials">
      <div className="testimonials__heading">
        <h2>{t.testimonialsTitle}</h2>
        <p className="testimonials__subtitle">{t.testimonialsSubtitle}</p>
      </div>
      <div className="testimonials__items">
        {testemonialsData.map((item, index) => (
          <div
            key={index}
            className="testimonials__item"
          >
            <div className="testimonials__person">
              <div className="testimonials__avatar-container">
                <Avatar
                  themeColor="primary"
                  size="large"
                  className="testimonials__avatar"
                  type="image"
                >
                  <img src={item.image} className="testimonials__avatar-image" />
                </Avatar>
              </div>
              <p className="testimonials__name">{item.name}</p>
              <Rating
                value={item.rating}
                precision="half"
                className="testimonials__rating"
              />
            </div>
            <div className="testimonials__description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
