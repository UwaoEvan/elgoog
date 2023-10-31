const initState = {
    characters: []
}

export default (state = initState, action) => {
    switch(action.type){
        case "FETCHCHARACTERS":
            return {
                ...state, characters: action.payload
            }

        default: 
            return state
    }
}