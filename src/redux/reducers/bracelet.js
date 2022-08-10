const initialState = {
    items: [],
    isLoaded: false
}

const bracelet = (state = initialState, action) => {
    if(action.type === 'SET__BRACELET') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        }
    }
    return state;
}

export default bracelet;