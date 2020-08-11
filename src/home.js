import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Adduser from './Adduser';
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
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/adduser" component={Adduser} />
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
    <div className="container">
      <div className="py-4">
      <table className="table border shadow">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><i  className="fa">&#xf044;</i></td>
      <td><i  className="fa fa-trash-o"></i></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><i  className="fa">&#xf044;</i></td>
      <td><i  className="fa fa-trash-o"></i></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><i  className="fa">&#xf044;</i></td>
      <td><i  className="fa fa-trash-o"></i></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
    
  </div>
);

export default Home;
