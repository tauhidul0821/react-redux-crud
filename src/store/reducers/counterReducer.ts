
interface CounterState {
    count: number;
}

interface IncrementAction{
    type: 'INCREMENT';
}

interface DecrementAction{
    type: 'DECREMENT';
}

type CounterActionTypes = IncrementAction | DecrementAction;

const initialState: CounterState = {
    count: 0
};

const counterReducer = (state = initialState, action: CounterActionTypes): CounterState => {
    switch (action.type){
        case "INCREMENT":
            return{
                ...state,
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state;

    }
}

export default counterReducer;