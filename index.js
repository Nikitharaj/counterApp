import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './reducers/configureStore'
import React from 'react'

const store = configureStore()

const counterApp =()=>{
    return(
        <Provider store={store}>
        <App/>
        </Provider>
    )
}


AppRegistry.registerComponent('countapp', () => counterApp);
