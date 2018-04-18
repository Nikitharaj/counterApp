import rootReducer from './index'
import { createStore } from 'redux';

export default configureStore = ()=>{
   // console.log("in configure store");
    let store = createStore(rootReducer)
    return store;
}