import React from 'react';
import './App.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function nav() {

	const navStyle1 = {
		float: 'left'
	};

  return (
   <nav>
   		<ul className="nav-links">
   		<Link style={navStyle1} to='/' >
   		<img src={logo} className="App-logo" alt="logo" />
   		</Link>
   		<Link className="btn btn-outline-light"  to='/demo' >
   		  <li>Assignment-1</li>
   		</Link>
		<Link className="btn btn-outline-light" to='main'>
   		  <li>Assignment-2</li>
   		</Link>

   		</ul>
   </nav>
  );
}

export default nav;
