import * as Actions from './constants'



export function increment(){
    
    return{
        type:Actions.INCREMENT
    }
}

export function decrement(){
    return{
        type:Actions.DECREMENT
    }
}