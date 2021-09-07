import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './UserReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
