export const SET_FILTER = 'SET_FILTER';
export const SET_ACTIVE_PORTFOLIO = 'SET_ACTIVE_PORTFOLIO';

export function setFilter(text) {
	return {
		type: SET_FILTER,
		currentFilter: text,
	}
}

export function setActivePortfolio(activePortfolio) {
	return {
		type: SET_ACTIVE_PORTFOLIO,
		currentPortfolio: activePortfolio,
	}
}
