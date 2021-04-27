
import React, {useEffect, useState} from 'react';
import {Link} from'react-router-dom';
import { ProductsRequest } from '../../core/type/Products';
import { makeRequest } from '../../core/utils/Request';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () =>{
     
    const[productResponse, setProductResponse] = useState<ProductsRequest>();

    useEffect(()=>{

        const params = {
            page:0,
            linesPerPage:12
        }
        makeRequest({url:'/products',params})
        .then(response=>setProductResponse(response.data))
    },[])
    
    return(
         <div className="catolog-contanier">
           <h1 className="catalog-title">
            Catalogo de produtos
           </h1>
        <div className="catalog-products">
       {productResponse?.content.map(product => (
           <Link to={`/products/${product.id}`} key={product.id}>
               <ProductCard product={product}/>
            </Link>
       ))}
      
        </div>
    </div>
    
 );
}
export default Catalog;