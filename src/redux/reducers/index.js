import { combineReducers } from 'redux';
import rings from './rings';
import earrings from './earrings';
import watch from './watch';
import bracelet from './bracelet';
import cart from './cart';


const rootReducer = combineReducers({
    rings,
    earrings,
    bracelet,
    watch,
    cart
})


export default rootReducer;