const reducer = (state = 0, action) => {
    switch (action.type) {
        case "TEST1":
            return state + 1;
        default:
            break;
    }
};
export default reducer;
