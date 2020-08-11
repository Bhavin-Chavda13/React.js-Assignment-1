import React from 'react';
import './App.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function nav() {

	const navStyle = {
		color: 'white'
	};

	const navStyle1 = {
		float: 'left'
	};

  return (
   <nav>
   		<ul className="nav-links">
   		<Link style={navStyle1} to='/' >
   		<img src={logo} className="App-logo" alt="logo" />
   		</Link>
   		<Link className="btn btn-outline-light"  to='/about' >
   		  <li>About</li>
   		</Link>
   		<Link className="btn btn-outline-light"  to='/contact'>
   		  <li>contact</li>
   		</Link>
		<Link className="btn btn-outline-light" to="/adduser">Adduser</Link>
   		</ul>
		
   </nav>
  );
}

export default nav;
