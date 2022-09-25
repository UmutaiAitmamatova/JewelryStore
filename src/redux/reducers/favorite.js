const initialState = {
    items: {},
    totalFavorite: 0
}

const favorite = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_CART": {
            const newItems = {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
                };
            const allProduct = [].concat.apply([], Object.values(newItems))  

            return {
                ...state,
                items: newItems,
                totalFavorite: allProduct.length,
            };
        }

        default:
            return state;
    }
};

export default favorite;