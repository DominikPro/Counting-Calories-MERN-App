const caloriesReducer = (calories = { name: "", portion: "", caloriesIn100: "", remarks: "" }, action) => {
    switch (action.type) {
        case 'ADD_CALORIES':

            return calories;
        case 'REMOVE_CALORIES':

            return calories

        default:
            return calories;
    }
}
export default caloriesReducer;