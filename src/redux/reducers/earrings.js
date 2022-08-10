const initialState = {
    items: [],
    isLoaded: false
}

const earrings = (state = initialState, action) => {
    if(action.type === 'SET__EARRINGS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        }
    }
    return state;
}

export default earrings;