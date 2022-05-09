import { useReducer } from "react";

const initialState = { count: 0}


type CounterState= {
    count:number
}

type CounterAction = {
    type:"incriment"| "decrement"
    payload:number
}

const reducer = (state:CounterState, action:CounterAction)=>{
    switch(action.type){
        case "incriment":
            return { count: state.count + action.payload}
        case "decrement":
            return { count : state.count - action.payload}
        default:
        return state
    }

}

const Counter  = ()=>{
    const [ state, dispatch]= useReducer(reducer,initialState)
    return(
        <>
        Count:{state.count}
        <button onClick={()=>dispatch({type:"incriment", payload:10})}>Increment 10</button>
        <button onClick={()=>dispatch({type:"decrement", payload:10})}>decrement 10</button>

        </>
    )
}

export default Counter