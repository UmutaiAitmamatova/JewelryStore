const initialState = {
    items: [],
    isLoaded: false
}

const watch = (state = initialState, action) => {
    if(action.type === 'SET__WATCH') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        }
    }
    return state;
}

export default watch;