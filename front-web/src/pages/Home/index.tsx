import React from 'react';
import {Link} from'react-router-dom';
import{ ReactComponent as MainImage} from '../../core/assets/images/image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () =>(

    <div className="home-contanier">
        <div className="row home-content">
         <div>
             <h1 className="text-title">Conheça o melhor<br /> catalogo de produtos</h1>
             <p className="text-subtitle">Ajudaremos você a encontarr os melhores<br /> produtos diponiveis no mercado</p>
             
          <Link to="/catalog">
             <ButtonIcon text="inicie agora sua busca"  />
          </Link>
        
          </div>
        <div className="col-6">
          <MainImage className="main-image"/>
          </div>
        </div>
    </div>
           
);

export default Home;