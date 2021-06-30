import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Especialista from './pages/Especialista/Especialista';
import Contato from "./pages/Contato/Contato";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Routes = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/especialista" component={Especialista}/>
      <Route exact path="/contato" component={Contato}/>
    </Switch>
    <Footer/>
  </BrowserRouter>
);

export default Routes;
