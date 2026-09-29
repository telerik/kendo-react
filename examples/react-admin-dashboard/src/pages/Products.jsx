import * as React from 'react';
import { ListView } from '@progress/kendo-react-listview';
import { Input } from '@progress/kendo-react-inputs';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

import {
  Card,
  CardTitle,
  CardImage,
  CardActions,
  CardBody,
} from '@progress/kendo-react-layout';
import { Pager } from '@progress/kendo-react-data-tools';
import articles from '../data/articles.json';
import { BubbleChart } from "../components/products/BubbleChart"
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, pencilIcon, eyeIcon, searchIcon } from '@progress/kendo-svg-icons';

 const MyItemRender = (props) => {
  const [toggle, setToggle] = React.useState(false)
  const [isScroll, setScroll] = React.useState(false)
  const [isEditMode, setIsEditMode] = React.useState(false)
  const [visible, setVisible] = React.useState(false);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  const handleClick = () => {
    setToggle(!toggle)
    setScroll(!isScroll)
    setIsEditMode(!isEditMode)
  }

   let item = props.dataItem;
   return (
     <div
       className="product-card-item"
     >
       <div className="k-card-list">
         <Card
           className="product-card"
         >
           <CardBody
           className="product-card-body"
           >
             <CardImage
               src={require(`../assets/article-images/${item.Image}`)}
               className="product-card-image"
             />
             <CardTitle className="product-card-title">{item.Title}</CardTitle>
             <p className="product-card-subtitle">{item.Subtitle}</p>
             <p className={isScroll ? 'overflow' : ''} contentEditable={toggle}  suppressContentEditableWarning={true}>
               Some quick example text to build on the card title and make up the
               bulk of the card content.
             </p>
           </CardBody>
           <CardActions>
           <div className="footer-buttons-container">
           {visible && <Window title={item.Title} onClose={toggleDialog} initialHeight={350} top={600} minimizeButton={false} maximizeButton={false}>
               <div>
                <p>{item.Title}</p>
                <CardImage
               src={require(`../assets/article-images/${item.Image}`)}
               className="product-window-image"
             />
                <p>{item.Content}</p>
               </div>
              </Window>}
                <span>
                    <button type="button" className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" onClick={toggleDialog}>
                        <SvgIcon icon={eyeIcon}/>Review
                    </button>
                </span>
                <span>
                    <button type="button" className="k-button k-edit-button k-button-md k-rounded-md k-button-flat k-button-flat-primary" onClick={handleClick}>
                      <SvgIcon icon={isEditMode ? checkIcon : pencilIcon}/>Edit
                    </button>
                </span>
            </div>
           </CardActions>
         </Card>
       </div>
     </div>
   );
 };

export const Products = () => {
  const [filteredList, setFilteredList] = React.useState(articles);
  const [value, setValue] = React.useState('');


   const [page, setPage] = React.useState({
      skip: 0,
      take: 10,
    });

    const handlePageChange = (e) => {
      setPage({
        skip: e.skip,
        take: e.take,
      });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = React.useCallback((event) => {
      setValue(event.target.value);
      const results = articles.filter(post => {
         if (event.target.value === "") return articles
         return post.Title.includes(event.target.value)
     })
     setFilteredList(results)
    });


    const { skip, take } = page;
    const clearSearch = () => {
      setValue('');
      setFilteredList(articles);
      setPage({ skip: 0, take: 10 });
    };

   return <div className="products-page">
      <div className="page-heading">
        <h1>Product updates</h1>
        <p>Browse the latest product stories, releases, and research.</p>
      </div>
      <div className="chart-container">
        <BubbleChart/>
      </div>

      <div className="input-container">
      <Input
        aria-label="Search product updates"
        placeholder="Search product updates"
        value={value}
        onChange={handleChange}
        prefix={() => <SvgIcon icon={searchIcon} />}
      />
      </div>

      <div className="listbox-card-container">
      {filteredList.length ? (
        <>
          <ListView
            data={filteredList.slice(skip, skip + take)}
            item={MyItemRender}
          />
          <Pager
            skip={skip}
            take={take}
            onPageChange={handlePageChange}
            total={filteredList.length}
          />
        </>
      ) : (
        <div className="empty-state">
          <h2>No product updates found</h2>
          <p>Try a different search term or clear the search to browse all updates.</p>
          <Button fillMode="outline" onClick={clearSearch}>Clear search</Button>
        </div>
      )}
      </div>
   </div>
}