import { Avatar } from '@progress/kendo-react-layout';
import { Rating } from '@progress/kendo-react-inputs';
import { useStore } from '@nanostores/react';
import { selectedLanguage } from '../helpers/languageStore';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import enMessages from '../data/messages/en';
import frMessages from '../data/messages/fr';
import esMessages from '../data/messages/es';

loadMessages(enMessages, 'en');
loadMessages(frMessages, 'fr');
loadMessages(esMessages, 'es');

const messages = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

const testemonialsData = [
  {
    image: '/kendo-react/kendo-react-e-commerce-astro-app/testemonials1.jpg',
    name: 'Erica Moore',
    rating: 5,
    description:
      'Vilora exceeded all my expectations! The craftsmanship of my diamond necklace is absolutely stunning, and the attention to detail is unparalleled. From the moment I placed my order to the day it arrived, the entire experience was flawless.',
  },
  {
    image: '/kendo-react/kendo-react-e-commerce-astro-app/testemonials2.jpg',
    name: 'Kelvin Hettinger',
    rating: 4.5,
    description:
      'I couldn’t be happier with my custom engagement ring from Vilora. The team helped me design the perfect piece, and the final result was even more beautiful than I imagined. Their service, quality, and dedication to excellence make Vilora my go-to for all fine jewelry.',
  },
  {
    image: '/kendo-react/kendo-react-e-commerce-astro-app/testemonials3.jpg',
    name: 'Karen Brooks',
    rating: 5,
    description:
      'Vilora’s collection is nothing short of breathtaking. I recently purchased a white sapphire ring, and it’s become my favorite piece. The elegance and brilliance of the jewelry reflect their impeccable taste and high standards. Highly recommend!',
  },
];

export const Testemonials = () => {
  const language = useStore(selectedLanguage);
  const t = messages[language] || messages['en'];

  return (
    <LocalizationProvider language={language}>
      <div className="testimonials">
        <div className="testimonials__heading">
          <h2 className="k-h2">{t.testimonialsTitle || 'What Our Customers Say'}</h2>
          <p className="testimonials__subtitle">
            {t.testimonialsSubtitle || 'Discover stories from our satisfied customers.'}
          </p>
        </div>
        <div className="testimonials__grid">
          {testemonialsData.map((item, index) => (
            <div
              key={index}
              className="testimonials__card"
            >
              <div className="testimonials__card-header">
                <div className="testimonials__avatar">
                  <Avatar
                    themeColor="primary"
                    size="large"
                    type="image"
                  >
                    <img src={item.image} alt={item.name} />
                  </Avatar>
                </div>
                <p className="testimonials__name">
                  {item.name}
                </p>
                <Rating
                  value={item.rating}
                  precision="half"
                  className="testimonials__rating"
                />
              </div>
              <div className="testimonials__body">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Testemonials;
