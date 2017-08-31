import React from 'react';

const PortfolioCard = props => {
	const technologyList = props.technologyList.map((val, idx) => (
		<span key={idx}> {val} </span>
	))
	return (
		<div className="col-xs-12 col-sm-6 col-lg-4 project-card-container">
			<div className="col-xs-12 outer-container">
				<div className="col-xs-11 outer-container">
					<img src={props.projectImage}
					     className="img img-responsive" 
					     alt={props.projectName}/>
				</div>
			</div>
			<div>
				<p className="project-name-text">{props.projectName}</p>
				<p className="project-role-text">{props.role}</p>
				<p>{props.description}</p>
				<p><em>Stack</em>: {technologyList}</p>
			</div>
		</div>
	)
}

export default PortfolioCard;