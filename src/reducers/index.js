import { combineReducers } from 'redux';
import { BlogsReducer } from 'blogs_reducer.js'

const rootReducer = combineReducers({
  blogs: BlogsReducer
});

export default rootReducer;
