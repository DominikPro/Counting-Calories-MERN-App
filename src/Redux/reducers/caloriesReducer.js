const caloriesReducer = (calories = [
    { name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "" },
    { name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "" },
    { name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "" },
], action) => {
    switch (action.type) {
        case 'ADD_CALORIES':
            return [...calories, action.payload]
        case 'REMOVE_CALORIES':

            return calories

        default:
            return calories;
    }
}
export default caloriesReducer;