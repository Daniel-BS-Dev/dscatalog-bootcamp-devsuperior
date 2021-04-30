import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import'./styles.scss';

const NavBar = () => (

    <nav className="row bg-primary main-nav">
        <div className="col-2" >
            <Link to="/" className="nav-logo-text">
           <h4>DS Catalog</h4>
           </Link>
        </div>
        <div className="col-6 offset-2">
          <ul className="main-menu">
              <li>
                  <NavLink to ="/"  exact>
                      home
                  </NavLink>
              </li>
              <li>
                  <NavLink to ="/products">
                      Catalog
                  </NavLink>
              </li>
              <li>
                  <NavLink to ="/admin">
                      Admin
                  </NavLink>
              </li>
          </ul>
        </div>
    </nav>


);

export default NavBar;