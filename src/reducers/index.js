import { combineReducers } from 'redux';

function testReducer(state = {}, action) {
  return state;
}

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
