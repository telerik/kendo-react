import * as React from 'react';
import { ListView } from '@progress/kendo-react-listview';
import { Input } from '@progress/kendo-react-inputs';
import { Window } from '@progress/kendo-react-dialogs';

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
import { checkIcon, pencilIcon, eyeIcon } from '@progress/kendo-svg-icons';

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
       style={{
       
         padding: '20px 20px',
       }}
       className="parent-container"
     >
       <div className="k-card-list">
         <Card
           style={{
             width: 260,
             height: 340
           }}
         >
           <CardBody
           style={{
            borderBottom: 'solid 1px rgba(0,0,0,.08)'
           }}
           >
             <CardImage
               src={require(`../assets/article-images/${item.Image}`)}
               style={{
                 width: 260,
                 height: 140,
                 maxWidth: 260,
               }}
             />
             <CardTitle
               style={{
                 fontSize: 18,
               }}
             />
             <CardTitle>{item.Title}</CardTitle>
             <CardTitle>{item.Subtitle}</CardTitle>
             <p className={isScroll ? 'overflow' : ''} contentEditable={toggle}  suppressContentEditableWarning={true}>
               Some quick example text to build on the card title and make up the
               bulk of the card content.
             </p>
           </CardBody>
           <CardActions>
           <div className="footer-buttons-container">
           {visible && <Window title={item.Title} onClose={toggleDialog} initialHeight={350} top={600} minimizeButton="false" maximizeButton="false">
               <div>
                <p>{item.Title}</p>
                <CardImage
               src={require(`../assets/article-images/${item.Image}`)}
               style={{
                 width: 260,
                 height: 140,
                 maxWidth: 260,
               }}
             />
                <p>{item.Content}</p>
               </div>
              </Window>}
                <span>
                    <span className="k-button k-button-md k-button-rectangle k-rounded-md k-button-flat k-button-flat-base" onClick={toggleDialog}>
                        <SvgIcon icon={eyeIcon}/>Review
                    </span>
                </span>
                <span>
                    <span className="k-button k-edit-button k-button-md k-button-rectangle k-rounded-md k-button-flat k-button-flat-primary" onClick={handleClick}>
                      <SvgIcon icon={isEditMode ? checkIcon : pencilIcon}/>Edit
                    </span>
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

   return <div>
      <div className="chart-container">
        <br/>
        <br/>
        <BubbleChart/>
      </div>

      <div className="input-container">
      <Input
        style={{
          border: '2px solid #ccc',
          boxShadow: 'inset 0px 0px 0.5px 0px rgba(0,0,0,0.0.1)',
        }}
        placeholder={'Search'}
        value={value}
        onChange={handleChange}
      />
      </div>

      <div className="listbox-card-container">
      <ListView
        data={filteredList.slice(skip, skip + take)}
        item={MyItemRender}
      />
      <Pager
        skip={skip}
        take={take}
        onPageChange={handlePageChange}
        total={articles.length}
      />
      </div>
   </div>
}