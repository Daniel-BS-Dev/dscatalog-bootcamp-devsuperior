import React from 'react';
import {ReactComponent as ArrowIcon} from 'core/assets/images/ArrowIcon.svg';
import './styles.scss';
import { generateList } from 'core/utils/Lists';

type Props = {
    totalPages : number;
    activePage : number;
    onChange:(item: number) => void;
}
const Pagination = ({totalPages, activePage, onChange}:Props) => {

    const items = generateList(totalPages);
    const previousCalss = totalPages > 0 && activePage > 0 ? 'active-page' : 'inactive-page';
    const nextClass = (activePage +1) < totalPages ?  'active-page' : 'inactive-page';

    return (
       <div className="pagination-container">
           <ArrowIcon 
           className= {`pagination-previous ${previousCalss}`}
           onClick = {() => onChange (activePage-1)}
           />
           {items.map(item => (
           <div key={item}
           className= {`pagination-item ${item===activePage? 'active': ''}`}
           onClick = {() => onChange (item)}
           >
               {item +1}
           </div>
           ))}
           <ArrowIcon 
           className= {`pagination-next ${nextClass}`} 
           onClick = {() => onChange (activePage + 1)}
           />
       </div>
    );
}
export default Pagination;