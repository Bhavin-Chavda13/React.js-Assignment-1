import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {
   
  state = {
    username: "Bhavin"
  }
  usernameHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (

      <div className="App">
           <header className="App-header">
           <h1>Assignment-1</h1>
          <UserInput username={this.state.username} changed={this.usernameHandler} />
          <UserOutput username={this.state.username} />
          {/* <UserOutput username={this.state.username} />  */}
        </header>
      </div>
     
    );
  }
}

export default App;