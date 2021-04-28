import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import{ReactComponent as ArrowIcon} from'core/assets/images/ArrowIcon.svg';
import ProductPrice from 'core/components/ProductPrice';
import { makeRequest } from 'core/utils/Request';
import { Product } from 'core/type/Products';
import ProductInfoLoader from '../Loaders/ProductInfo';
import ProductDescriptionLoader from '../Loaders/ProductDescription';
import './styles.scss';


type ParamsType = {
    productsId: string;
}

const  ProductDetails = () => {

    const {productsId} = useParams<ParamsType>();
    const [product, setProduct] = useState <Product>();
    const [isLoading, setIsLoading] = useState(false);
    
    
    useEffect(()=>{
        setIsLoading(true);
        makeRequest({url:`/products/${productsId}`})
        .then(response=>setProduct(response.data))
        .finally(()=>setIsLoading(false));
    },[productsId]);

    return(
        <div className="product-details-contanier">
            <div className="card-base border-20 product-details">
                <Link to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback"/>
                    <h1 className="product-title-goback">voltar</h1>
                </Link>
                <div className="row product-contanier">
                    <div className="col-6 pr-5">
                        
                     {isLoading? <ProductInfoLoader />:(
                     <>
                         <div className="product-details-card text-center">
                            <img src={product?.imgUrl} alt={product?.name} className="product-details-image"/>
                         </div>
                        <h1 className="product-title">
                            {product?.name}
                        </h1>
                            {product?.price && <ProductPrice price={product?.price} />}
                     </>
                            )}
                         
                    </div>
                   <div className="col-6 product-details-card">
                    {isLoading? <ProductDescriptionLoader />:(
                    <>
                         
                        <h1 className="product-description-title">
                            Descrição do Produto
                        </h1>
                        <p className="product-description-text"> 
                       
                        {product?.description}
                        
                        </p>
                     
                    </>
                    )}
                   </div>
                </div>
            </div>
     </div>
    );
}
 export default ProductDetails;