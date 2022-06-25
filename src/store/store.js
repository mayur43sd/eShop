import { compose , createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore , persistReducer} from 'redux-persist';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// const loggerMiddleware = (store) => (next) => (action) => {

//   if(!action.type)
//   {
//     return next(action)
//   }
//   console.log(action.type);
//   console.log(action.payload);
//   console.log('initial state' , store.getState());
//   next(action);

//   console.log('next state' ,store.getState());
// }

const middleware = [logger ,thunk]

const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart']

}

const persistedReducer = persistReducer(persistConfig , rootReducer)

const composeEnhancers = compose(applyMiddleware(...middleware));


 export const store = createStore(persistedReducer , undefined , composeEnhancers);

 export const persistor = persistStore(store);
