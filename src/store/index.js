import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers'

const middlewares = [
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middlewares),
        )
    )
}

const store = configureStore({ test: 0 });


export default store