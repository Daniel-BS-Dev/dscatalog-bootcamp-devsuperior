import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import{ReactComponent as Seta} from'../../../../core/assets/images/Seta.svg';
import{ReactComponent as Product} from '../../../../core/assets/images/product.svg';
import './styles.scss';
import ProductPrice from '../../../../core/components/ProductPrice';

type ParamsType = {
    productsId: string;
}

const  ProductDetails = () => {

    const {productsId} = useParams<ParamsType>();
    console.log(productsId);

    return(
        <div className="product-details-contanier">
            <div className="card-base border-20 product-details">
                <Link to="/products" className="product-details-goback">
                    <Seta className="icon-goback"/>
                    <h1 className="product-title-goback">voltar</h1>
                </Link>
                <div className="row product-contanier">
                    <div className="col-6 pr-5">
                        <div className="product-details-card text-center">
                        <Product className="product-details-image"/>
                        </div>
                        <h1 className="product-title">Computador Desktop - Intel Core i7</h1>
                    
                        <ProductPrice price="3.799,00"/>
                        
                    </div>
                    <div className="col-6 product-details-card">
                        <h1 className="product-description-title">
                            Descrição do Produto
                        </h1>
                        <p className="product-description-text">Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos 
                        simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais 
                        para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as 
                        notificações e principais configurações são reunidas em uma única tela de fácil acesso.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 export default ProductDetails;