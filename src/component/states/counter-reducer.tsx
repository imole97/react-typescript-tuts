import { useReducer } from "react"

type CounterState = {
    count: number
}

type CounterAction = {
    type: 'increment' | 'decrement' | 'reset'
    payload: number
}
const initialState = {count: 0}

function reducer (state:CounterState, action:CounterAction){
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={()=>dispatch({type:'increment', payload: 10})}>
        increment 10
      </button>
      <button onClick={()=>dispatch({type:'decrement', payload: 10})}>
        decrement 10
      </button>
      <button onClick={()=>dispatch({type:'reset', payload: 10})}>
        decrement 10
      </button>
    </>
  )
}

export default Counter
