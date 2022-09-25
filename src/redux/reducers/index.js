import { combineReducers } from 'redux';
import rings from './rings';
import earrings from './earrings';
import watch from './watch';
import bracelet from './bracelet';
import cart from './cart';
import favorite from './favorite';


const rootReducer = combineReducers({
    rings,
    earrings,
    bracelet,
    watch,
    cart,
    favorite
})


export default rootReducer;