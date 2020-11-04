// reducer: a simple fn receives state and action and return a new state
const cartCounterReducer = (state = 0, action) => {
    if(action.type === "INCREMENT_COUNTER") {
        return state + 1;
    }
    return state;
};

export default cartCounterReducer;