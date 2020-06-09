import CounterState from "../types/CounterState"

const initialCounter: CounterState = {
    count: 0
}

const counterReducer = (state: CounterState = initialCounter, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            let incrementState = {
                count: state.count + action.step
            }
            return incrementState

        case "DECREMENT":
            let newCount = state.count - action.step 
            if (newCount <= 0) {
                newCount = 0
            }
            let decrementState = {
                count: newCount
            }
            return decrementState
        case "RESET":
            let resetState = {
                count: 0
            }
            return resetState

        default:
            return state;
    }
}

export default counterReducer;