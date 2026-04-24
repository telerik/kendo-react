import * as React from 'react';

const GridLayoutArticleHeader = ({article, position}) => {
    let formattedDate = article.date.toLocaleString('en-us', { month: 'short' }) + ' ' + article.date.getDate();

    return (
    <div className="article k-d-flex" key={position}>
      <div className="article-position k-d-inline-flex k-text-primary k-font-weight-bold">{`0${position}`}</div>
      <div className="article-description k-d-flex-col">
        <div className="author">{article.author}</div>
        <div className="title k-font-weight-bold">{article.title}</div>
        <div className="date k-d-flex">
          <div>{formattedDate}</div>
          <div className="separator">|</div>
          <div>{article.minsLength} min read</div>
        </div>
      </div>
    </div>
    );
};

export default GridLayoutArticleHeader;
