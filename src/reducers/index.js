import { ACTIONS } from '../constants'

const init = (store, action) => {
    return store;
};

const isMobile = (store, action) => {
    const isMobile = action.isMobile;
    return (new Boolean(isMobile)) ? { ...store, isMobile } : store
}

// enjoy
const reducers = {};

for (let key in ACTIONS) {
    let action = ACTIONS[key];
    let reducer = '';
    for (let i = 0; i < action.length; ++i) {
        if (action[i] === '_') {
            ++i;
            if (action[i]) reducer += action[i];
        } else {
            reducer += action[i].toLowerCase()
        }
    }
    reducers[action] = reducer;
}

const reducer = (state = {}, action) => {
    let currentReducerName = '';
    const type = action.type;
    if (type[0] === '@' && type[1] === '@' && type.indexOf('INIT') !== -1) {
        currentReducerName = 'init';
    } else {
        for (let key in reducers) {
            if (key === type) {
                currentReducerName = reducers[key];
                break;
            }
        }
    }
    const currentReducer = eval(currentReducerName);
    const newState = currentReducer(state, action);
    return (newState) ? newState : state;
};

export default reducer;