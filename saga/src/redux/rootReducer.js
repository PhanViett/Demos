import postsReducer from '../reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    posts: postsReducer,
});

export default rootReducer;