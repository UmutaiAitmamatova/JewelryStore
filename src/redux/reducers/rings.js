const initialState = {
    items: [],
    isLoaded: false
}

const rings = (state = initialState, action) => {
    if(action.type === 'SET__RINGS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        }
    }
    return state;
}

export default rings;