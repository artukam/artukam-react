import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutContent from './AboutContent';
import PortfolioContent from './PortfolioContent';
import ContactContent from './ContactContent';
import './MainContent.css';

class MainContent extends Component {
	render() {
		return (
			<div className="col-sm-9 col-md-10 main-content-box">
				<Switch>
					<Route exact path="/" component={AboutContent} />
					<Route exact path="/portfolio" component={PortfolioContent} />
					<Route exact path="/contact" component={ContactContent} />
				</Switch>
			</div>
		)
	}
}

export default MainContent;