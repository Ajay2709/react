import { useReducer } from "react";
import { produce } from "immer";
import Button from '../components/Button';
import Panel from '../components/Panel';


function CounterPage({initialCount}) {
    //const [count, setCount] = useState(initialCount);
    //const [incrementValue, setIncrementValue] = useState(0);
    
    /** Reducer function
     * Whatever returned from this function will be the new state
     * If nothing is returned, then the state will be undefined.
     * No async/await, no requests,s no promises, no outside variables should be used.
     * dispatch - calling this function triggers the reducer function with:
     *  > the state as the first param (state)
     *  > its args list as the second param (action)
     */
    const [state, dispatch] = useReducer(produce( // produce is used for Immer. Not required otherwise.
        (state, action) => { //action => the object that is passed as the only param to dispatch()
            if(action.type === 'increment'){
                //Direct mutation of state can be done when Immer -> produce is used. 
                state.count = state.count + 1;
                return; 
                // return {
                //     ...state,
                //     count: state.count + 1
                // }
            } else if(action.type === 'decrement'){
                return {
                    ...state,
                    count: state.count - 1
                }
            } else if(action.type === 'update-increment-val'){
                return {
                    ...state,
                    incrementValue: action.incrementVal
                }
            } else if(action.type === 'handle-submit'){
                return {
                    ...state,
                    count: state.count + state.incrementValue,
                    incrementValue: 0
                }
            } 
            
        }), 
        {
            count: 10, 
            incrementValue: 0
        }
    )
    const increment = () => {
        //setCount(count+1);
        dispatch({
            type: 'increment'
        });
    }
    const decrement = () => {
        //setCount(count-1);
        dispatch({
            type: 'decrement'
        });
    }
    const handleChange = (event) => {
        const val = parseInt(event.target.value) || 0;
        //setIncrementValue(val);
        dispatch({
            type: 'update-increment-val',
            incrementVal: val
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //setCount(count + incrementValue);
        //setIncrementValue(0);
        dispatch({
            type: 'handle-submit'
        })
    }
    return (
        <Panel className="m-3">
        <div>
            <h1> Count is {state.count} </h1>
            <Button onClick={increment}> Increment</Button>
            <Button onClick={decrement}> decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input 
                type="number" 
                className="p-1 m-3 bg-gray-50 border-gray-300" 
                value={state.incrementValue || ""} 
                onChange={handleChange}
            />
            <Button>Add it!</Button>
        </form>
        </Panel>
    )
}

export default CounterPage;