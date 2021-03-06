import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
        <div className="container">
            <Link className="navbar-brand text-light font-weight-bold"  to="/" >CRM</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item dropdown mr-md-2 mr-md-0 mb-2">
                        <button  
                            className="nav-link dropdown-toogle btn btn-block btn-success"
                            data-toggle="dropdown">
                            Clientes
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navegacion" >
                            <Link to ="/clientes" className="dropdown-item" > Ver Clientes </Link>
                            <Link to ="/clientes/nuevo" className="dropdown-item" > Nuevo Cliente </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button  
                            className="nav-link dropdown-toogle btn btn-block btn-success"
                            data-toggle="dropdown">
                            Produtos
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navegacion" >
                            <Link to ="/productos" className="dropdown-item" > Ver Productos </Link>
                            <Link to ="/productos/nuevo" className="dropdown-item" > Nuevo Product </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;