import { combineReducers } from 'redux';
import rings from './rings';
import earrings from './earrings';
import watch from './watch';
import bracelet from './bracelet';


const rootReducer = combineReducers({
    rings,
    earrings,
    bracelet,
    watch
})


export default rootReducer;