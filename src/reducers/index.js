import { combineReducers } from 'redux';
import BlogsReducer from './blogs_reducer'

const rootReducer = combineReducers({
  blogs: BlogsReducer
});

export default rootReducer;
