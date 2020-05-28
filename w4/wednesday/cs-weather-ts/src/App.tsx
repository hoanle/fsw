import React from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import CustomNavBar from './components/CustomNavBar/CustomNavBar';
function App() {
  return (
    <div className="App">
          <div className="container col-12 no-padding">
            <CustomNavBar />
            <div className="col-12 no-padding">
              <HomePage />
            </div>
          </div>
        
      </div>
  );
}

export default App;
