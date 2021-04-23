import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
    
const Router = () =>(
<BrowserRouter>
<NavBar />
<Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/catalog">
      <Catalog />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
</Switch>

</BrowserRouter>

);

export default Router;
