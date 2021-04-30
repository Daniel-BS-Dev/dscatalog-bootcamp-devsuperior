import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from 'core/components/Navbar';
import Admin from 'pages/Admin';
import Catalog from 'pages/Catalog';
import ProductDetails from 'pages/Catalog/components/ProductDetails';
import Home from 'pages/Home';
    
const Router = () =>(
<BrowserRouter>
<NavBar />
<Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/products" exact>
      <Catalog />
    </Route>
    <Route path="/products/:productsId">
      <ProductDetails/>
    </Route>
    <Redirect from="/admin" to="/admin/products" exact/>
    <Route path="/admin">
     <Admin />
    </Route>
</Switch>

</BrowserRouter>

);

export default Router;
