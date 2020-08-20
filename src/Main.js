import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    name: "bhavin",
    // uname: "chavda"
  }

  textHandler = (event) => {
    this.setState({name: event.target.value});
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.name.split("")];
    chars.splice(index, 1);
    this.setState({name: chars.join("")});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Assignment-2</h1>
          <input type="text" onChange={this.textHandler} value={this.state.name}></input>
          <p>{this.state.name.length} chars</p>
          <ValidationComponent name={this.state.name} />
          <div>
            {this.state.name.split("").map((char, index) => {
              return <CharComponent char={char} delete={() => this.deleteCharHandler(index)} />
            })}
          </div>
         
        </header>
      </div>
    );
  }
}

export default App;