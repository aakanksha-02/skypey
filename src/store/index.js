import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { contacts } from '../staticData';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, { contacts }
  , composeWithDevTools(
    applyMiddleware(),
   ));


export default store;