import React from 'react';
import './App.css';
import Nav from './Nav';
import NotFound from './NotFound';
import Demo from './Demo';
import Main from './Main';
import Footer from './Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function Home() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
        <Route path="/" exact component={Dash} />
        <Route path="/demo" component={Demo} />
        <Route path="/main" component={Main} />
        <Route component={NotFound} />
        </Switch>
       <Footer />
      </div>
    </Router>
  );
}

const Dash = () =>(
  <div>
    <center><h1>Home Page</h1></center>    
  </div>
);

export default Home;
