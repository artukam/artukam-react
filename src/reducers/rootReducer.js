const DEFAULT_STATE = {
	portfolio: [],
	filters:[],
	currentFilter: "",
}

export default (state=DEFAULT_STATE, action={type:null}) => {
	switch(action.type){
		default:
			return state;
	}
}