import React, { Component } from "react";
import "./navBar.css";
import Catalog from '../catalog/catalog';
import { Link } from "react-router-dom";
import Cart from '../cart/cart';


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#aba"}}>
      <Link className="navbar-brand" to="/">OrganicStore</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">Catalog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">Todo List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
        </form>
      </div>
    </nav>
    );
  }
}

export default NavBar;
