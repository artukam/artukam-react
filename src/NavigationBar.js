import React, { Component } from 'react';
import NavigationCard from './NavigationCard';
import './NavigationBar.css';
import logo from './images/artukam-logo.png';

class NavigationBar extends Component {
    render() {
        return (
            <div className="col-sm-2">
                <nav className="navbar navbar-artukam navbar-fixed-side">
                    <div className="container-fluid">
                        <div className="navbar-header navbar-logo-container">
                            <button className="navbar-toggle btn-artukam" data-target="#artu-navbar" data-toggle="collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <div className="logo-div">
                                <img className="artukam-logo" src={logo} alt="artukam logo" />
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="artu-navbar">
                            <NavigationCard text="ABOUT"/>
                            <NavigationCard text="PORTFOLIO"/>
                            <NavigationCard text="CONTACT"/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationBar;