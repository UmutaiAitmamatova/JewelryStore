const initialState = {
    items: {},
    totalPrice: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_CART": {
            const newItems = {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
                };
            const allProduct = [].concat.apply([], Object.values(newItems))  
            const totalCount = allProduct.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalPrice: allProduct.length,
                totalCount,
            };
        }

        default:
            return state;
    }
};

export default cart;