import { createStore, combineReducers } from 'redux';

import FlipCardReducer from './reducers/FlipCardReducer';

const reducers = {
  // Launcher: LauncherReducer,
  FlipCard: FlipCardReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
