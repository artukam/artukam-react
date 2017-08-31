import courseReportSpread from "../images/course_report_spread.png";
import tradecraftSpread from "../images/tradecraft_spread.png";
import eplSpread from "../images/epl_spread.png";
import momentaiSpread from "../images/momentai_spread.png";
import {
	SET_FILTER,
	SET_ACTIVE_PORTFOLIO,
} from '../actions/action'

const DEFAULT_STATE = {
	portfolio: [
		{
			projectName: "Course Report",
			role: "Software Engineer",
			projectImage: courseReportSpread,
			description: "Web application featuring information, reviews, applications and other details for software development and UI/UX design courses.",
			technologyList: ["Javascript", "Ruby", "Rails", "PostgreSQL", "RSpec", "HTML5", "CSS3"],
		},
		{
			projectName: "Tradecraft",
			role: "Software Engineer",
			projectImage: tradecraftSpread,
			description: "Application designed to help job seekers track opportunities and collate research for companies.",
			technologyList: ["Javascript", "ReactJS", "Redux", "Node.js", "Express", "Mongoose", "MongoDB","HTML5", "CSS3"],
		},
		{
			projectName: "English Premier League Statistics",
			role: "Software Engineer",
			projectImage: eplSpread,
			description: "EPL statistics platform to chart out player offensive output for the top 6 teams from years of 2010 to 2017.",
			technologyList: ["Javascript", "jQuery", "Python", "BeautifulSoup4", "HTML5", "CSS3"],
		},
		{
			projectName: "Momentai",
			role: "Software Engineer",
			projectImage: momentaiSpread,
			description: "Clean and minimalistic task tracking platform to enable users to easily maintain their schedule of projects.",
			technologyList: ["Javascript", "jQuery", "Node.js", "Express", "Mongoose", "MongoDB", "HTML5", "CSS3"],
		},
	],
	filters: ["All", "Javascript", "ReactJS", "Redux", "Node.js", "Express", "Mongoose", "MongoDB", "Python", "BeautifulSoup4", "Ruby", "Rails", "PostgreSQL"],
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