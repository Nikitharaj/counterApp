import * as Actions from '../actions/constants'

const initialState ={
    counter:0,
    
}

export default counterReducer=(state=initialState,action)=>{
    //console.log("inside counterreducer")
   
    switch(action.type){
        case Actions.INCREMENT:
         return Object.assign({},{counter:++state.counter});

        case Actions.DECREMENT:
        return Object.assign({},{counter:--state.counter});
        default:
       
        return state
    }
}


