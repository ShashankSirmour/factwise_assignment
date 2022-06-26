import { combineReducers } from 'redux';
import { profileReducer } from './profile';

const rootReducer = combineReducers({
  profile: profileReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
