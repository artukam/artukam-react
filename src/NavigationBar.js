import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavigationCard from './NavigationCard';
import SocialMediaCard from './SocialMediaCard'
import './NavigationBar.css';
import logo from './images/artukam-logo.png';

class NavigationBar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2">
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
                                <Link to="/">
                                    <img className="artukam-logo" src={logo} alt="artukam logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="artu-navbar">
                            <NavigationCard status={this.props.location.pathname === "/"} path="/" text="ABOUT"/>
                            <NavigationCard status={this.props.location.pathname === "/portfolio"} path="/portfolio" text="PORTFOLIO"/>
                            <NavigationCard status={this.props.location.pathname === "/contact"} path="/contact" text="CONTACT"/>
                            <SocialMediaCard />
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavigationBar);