const DEFAULT_STATE = {
	portfolio: [],
	filters:["All", "Javascript", "Python", "Ruby"],
	currentFilter: "All",
	currentView: [],
}

export default (state=DEFAULT_STATE, action={type:null}) => {
	switch(action.type){
		default:
			return state;
	}
}