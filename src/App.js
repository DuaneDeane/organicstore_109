import React from "react";
import "./App.css";

import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog/catalog";
import Todo from "./todo/todo";
import Home from "./components/home/home";
import About from "./components/about/about";
import Cart from "./components/cart/cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <div className="container-fluid">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/catalog" component={Catalog} ></Route>
            <Route path="/todo" component={Todo}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
