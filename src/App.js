import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './NavigationBar';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
           <NavigationBar />
           <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
