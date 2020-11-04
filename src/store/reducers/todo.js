const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
          var copy = [...state];
          copy.push(action.payload);
            return copy;
        
        default:
            return state;
    }
};
    export default todoReducer;