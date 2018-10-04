
import {combineReducer} from 'redux';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducer({
  entities: entitiesReducer
});

export default rootReducer;
