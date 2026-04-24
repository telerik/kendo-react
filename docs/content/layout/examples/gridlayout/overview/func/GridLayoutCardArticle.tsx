
import * as React from 'react';
import { Card, CardTitle, CardSubtitle, CardImage } from '@progress/kendo-react-layout';

const GridLayoutCardArticle = ({article}) => {
    let formattedDate = article.date.toLocaleString('en-us', { month: 'short' }) + ' ' + article.date.getDate();

    return (
    <Card orientation="horizontal" className="card-article">
      <div className="card-article-description k-d-flex-col">
        <div className="author k-font-weight-bold">{article.author}</div>
        <CardTitle className="title k-font-weight-bold">{article.title}</CardTitle>
        <CardSubtitle className="subtitle">{article.subtitle}</CardSubtitle>
        <div className="date k-d-flex">
          <div>{formattedDate}</div>
          <div className="separator">|</div>
          <div>{article.minsLength} min read</div>
        </div>
      </div>
      <div>
        <CardImage className="card-article-image" src={article.imagePath} />
        {article.imageText && <div className="photo-text">{article.imageText}</div>}
      </div>
    </Card>
    );
};

export default GridLayoutCardArticle;
