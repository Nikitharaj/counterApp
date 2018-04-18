import {combineReducers} from 'redux'
import counterReducer from './counterreducer'

const rootReducer = combineReducers(
    
   {counterReducer:counterReducer}
  
)

export default rootReducer