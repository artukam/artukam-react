import PlaceholderProjectImage from "../images/placeholder-project.png";
import {
	SET_FILTER,
	SET_ACTIVE_PORTFOLIO,
} from '../actions/action'

const DEFAULT_STATE = {
	portfolio: [
		{
			projectName: "Example Project 1",
			role: "Fullstack Engineer",
			projectImage: PlaceholderProjectImage,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			technologyList: ["Javascript"],
		},
		{
			projectName: "Example Project 2",
			role: "Fullstack Engineer",
			projectImage: PlaceholderProjectImage,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			technologyList: ["Python"],
		},
		{
			projectName: "Example Project 3",
			role: "Fullstack Engineer",
			projectImage: PlaceholderProjectImage,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			technologyList: ["Ruby"],
		},
	],
	filters: ["All", "Javascript", "Python", "Ruby"],
	currentFilter: "All",
	currentPortfolio: [],
}

export default (state=DEFAULT_STATE, action={type:null}) => {
	switch(action.type){
		case SET_FILTER:
			return {
				...state,
				currentFilter: action.currentFilter,
			};
		case SET_ACTIVE_PORTFOLIO:
			return {
				...state,
				currentPortfolio: action.currentPortfolio,
			};
		default:
			return state;
	}
}