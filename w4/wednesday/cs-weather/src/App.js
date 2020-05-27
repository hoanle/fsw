import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <div className="container col-12 no-padding">
            <NavBar />
            <div className="col-12 no-padding">
              <HomePage />
            </div>
          </div>
        
      </div>
    );
  }
}

export default App;
