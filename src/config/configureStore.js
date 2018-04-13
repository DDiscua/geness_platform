import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxMiddleware from 'react-block-ui/reduxMiddleware';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';




const enhancer = compose(composeWithDevTools(applyMiddleware(reduxMiddleware, thunkMiddleware, logger)));
const store = createStore(
    rootReducer,
    {},
    enhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {

    const { user } = store.getState();
    if (user.isAuthenticated) {
        localStorage.setItem('reduxState', JSON.stringify({ user }));
    }

});

/*const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer)
let persistor = persistStore(store)*/

export {
    store
}

