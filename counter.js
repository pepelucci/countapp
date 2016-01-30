function count(state, action) {
	console.log("state --> " + state)
	if (typeof state === 'undefined') {
		console.log("Setting initial state: 0")
		
		return 0
	}
	console.log("check action " + action.type)

	return state+1
	
}
	  


