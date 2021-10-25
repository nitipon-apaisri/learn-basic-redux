const reducer = (state = [], action) => {
    switch (action.type) {
        case "TEST1":
            return state.concat(action.data);
        //action.data = import data from component by action if needed
        default:
            break;
    }
};
export default reducer;
