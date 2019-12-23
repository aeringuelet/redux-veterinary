import { createStore } from 'redux';
import reducers from './reducers';
import { getStateStorage, saveStateStorage } from './localstorage';

const storageState = getStateStorage();

const store = createStore(
    reducers, 
    storageState, // initial state
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    saveStateStorage({
        appointments: store.getState().appointments
    })
} )

export default store;