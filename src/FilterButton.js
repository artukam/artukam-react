import React from 'react';

const FilterButton = props => {
	const buttonFormat = props.status ? "btn btn-filter-active" : "btn btn-filter-inactive"
	return (
		<button className={buttonFormat} onClick={props.filterPortfolio}>
			{props.text}
		</button>
	)
}

export default FilterButton