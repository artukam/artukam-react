import React, { Component } from 'react';
import './NavigationCard.css';

class NavigationCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		    <div className="navigation-card-container">
		    	<div className="status-div"/>
		    	<div>
		    		<p className="inactive-card-text">{this.props.text}</p>
		    	</div>
		    </div>
		)
	}
}

export default NavigationCard;