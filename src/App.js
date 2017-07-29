import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
           <NavigationBar />
        </div>
      </div>
    );
  }
}

export default App;
