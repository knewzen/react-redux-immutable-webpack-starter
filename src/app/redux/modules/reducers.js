// @flow weak

import { combineReducers }  from 'redux-immutable';
import routerReducer        from './immutableRoute';
import views                from './views';
import userAuth             from './userAuth';

const reducers = {
  views,
  userAuth
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
