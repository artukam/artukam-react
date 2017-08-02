import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter, setActivePortfolio } from './actions/action'
import FilterButton from './FilterButton';
import PortfolioCard from './PortfolioCard';
import './PortfolioContent.css';

class PortfolioContent extends Component {
	constructor(props) {
		super(props);
		this.filterPortfolio = this.filterPortfolio.bind(this);
	}

	filterPortfolio(filterText) {
		const activePortfolio = filterText === "All" ? this.props.portfolio : this.props.portfolio.filter(val => (val.technologyList.indexOf(filterText) >= 0))
		this.props.setFilter(filterText);
		this.props.setActivePortfolio(activePortfolio);
	}

	componentWillMount() {
		this.props.setActivePortfolio(this.props.portfolio);
	}

	render() {
		const filterButtons = this.props.filters.map((val, idx) => (
			<FilterButton key={idx} 
						  text={val} 
						  status={val === this.props.currentFilter} 
						  filterPortfolio={()=>this.filterPortfolio(val)}/>
		))
		const portfolioCards = this.props.currentPortfolio.map((val, idx) => (
			<PortfolioCard projectName={val.projectName}
						   role={val.role}
						   projectImage={val.projectImage}
						   description={val.description}
						   technologyList={val.technologyList}
						   key={idx}/>
		))
		return (
			<div className="col-xs-12 outer-container">
				<div className="col-xs-12 inverse-box">
					<div className="col-xs-12 outer-container">
						<h2>Portfolio</h2>
					</div>
					<div className="col-xs-12 outer-container">
						<span className="show-text">Show:</span>
						{filterButtons}
					</div>
				</div>
				<div className="col-xs-12 outer-container">
					{portfolioCards}
				</div>
			</div>
		)	
	}
}

function mapStateToProps(state) {
	return {
		portfolio: state.portfolio,
		filters: state.filters,
		currentFilter: state.currentFilter,
		currentPortfolio: state.currentPortfolio,
	}
}

export default connect(mapStateToProps, { setFilter, setActivePortfolio })(PortfolioContent);