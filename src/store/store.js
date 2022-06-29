import { compose , createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore , persistReducer} from 'redux-persist';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga';


const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart']

}
const sagaMiddleware = createSagaMiddleware();

const middleware = [process.env.NODE_ENV !== 'production' && logger ,sagaMiddleware].filter(Boolean);

const persistedReducer = persistReducer(persistConfig , rootReducer)

const composeEnhancers = compose(applyMiddleware(...middleware));



 export const store = createStore(persistedReducer , undefined , composeEnhancers);

 export const persistor = persistStore(store);

 sagaMiddleware.run(rootSaga);